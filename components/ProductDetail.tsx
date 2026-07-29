import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import ProductGallery from "@/components/ProductGallery";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import type { Product } from "@/lib/products";
import {
  getCustomizationOptions,
  getProductGallery,
  INQUIRY_EMAIL,
  PRODUCT_MOQ,
} from "@/lib/product-utils";
import { getProductSpecs } from "@/lib/product-specs";
import { complianceDocs } from "@/lib/compliance-docs";

const complianceDocsForDetail = complianceDocs;

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const gallery = getProductGallery(product);
  const customization = getCustomizationOptions(product.filterGroup);
  const specs = getProductSpecs(product);

  return (
    <main>
      <Header />
      <section className="bg-[#f4f7fb] py-10 sm:py-14">
        <div className="shell">
          <nav className="text-sm font-bold text-slate-500">
            <Link href="/products" className="text-blue-600 hover:underline">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="bg-[#f4f7fb] pb-16 sm:pb-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <ProductGallery productName={product.name} items={gallery} />

          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-blue-600">
              {product.category}
            </span>
            {product.tag && (
              <span className="ml-3 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-blue-700">
                {product.tag}
              </span>
            )}
            <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{product.note}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  MOQ
                </p>
                <p className="mt-2 text-3xl font-black text-slate-950">{PRODUCT_MOQ} pcs</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Standard minimum for OEM sampling and bulk production. Final MOQ may vary by
                  mold, material and packaging.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Lead time
                </p>
                <p className="mt-2 text-3xl font-black text-slate-950">3–7 days</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Sample turnaround after artwork and specs are confirmed. Mass production schedule
                  shared with quotation.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black text-slate-950">Product specifications</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Reference specs for sourcing and listing research. Final material and size
                details are confirmed during sampling.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <tbody>
                    {specs.map((row) => (
                      <tr key={row.label} className="border-t border-slate-200 first:border-t-0">
                        <th className="py-3 pr-4 font-black text-slate-500">{row.label}</th>
                        <td className="py-3 text-slate-700">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black text-slate-950">Customization options</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {customization.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black text-slate-950">Compliance & testing</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
            Download EN71, ASTM F963-23 and CPC PDFs for documented squishy programs.
            Additional testing can be arranged by product, material and destination market.
          </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {complianceDocsForDetail.map((doc) =>
                  doc.available && doc.href ? (
                    <a
                      key={doc.id}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black text-blue-700 transition hover:bg-blue-100"
                    >
                      {doc.label}
                    </a>
                  ) : (
                    <span
                      key={doc.id}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600"
                    >
                      {doc.label} · on request
                    </span>
                  ),
                )}
              </div>
              <ul className="mt-5 space-y-3">
                {complianceDocsForDetail.map((doc) => (
                  <li key={doc.id}>
                    {doc.available && doc.href ? (
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-blue-600 hover:underline"
                      >
                        {doc.label}
                      </a>
                    ) : (
                      <a
                        href={`mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(`${doc.label} request`)}`}
                        className="text-sm font-bold text-blue-600 hover:underline"
                      >
                        {doc.label} — request copy
                      </a>
                    )}
                    <span className="mt-1 block text-xs text-slate-500">{doc.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#inquiry"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Request price & samples →
            </a>
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-white py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
              Inquiry
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Get a quote for {product.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Share your quantity, target market and packaging requirements. Our sales team will
              reply with pricing, sampling steps and production timeline.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-6 shadow-sm sm:p-8">
            <ProductInquiryForm productName={product.name} />
          </div>
        </div>
      </section>

      <Footer />
      <ContactFloat />
    </main>
  );
}
