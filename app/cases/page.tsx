import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { caseStudies } from "@/lib/cases";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "OEM Case Studies for Squishy & Plush Programs",
  description:
    "See how LINHAO Toys supports Amazon FBA sellers, retail importers and promotional buyers with OEM squishy and plush development.",
  path: "/cases",
  keywords: [
    "squishy OEM case study",
    "Amazon FBA toy supplier",
    "private label squishy manufacturer",
  ],
});

export default function CasesPage() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">
            OEM case studies
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            Real project patterns for Amazon, retail and promotional buyers.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Representative OEM programs showing how LINHAO develops sampling, packaging
            and repeat production for export buyers.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {caseStudies.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">
                  {item.clientType} · {item.market}
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                  <Link href={`/cases/${item.slug}`} className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-7 text-slate-600">{item.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/cases/${item.slug}`}
                    className="text-sm font-black text-blue-600 hover:underline"
                  >
                    Read case →
                  </Link>
                  <Link
                    href={`/products/${item.productSlug}`}
                    className="text-sm font-bold text-slate-500 hover:text-blue-600"
                  >
                    View product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
