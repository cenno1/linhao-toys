import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { DEFAULT_OG_IMAGE, SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "OEM & ODM Squishy Toy Development Process",
  description:
    "Plan custom squishy OEM and ODM projects from artwork and feasibility review through molds, samples, packaging, production references and market requirements.",
  keywords: ["OEM squishy toys", "ODM squishy toy development", "custom toy development process", "private label squishy", "squishy toy mold"],
  alternates: { canonical: "/oem" },
  openGraph: {
    title: "OEM & ODM Squishy Toy Development Process",
    description: "See how buyer inputs become a feasibility review, sample, approved production reference and packed custom toy.",
    url: "/oem",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Custom squishy toy OEM and ODM development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OEM & ODM Squishy Toy Development Process",
    description: "See how buyer inputs become a feasibility review, sample, approved production reference and packed custom toy.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const stages = [
  ["Concept Review", "Clarify the product goal, user, dimensions, squeeze feel, design count, quantity and market."],
  ["Feasibility & Structure", "Review moldability, part structure, material route, artwork and any design adjustments."],
  ["Quotation Plan", "Align development, quantity per design, decoration, packaging, testing scope and trade terms."],
  ["Sampling", "Develop the physical reference and record revisions for shape, appearance, function and packaging."],
  ["Production Approval", "Close the current specification, artwork and accepted sample before bulk setup."],
  ["Production & Packing", "Coordinate agreed quality checkpoints, variant control, retail packs and shipment preparation."],
];

const handoffs = [
  ["Buyer artwork or reference", "Feasibility questions and a practical development direction"],
  ["Dimensions and squeeze target", "Material, structure and sample reference proposal"],
  ["Quantity per design", "MOQ drivers, setup plan and comparable quotation tiers"],
  ["Logo and packaging brief", "Artwork requirements, package format and packed-unit review"],
  ["Destination and age grade", "Product-specific labeling, testing and documentation discussion"],
  ["Sample revision comments", "One current approval record for the production reference"],
];

const faqs = [
  { question: "What is the difference between OEM and ODM for squishy toys?", answer: "An OEM project typically begins with buyer-provided artwork or specifications, while an ODM discussion may begin with a broader product direction that is developed into a buyer-specific item. The practical scope should be defined in the quotation." },
  { question: "Can development begin from a reference image?", answer: "A clear reference can begin feasibility review, but original artwork, dimensions, essential features and intellectual-property authorization may be required before the design is finalized." },
  { question: "When is a custom mold required?", answer: "A new three-dimensional shape commonly requires a product-specific mold or tooling route. Existing shapes with only packaging or artwork changes may follow a different plan." },
  { question: "Who approves the mass-production reference?", answer: "The buyer should approve the current physical sample and connected written specification, artwork and packaging files before production begins." },
  { question: "Can testing be included in an OEM project?", answer: "Testing can be planned for the exact product, materials, intended age grade and destination market. Existing reports should not be assumed to cover a new design." },
];

export default function Page() {
  const pageUrl = absoluteUrl("/oem");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "OEM and ODM custom squishy toy development",
      serviceType: "Custom toy design review, sampling, packaging and production coordination",
      description: "A buyer-facing development path from artwork and feasibility review to an approved custom squishy production reference.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "Brands, retailers, importers, distributors and promotional buyers" },
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "OEM & ODM", item: pageUrl },
      ],
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
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">OEM & ODM</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            A controlled development path from buyer idea to production reference.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            LINHAO supports concept review, feasibility, mold planning, samples, revisions,
            decoration, packaging and production coordination for custom squishy projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Send a project brief</Link>
            <Link href="/resources/how-to-prepare-custom-squishy-toy-brief" className="btn border border-white/30 text-white">Use the brief checklist</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Development stages</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950">Six decisions that organize an OEM project.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(([title, text], index) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Buyer-to-factory handoff</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950">What each buyer input should produce.</h2>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200">
            {handoffs.map(([input, output]) => (
              <div key={input} className="grid gap-3 border-b border-slate-200 px-6 py-5 last:border-b-0 md:grid-cols-[.8fr_1.2fr]">
                <div><span className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">Buyer input</span><p className="mt-2 font-black text-slate-950">{input}</p></div>
                <div><span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Development output</span><p className="mt-2 text-sm leading-6 text-slate-600">{output}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-400">Planning resources</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight">Prepare a stronger OEM request.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <Link href="/resources/how-to-prepare-custom-squishy-toy-brief" className="rounded-3xl border border-white/10 bg-white/5 p-7"><b>Manufacturing brief</b><span className="mt-3 block text-sm leading-6 text-slate-300">Organize artwork, dimensions, feel, quantity, packaging and market details.</span></Link>
            <Link href="/resources/custom-squishy-toy-moq-cost-guide" className="rounded-3xl border border-white/10 bg-white/5 p-7"><b>MOQ & cost drivers</b><span className="mt-3 block text-sm leading-6 text-slate-300">Understand molds, design count, effects, packaging and quantity tiers.</span></Link>
            <Link href="/resources/custom-squishy-toy-sample-approval-checklist" className="rounded-3xl border border-white/10 bg-white/5 p-7"><b>Sample approval</b><span className="mt-3 block text-sm leading-6 text-slate-300">Create a controlled reference for appearance, function and packed units.</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">OEM FAQ</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Answers before development begins.</h2>
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
      <CTA />
      <Footer />
    </main>
  );
}
