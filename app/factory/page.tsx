import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import BuyerEvidence from "@/components/BuyerEvidence";
import { DEFAULT_OG_IMAGE, SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Squishy Toy Factory Process & Quality Controls",
  description:
    "Review LINHAO Toys' custom squishy production workflow, approved-sample controls, inspection planning, packing checks and buyer-verifiable documents.",
  keywords: ["squishy toy factory", "squishy toy manufacturing process", "toy quality control", "custom squishy production", "OEM toy factory"],
  alternates: { canonical: "/factory" },
  openGraph: {
    title: "Squishy Toy Factory Process & Quality Controls",
    description: "Review the development, production-control, packing and evidence path used for custom squishy projects.",
    url: "/factory",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "LINHAO Toys squishy manufacturing workflow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Squishy Toy Factory Process & Quality Controls",
    description: "Review the development, production-control, packing and evidence path used for custom squishy projects.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const stages = [
  ["Brief & Reference", "Identify the current artwork, product specification, quantity split, package and destination market."],
  ["Sampling", "Develop and revise the product reference before production approval."],
  ["Material & Setup", "Prepare the approved construction, color references, artwork and production instructions."],
  ["Molding & Finishing", "Form the product and apply approved color, print, surface and assembled details."],
  ["Production Checks", "Review agreed appearance, dimensions, function and packing points during the order."],
  ["Packing & Handoff", "Confirm retail units, counts, carton marks and requested shipment documentation."],
];

const controlPoints = [
  ["Revision control", "One current specification, artwork set and sample revision should identify what production is expected to match."],
  ["Approved reference", "The accepted physical sample and written comments become the practical appearance and function reference."],
  ["Variant identification", "Design names, colors, artwork files and assortment ratios should remain connected throughout production and packing."],
  ["Inspection scope", "Buyer-required checkpoints, tolerances and inspection method should be agreed for the exact product before production."],
  ["Package verification", "Unit package, labels, barcode areas, quantities and master-carton details are reviewed as part of the packed product."],
  ["Document scope", "Reports and certificates must be checked against the identified product, materials, age grade and destination market."],
];

const faqs = [
  { question: "What becomes the production quality reference?", answer: "The approved physical sample should be connected to the current written specification, artwork, color references and packaging files under one revision." },
  { question: "Can a buyer define additional inspection points?", answer: "Yes. Product-specific dimensions, appearance, function, assortment and packing checks can be discussed before production and reflected in the agreed inspection scope." },
  { question: "Do existing certificates cover every factory product?", answer: "No. Existing documents apply only to the products and tested scope identified in each file. A new product may require a separate testing and documentation plan." },
  { question: "How can buyers reduce sample-to-bulk differences?", answer: "Use a controlled specification, retain the approved sample, close revision comments before production and define the checkpoints that matter for the product." },
];

export default function Page() {
  const pageUrl = absoluteUrl("/factory");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Squishy Toy Factory Process & Quality Controls",
      description: "Buyer-facing explanation of custom squishy production workflow, control points and available evidence.",
      about: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: "2026-08-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Custom toy production and quality coordination",
      serviceType: "Squishy toy manufacturing, inspection and packing coordination",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">Factory process</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            A production-control path buyers can define and verify.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Custom toy production is organized around the current brief, approved sample,
            product-specific checkpoints, retail packing requirements and destination-market needs.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Production stages</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950">
            From approved information to shipment preparation.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(([title, text], index) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Control points</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
              What professional buyers should align before production.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              The exact controls depend on the product. These six areas create a clearer handoff
              between development, production, inspection and packing.
            </p>
          </div>
          <dl className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc]">
            {controlPoints.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-slate-200 px-6 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr]">
                <dt className="text-sm font-black text-slate-950">{label}</dt>
                <dd className="text-sm leading-6 text-slate-600">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3 px-5 sm:px-6 lg:px-8">
          <Link className="btn btn-outline" href="/resources/custom-squishy-toy-sample-approval-checklist">Sample approval checklist</Link>
          <Link className="btn btn-outline" href="/resources/how-to-choose-squishy-toy-manufacturer">Supplier evaluation guide</Link>
          <Link className="btn btn-outline" href="/resources/en71-astm-f963-cpc-toy-compliance-guide">Compliance planning guide</Link>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Factory FAQ</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Answers about production control.</h2>
          <div className="mt-8 space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-black text-slate-950">{question}<span className="float-right text-blue-600">+</span></summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BuyerEvidence />
      <CTA />
      <Footer />
    </main>
  );
}
