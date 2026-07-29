import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { COMPANY_FACTS } from "@/lib/company";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About LINHAO Toys",
  description:
    "Learn about LINHAO Toys, a China OEM manufacturer of squishy toys, plush gifts and bag accessories for global brands and wholesale buyers.",
  path: "/about",
});

const cards = [
  [
    "Customer-Focused Development",
    "We begin with your market, quantity, cost and design priorities.",
  ],
  [
    "Clear Communication",
    "Project details and revisions are organized to reduce misunderstandings.",
  ],
  [
    "Flexible Customization",
    "Shape, color, printing, finish and packaging can be combined around your project.",
  ],
  [
    "Long-Term Support",
    "The website and service model are designed for repeat development and ongoing orders.",
  ],
];

export default function Page() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">
            About us
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            A custom toy partner focused on practical execution.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            {COMPANY_FACTS.name} works with international brands, retailers and promotional
            buyers to develop distinctive squishy, plush and gift products for export markets.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Who we are
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                LINHAO Toys is a Guangdong-based OEM and ODM manufacturer specializing in
                squishy toys, plush comfort gifts, bag charms and emotional gift programs.
                We support Amazon sellers, retail chains, distributors and promotional buyers
                with sampling, private-label development and export coordination.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <tbody>
                  {[
                    ["Company", COMPANY_FACTS.name],
                    ["Location", COMPANY_FACTS.location],
                    ["Export markets", `${COMPANY_FACTS.exportMarkets} countries`],
                    ["Custom projects", `${COMPANY_FACTS.customProjects}+ programs`],
                    ["Standard MOQ", `${COMPANY_FACTS.standardMoq} pcs`],
                    ["Inquiry email", COMPANY_FACTS.email],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-t border-slate-200 first:border-t-0">
                      <th className="bg-slate-50 px-4 py-3 font-black text-slate-500">
                        {label}
                      </th>
                      <td className="px-4 py-3 text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {cards.map(([title, text], index) => (
            <article
              key={title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-8 text-2xl font-black tracking-tight text-slate-950">
                {title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Product categories we develop
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY_FACTS.categories.map((category) => (
              <li
                key={category}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-bold text-slate-700"
              >
                {category}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate-500">
            Read buyer guides on{" "}
            <Link href="/resources" className="font-bold text-blue-600 hover:underline">
              OEM process, MOQ and compliance
            </Link>
            .
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
