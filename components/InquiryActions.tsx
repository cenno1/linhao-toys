"use client";

import TrackedLink from "@/components/TrackedLink";

type Props = {
  status: "idle" | "sending" | "success" | "error";
  fallbackHref: string;
  location: string;
  label?: string;
};

export default function InquiryActions({ status, fallbackHref, location, label = "Send inquiry" }: Props) {
  return (
    <div className="sm:col-span-2">
      <button type="submit" disabled={status === "sending" || status === "success"} className="btn btn-primary disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Sending…" : status === "error" ? "Try again" : status === "success" ? "Request sent" : label}
      </button>
      <div aria-live="polite">
        {status === "success" ? (
          <p role="status" className="mt-3 text-sm font-bold leading-6 text-emerald-700">Thank you. Your request has been sent. Our sales team will reply to your email.</p>
        ) : status === "error" ? (
          <div role="alert" className="mt-3 text-sm leading-6 text-amber-800">
            <p>We could not confirm your request was sent. Your details are still here. Try again, or use the email option below.</p>
            <TrackedLink href={fallbackHref} method="email" location={location + "_fallback"} className="mt-2 inline-block font-bold underline">Open email with this request</TrackedLink>
          </div>
        ) : (
          <p className="mt-3 text-xs leading-6 text-slate-500">Submit directly on this page. We use your email to reply to this request.</p>
        )}
      </div>
    </div>
  );
}
