"use client";

import { useState, type FormEvent } from "react";
import { type ProductInquiryFormData } from "@/lib/product-utils";
import { useInquirySubmission } from "@/lib/use-inquiry-submission";
import InquiryActions from "@/components/InquiryActions";

type Props = { productName: string; stockItem?: boolean };
const initialForm: ProductInquiryFormData = {
  company: "", email: "", projectType: "", quantity: "", market: "",
  timeline: "", packaging: "", referenceUrl: "", requirements: "",
};
const inputClass = "mt-2 block w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none ring-blue-600 focus:ring-2";
const labelClass = "text-sm font-bold text-slate-700";

export default function ProductInquiryForm({ productName, stockItem = false }: Props) {
  const [form, setForm] = useState<ProductInquiryFormData>(initialForm);
  const [website, setWebsite] = useState("");
  const inquiry = useInquirySubmission(productName, "product_inquiry");
  function updateField(field: keyof ProductInquiryFormData, value: string) {
    setForm(current => ({ ...current, [field]: value }));
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (await inquiry.submit({ ...form, projectType: form.projectType || (stockItem ? "Wholesale existing products" : "General sourcing inquiry") }, website)) {
      setForm(initialForm);
    }
  }
  const projectTypes = ["Custom OEM / ODM product", "Wholesale existing products", "Private-label packaging", "Sample / prototype request", "Other sourcing inquiry"];
  return (
    <form onSubmit={handleSubmit} onChange={inquiry.markStarted} onInvalidCapture={inquiry.markInvalid} className="grid gap-5 sm:grid-cols-2" aria-busy={inquiry.status === "sending"}>
      <fieldset disabled={inquiry.status === "sending"} className="contents">
      <label className="hidden" aria-hidden="true">Website<input type="text" name="website" value={website} onChange={event => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" /></label>
      <p className="text-sm leading-6 text-slate-600 sm:col-span-2">Start with your email, quantity and destination. Other details are optional.</p>
      <label className="block"><span className={labelClass}>Email</span><input required name="email" autoComplete="email" type="email" maxLength={320} value={form.email} onChange={event => updateField("email", event.target.value)} className={inputClass} placeholder="you@company.com" /></label>
      <label className="block"><span className={labelClass}>Estimated quantity</span><input required name="quantity" type="text" maxLength={100} value={form.quantity} onChange={event => updateField("quantity", event.target.value)} className={inputClass} placeholder="e.g. 500 pcs per style" /></label>
      <label className="block sm:col-span-2"><span className={labelClass}>Delivery country / region</span><input required name="market" autoComplete="country-name" maxLength={200} value={form.market} onChange={event => updateField("market", event.target.value)} className={inputClass} placeholder="e.g. United States" /></label>
      <label className="block sm:col-span-2"><span className={labelClass}>Product idea or requirements (optional)</span><textarea name="requirements" rows={3} maxLength={3000} value={form.requirements} onChange={event => updateField("requirements", event.target.value)} className={inputClass} placeholder="Style, custom shape, logo or delivery date…" /></label>
      <details className="rounded-xl border border-slate-200 p-4 sm:col-span-2">
        <summary className="cursor-pointer font-bold text-blue-700">Add company, artwork or packaging details (optional)</summary>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label><span className={labelClass}>Company / Brand (optional)</span><input name="company" autoComplete="organization" maxLength={200} value={form.company} onChange={event => updateField("company", event.target.value)} className={inputClass} /></label>
          <label><span className={labelClass}>Project type (optional)</span><select name="projectType" value={form.projectType} onChange={event => updateField("projectType", event.target.value)} className={inputClass}><option value="">Select if known</option>{projectTypes.map(type => <option key={type}>{type}</option>)}</select></label>
          <label><span className={labelClass}>Requested timeline (optional)</span><input name="timeline" maxLength={200} value={form.timeline} onChange={event => updateField("timeline", event.target.value)} className={inputClass} placeholder="Requested delivery date" /></label>
          <label><span className={labelClass}>Preferred packaging (optional)</span><input name="packaging" maxLength={500} value={form.packaging} onChange={event => updateField("packaging", event.target.value)} className={inputClass} placeholder="e.g. retail box, individual bag" /></label>
          <label className="sm:col-span-2"><span className={labelClass}>Artwork or reference link (optional)</span><input name="referenceUrl" type="url" maxLength={1000} value={form.referenceUrl} onChange={event => updateField("referenceUrl", event.target.value)} className={inputClass} placeholder="https://…" /></label>
        </div>
      </details>
      </fieldset>
      <InquiryActions status={inquiry.status} fallbackHref={inquiry.fallbackHref} location="product_inquiry" />
    </form>
  );
}
