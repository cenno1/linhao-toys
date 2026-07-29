import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { COMPANY_FACTS } from "@/lib/company";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "OEM & ODM Squishy Toy Development",
  description:
    "Structured OEM and ODM squishy development from concept review to sampling, printing, packaging and mass production at LINHAO Toys.",
  path: "/oem",
  keywords: [
    "OEM squishy development",
    "ODM toy manufacturer",
    "custom squishy sampling",
    "private label toys",
  ],
});

const cards = [
  [
    "Concept Review",
    "We clarify product size, shape, finish, target market and commercial requirements.",
  ],
  [
    "Design & Mold",
    "Your reference is converted into a production-ready structure and mold plan.",
  ],
  [
    "Sampling",
    "Samples are developed and revised before final production approval.",
  ],
  [
    "Color & Printing",
    "Custom colors, faces, logos and graphic details are matched to approved artwork.",
  ],
  [
    "Packaging",
    "Retail boxes, bags, labels and promotional packaging can be coordinated.",
  ],
  [
    "Mass Production",
    "The approved sample becomes the reference for production and quality checks.",
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
            OEM & ODM
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            A structured path from your idea to a finished custom squishy.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            We support concept review, 3D development, mold creation, sampling, revision,
            printing, packaging and production coordination for Amazon sellers, retailers and
            wholesale buyers.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8">
              <h2 className="text-2xl font-black text-slate-950">OEM vs ODM</h2>
              <p className="mt-4 leading-7 text-slate-600">
                <strong>OEM</strong> — you provide the reference design and we manufacture to
                your approved sample. <strong>ODM</strong> — we adapt LINHAO-developed shapes,
                colorways or packaging for your brand and sales channel.
              </p>
            </div>
            <div className="overflow-x-auto rounded-[2rem] border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <tbody>
                  {[
                    ["Standard MOQ", `${COMPANY_FACTS.standardMoq} pcs`],
                    ["Sample lead time", `${COMPANY_FACTS.sampleLeadDays} days`],
                    ["Mass production", `${COMPANY_FACTS.massProductionLeadWeeks} days`],
                    ["Customization", "Shape, color, face, logo, packaging"],
                    ["Typical buyers", "Amazon FBA, retail, promotional, wholesale"],
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
            What you can customize
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Product shape and size",
              "Color and glitter fill",
              "Face artwork and pad print",
              "Logo, hangtag and barcode label",
              "Blind bag / retail box / PDQ packaging",
              "Assortment mix for wholesale programs",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-bold text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate-500">
            See the full process in our{" "}
            <Link
              href="/resources/custom-squishy-oem-process"
              className="font-bold text-blue-600 hover:underline"
            >
              OEM process guide
            </Link>{" "}
            or browse{" "}
            <Link href="/products" className="font-bold text-blue-600 hover:underline">
              wholesale-ready SKUs
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
