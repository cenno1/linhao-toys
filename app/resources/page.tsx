import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { guides } from "@/lib/guides";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Squishy OEM Buyer Guides & Resources",
  description:
    "Practical guides on custom squishy OEM process, MOQ, EN71/ASTM compliance, blind-box packaging and factory briefs from LINHAO Toys.",
  path: "/resources",
  keywords: [
    "squishy OEM guide",
    "Amazon seller toy MOQ",
    "EN71 squishy compliance",
    "China toy factory brief",
  ],
});

export default function ResourcesPage() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">
            Buyer resources
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            Guides for Amazon sellers, retailers and OEM buyers.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Answer-first content on MOQ, sampling, compliance and packaging — written for
            procurement teams and AI-assisted sourcing research.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                {guide.readMinutes} min read
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                <Link href={`/resources/${guide.slug}`} className="hover:text-blue-600">
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{guide.description}</p>
              <Link
                href={`/resources/${guide.slug}`}
                className="mt-6 inline-flex text-sm font-black text-blue-600 hover:underline"
              >
                Read guide →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
