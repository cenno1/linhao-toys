import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import ProductGallery from "@/components/ProductGallery";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import type { Product } from "@/lib/products";
import {
  getCustomizationOptions,
  getProductCategoryLandingPath,
  getProductFAQs,
  getProductGallery,
  getProductSpecifications,
  getProductUseCases,
  getRelatedProducts,
  PRODUCT_MOQ,
} from "@/lib/product-utils";

const complianceDocs = [
  {
    href: "/certificates/en71-squeeze-toy-linhao.pdf",
    label: "EN71",
    detail: "Squeeze toy · EU safety standard",
  },
  {
    href: "/certificates/astm-f963-23-linhao.pdf",
    label: "ASTM F963-23",
    detail: "Glitter squishy · safety testing",
  },
  {
    href: "/certificates/cpc-linhao.pdf",
    label: "CPC",
    detail: "Children's Product Certificate",
  },
];

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const gallery = getProductGallery(product);
  const customization = getCustomizationOptions(product.filterGroup);
  const specifications = getProductSpecifications(product);
  const useCases = getProductUseCases(product.filterGroup);
  const relatedProducts = getRelatedProducts(product);
  const faqs = getProductFAQs(product);
  const categoryPath = getProductCategoryLandingPath(product.filterGroup);

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
          <ProductGallery
            productName={product.name}
            items={gallery}
            videoSrc={product.video}
          />

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
                Documentation available for documented squishy programs. Additional testing can
                be arranged by product, material and destination market.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {complianceDocs.map((doc) => (
                  <a
                    key={doc.href}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black text-blue-700 transition hover:bg-blue-100"
                  >
                    {doc.label}
                  </a>
                ))}
              </div>
              <ul className="mt-5 space-y-3">
                {complianceDocs.map((doc) => (
                  <li key={doc.label}>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-600 hover:underline"
                    >
                      {doc.label}
                    </a>
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

      <section className="bg-white py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
              Buyer specifications
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              Product and sourcing details
            </h2>
            <dl className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
              {specifications.map(({ label, value }) => (
                <div key={label} className="grid gap-2 border-b border-slate-200 px-6 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-sm font-black text-slate-950">{label}</dt>
                  <dd className="text-sm leading-6 text-slate-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-400">
              Suitable programs
            </span>
            <h2 className="mt-4 text-3xl font-black">Where this product can fit.</h2>
            <ul className="mt-7 space-y-4">
              {useCases.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <span className="text-blue-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href={categoryPath} className="mt-8 inline-flex text-sm font-black text-blue-400 hover:underline">
              Explore the related collection →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] py-16 sm:py-20">
        <div className="shell">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
            Related products
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
            Compare more wholesale and OEM directions.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <article key={item.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-blue-600">
                  {item.category}
                </span>
                <h3 className="mt-3 text-xl font-black text-slate-950">
                  <Link href={`/products/${item.slug}`} className="hover:text-blue-600">
                    {item.name}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.note}</p>
                <Link href={`/products/${item.slug}`} className="mt-5 inline-flex text-sm font-black text-blue-600">
                  View product →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell faq-grid">
          <div>
            <span className="eyebrow">Product FAQ</span>
            <h2>Answers for buyers sourcing this product.</h2>
          </div>
          <div>
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
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
