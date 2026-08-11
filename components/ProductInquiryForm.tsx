"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  buildProductInquiryMailtoFromForm,
  INQUIRY_EMAIL,
  type ProductInquiryFormData,
} from "@/lib/product-utils";

type Props = { productName: string };

const initialForm: ProductInquiryFormData = {
  company: "",
  email: "",
  projectType: "",
  quantity: "",
  market: "",
  timeline: "",
  packaging: "",
  referenceUrl: "",
  requirements: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-600 focus:ring-2";
const labelClass =
  "text-xs font-black uppercase tracking-[0.14em] text-slate-500";

export default function ProductInquiryForm({ productName }: Props) {
  const [form, setForm] = useState<ProductInquiryFormData>(initialForm);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "fallback"
  >("idle");

  function updateField(field: keyof ProductInquiryFormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, ...form, website }),
      });
      if (!response.ok) throw new Error("Delivery unavailable");

      setStatus("success");
      setForm(initialForm);
      trackEvent("generate_lead", {
        product_name: productName,
        project_type: form.projectType,
      });
      trackEvent("quote_form_submit", {
        form_name: "product_inquiry",
        product_name: productName,
        project_type: form.projectType,
      });
    } catch {
      setStatus("fallback");
      trackEvent("inquiry_email_fallback", { product_name: productName });
      window.location.href = buildProductInquiryMailtoFromForm(productName, form);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="hidden" aria-hidden="true">
        Website
        <input
          type="text"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <label className="block">
        <span className={labelClass}>Company / Brand</span>
        <input required type="text" value={form.company} onChange={(event) => updateField("company", event.target.value)} className={inputClass} placeholder="Your company name" />
      </label>
      <label className="block">
        <span className={labelClass}>Email</span>
        <input required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className={inputClass} placeholder="you@company.com" />
      </label>
      <label className="block">
        <span className={labelClass}>Project type</span>
        <select required value={form.projectType} onChange={(event) => updateField("projectType", event.target.value)} className={inputClass}>
          <option value="" disabled>Select a project type</option>
          <option value="Custom OEM / ODM product">Custom OEM / ODM product</option>
          <option value="Wholesale existing products">Wholesale existing products</option>
          <option value="Private-label packaging">Private-label packaging</option>
          <option value="Sample / prototype request">Sample / prototype request</option>
          <option value="Other sourcing inquiry">Other sourcing inquiry</option>
        </select>
      </label>
      <label className="block">
        <span className={labelClass}>Estimated quantity</span>
        <input required type="text" value={form.quantity} onChange={(event) => updateField("quantity", event.target.value)} className={inputClass} placeholder="e.g. 500 pcs / 2,000 pcs" />
      </label>
      <label className="block">
        <span className={labelClass}>Target market</span>
        <input required type="text" value={form.market} onChange={(event) => updateField("market", event.target.value)} className={inputClass} placeholder="e.g. US Amazon FBA, EU retail" />
      </label>
      <label className="block">
        <span className={labelClass}>Requested timeline</span>
        <input type="text" value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)} className={inputClass} placeholder="e.g. sample in September" />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Preferred packaging</span>
        <input type="text" value={form.packaging} onChange={(event) => updateField("packaging", event.target.value)} className={inputClass} placeholder="e.g. PDQ display, blind bag, gift box" />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Artwork or reference link</span>
        <input type="url" value={form.referenceUrl} onChange={(event) => updateField("referenceUrl", event.target.value)} className={inputClass} placeholder="https://drive.google.com/... or product reference" />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Additional requirements</span>
        <textarea rows={4} value={form.requirements} onChange={(event) => updateField("requirements", event.target.value)} className={inputClass} placeholder="Custom colors, logo, compliance needs, delivery timeline..." />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
        {status === "success" ? (
          <p className="mt-3 text-sm font-bold leading-6 text-emerald-700" role="status">
            Thank you. Your inquiry was sent successfully.
          </p>
        ) : status === "fallback" ? (
          <p className="mt-3 text-xs leading-6 text-amber-700" role="status">
            Direct delivery is not configured yet, so your email app was opened as a backup.
          </p>
        ) : (
          <p className="mt-3 text-xs leading-6 text-slate-500">
            Sent securely to {INQUIRY_EMAIL}. Your email address is used only to reply.
          </p>
        )}
      </div>
    </form>
  );
}
