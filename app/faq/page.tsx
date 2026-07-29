import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/lib/faq";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Squishy Toy OEM FAQ",
  description:
    "Answers on MOQ, sampling time, OEM customization, EN71/ASTM compliance, Amazon FBA packaging and export support from LINHAO Toys.",
  path: "/faq",
  keywords: [
    "squishy OEM FAQ",
    "custom squishy MOQ",
    "squishy sampling time",
    "EN71 squishy toy",
    "Amazon FBA toy supplier",
  ],
});

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqPageJsonLd()} />
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">
            Buyer FAQ
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            OEM squishy questions buyers ask before the first quote.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Direct answers on MOQ, sampling, compliance, packaging and export — structured
            for procurement teams, Amazon sellers and wholesale importers.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-4 px-5 sm:px-6 lg:px-8">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
                {item.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl px-5 text-sm text-slate-500 sm:px-6 lg:px-8">
          Need deeper guides? Browse{" "}
          <Link href="/resources" className="font-bold text-blue-600 hover:underline">
            buyer resources
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-bold text-blue-600 hover:underline">
            contact sales
          </Link>
          .
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
