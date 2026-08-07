import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About LINHAO Toys",
  description:
    "Review LINHAO Toys' sourcing profile, custom toy categories, OEM and ODM workflow, buyer types, direct contact and available product documents.",
  keywords: ["LINHAO Toys", "custom squishy toy manufacturer", "OEM toy supplier", "toy sourcing profile", "squishy toy factory"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About LINHAO Toys",
    description: "Review LINHAO's product scope, custom-development workflow, buyer evidence and direct sourcing information.",
    url: "/about",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "About LINHAO Toys custom squishy manufacturing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About LINHAO Toys",
    description: "Review LINHAO's product scope, custom-development workflow, buyer evidence and direct sourcing information.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const cards = [["Customer-Focused Development", "We begin with your market, quantity, cost and design priorities."], ["Clear Communication", "Project details and revisions are organized to reduce misunderstandings."], ["Flexible Customization", "Shape, color, printing, finish and packaging can be combined around your project."], ["Long-Term Support", "The website and service model are designed for repeat development and ongoing orders."]];

const profileFacts = [
  ["Business", "OEM and ODM custom toy manufacturing"],
  ["Product scope", "Squishy toys, taba squishies, plush toys, bag charms and retail gift sets"],
  ["Buyer types", "Brands, retailers, distributors, promotional buyers and Amazon sellers"],
  ["Customization", "Shape, color, face artwork, logo, labels, inserts and retail packaging"],
  ["Project stages", "Brief review, sampling, production, quality checks, packing and export coordination"],
  ["Markets", "International buyer and export project support"],
];

export default function Page() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl("/about")}#about`,
    url: absoluteUrl("/about"),
    name: `About ${SITE_NAME}`,
    description:
      "Sourcing profile covering LINHAO Toys product categories, buyers, customization services and manufacturing workflow.",
    mainEntity: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    dateModified: "2026-08-02",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">About us</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">A custom toy partner focused on practical execution.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">LINHAO Toys works with international brands, retailers and promotional buyers to develop distinctive squishy products.</p>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-blue-300">Sourcing profile reviewed August 2, 2026</p>
        </div>
      </section>
      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {cards.map(([title, text], index) => (
            <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-8 text-2xl font-black tracking-tight text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
              Manufacturer profile
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
              Facts buyers and search systems can verify.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              This summary defines what LINHAO Toys supplies and how projects are
              handled. Product-specific commercial terms are confirmed after the
              design, quantity, packaging and destination market are reviewed.
            </p>
          </div>
          <dl className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc]">
            {profileFacts.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-slate-200 px-6 py-5 last:border-b-0 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="text-sm font-black text-slate-950">{label}</dt>
                <dd className="text-sm leading-6 text-slate-600">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
            Primary sources
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            Review the underlying sourcing information.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/products" className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <b className="text-xl text-slate-950">Product catalog</b>
              <span className="mt-3 block text-sm leading-6 text-slate-600">
                Product photographs, specifications, customization and inquiry details.
              </span>
            </Link>
            <Link href="/factory" className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <b className="text-xl text-slate-950">Factory workflow</b>
              <span className="mt-3 block text-sm leading-6 text-slate-600">
                Manufacturing, inspection, packing and export coordination stages.
              </span>
            </Link>
            <Link href="/#compliance" className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <b className="text-xl text-slate-950">Compliance documents</b>
              <span className="mt-3 block text-sm leading-6 text-slate-600">
                Available EN71, ASTM F963-23 and CPC documentation for documented products.
              </span>
            </Link>
            <Link href="/ai-sourcing-profile" className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <b className="text-xl text-slate-950">Buyer sourcing profile</b>
              <span className="mt-3 block text-sm leading-6 text-slate-600">
                Concise answers about product scope, customization, project review and quotation inputs.
              </span>
            </Link>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
