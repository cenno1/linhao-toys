"use client";

import { useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { addAttributionToMailto, createInquiryAttribution, type InquiryAttribution } from "@/lib/inquiry-attribution";
import { buildProductInquiryMailtoFromForm, type ProductInquiryFormData } from "@/lib/product-utils";

export function useInquirySubmission(productName: string, formName: string) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fallbackHref, setFallbackHref] = useState("");
  const busy = useRef(false);
  const started = useRef(false);
  const attempt = useRef<{ signature: string; attribution: InquiryAttribution } | null>(null);
  const context = () => ({ form_name: formName, product_name: productName, source_page: window.location.pathname });

  function markStarted() {
    if (!started.current) {
      started.current = true;
      trackEvent("inquiry_form_start", context());
    }
    if (status === "success" || status === "error") setStatus("idle");
  }

  function markInvalid() {
    markStarted();
    trackEvent("inquiry_validation_error", context());
  }

  async function submit(form: ProductInquiryFormData, website = "") {
    if (busy.current) return false;
    busy.current = true;
    setStatus("sending");
    const signature = JSON.stringify({ productName, ...form, website });
    // Keep the same ID and attribution when retrying an unchanged request.
    if (!attempt.current || attempt.current.signature !== signature) {
      attempt.current = { signature, attribution: createInquiryAttribution() };
    }
    const attribution = attempt.current.attribution;
    const eventData = { ...context(), lead_id: attribution.leadId, landing_page: attribution.landingPage };
    setFallbackHref(addAttributionToMailto(buildProductInquiryMailtoFromForm(productName, form), attribution));
    trackEvent("inquiry_submit_attempt", eventData);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, ...form, ...attribution, website }),
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("Submission not accepted");
      setStatus("success");
      trackEvent("generate_lead", eventData);
      trackEvent("quote_form_submit", eventData);
      attempt.current = null;
      started.current = false;
      return true;
    } catch {
      setStatus("error");
      trackEvent("inquiry_submit_error", eventData);
      return false;
    } finally { busy.current = false; }
  }
  return { status, fallbackHref, markStarted, markInvalid, submit };
}
