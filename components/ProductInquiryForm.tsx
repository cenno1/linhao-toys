"use client";

import { useState, type FormEvent } from "react";
import {
  buildProductInquiryMailtoFromForm,
  INQUIRY_EMAIL,
  type ProductInquiryFormData,
} from "@/lib/product-utils";

type ProductInquiryFormProps = {
  productName: string;
};

const initialForm: ProductInquiryFormData = {
  company: "",
  email: "",
  quantity: "",
  market: "",
  packaging: "",
  requirements: "",
};

export default function ProductInquiryForm({ productName }: ProductInquiryFormProps) {
  const [form, setForm] = useState<ProductInquiryFormData>(initialForm);

  function updateField(field: keyof ProductInquiryFormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildProductInquiryMailtoFromForm(productName, form);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
          Company / Brand
        </span>
        <input
          required
          type="text"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-600 focus:ring-2"
          placeholder="Your company name"
        />
      </label>
      <label className="block">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
          Email
        </span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-600 focus:ring-2"
          placeholder="you@company.com"
        />
      </label>
      <label className="block">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
          Estimated quantity
        </span>
        <input
          required
          type="text"
          value={form.quantity}
          onChange={(event) => updateField("quantity", event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-600 focus:ring-2"
          placeholder="e.g. 500 pcs / 2,000 pcs"
        />
      </label>
      <label className="block">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
          Target market
        </span>
        <input
          required
          type="text"
          value={form.market}
          onChange={(event) => updateField("market", event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-600 focus:ring-2"
          placeholder="e.g. US Amazon FBA, EU retail"
        />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
          Preferred packaging
        </span>
        <input
          type="text"
          value={form.packaging}
          onChange={(event) => updateField("packaging", event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-600 focus:ring-2"
          placeholder="e.g. PDQ display, blind bag, gift box"
        />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
          Additional requirements
        </span>
        <textarea
          rows={4}
          value={form.requirements}
          onChange={(event) => updateField("requirements", event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-600 focus:ring-2"
          placeholder="Custom colors, logo, compliance needs, delivery timeline..."
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Send inquiry via email →
        </button>
        <p className="mt-3 text-xs leading-6 text-slate-500">
          Opens your email client with a pre-filled message to {INQUIRY_EMAIL}.
        </p>
      </div>
    </form>
  );
}
