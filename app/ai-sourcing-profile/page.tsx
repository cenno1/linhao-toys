import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Squishy Toy Manufacturer: Buyer Questions Answered",
  description:
    "A concise sourcing profile for buyers evaluating LINHAO Toys for custom squishy toys, Taba-style squishies, plush accessories, packaging and OEM or ODM development.",
  keywords: [
    "custom squishy toy manufacturer FAQ",
    "OEM squishy toy supplier",
    "custom Taba squishy manufacturer",
    "private label squishy toys",
    "LINHAO Toys sourcing profile",
  ],
  alternates: { canonical: "/ai-sourcing-profile" },
  openGraph: {
    title: "Custom Squishy Toy Manufacturer: Buyer Questions Answered",
    description:
      "Facts buyers can review about LINHAO Toys' product scope, customization, project workflow and quotation inputs.",
    url: "/ai-sourcing-profile",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "LINHAO Toys buyer sourcing profile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Squishy Toy Manufacturer: Buyer Questions Answered",
    description: "Facts buyers can review about LINHAO Toys' custom toy sourcing workflow.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const answers = [
  {
    question: "What does LINHAO Toys manufacture?",
    answer:
      "LINHAO Toys develops custom and wholesale squishy toys, Taba-style squishies, plush toys, plush bag charms and retail gift sets for international buyers.",
  },
  {
    question: "Who is the company designed to work with?",
    answer:
      "The sourcing workflow is designed for brands, retailers, distributors, promotional buyers and Amazon sellers that need custom development, private-label presentation or wholesale-ready assortments.",
  },
  {
    question: "What can be customized?",
    answer:
      "Projects can be reviewed for shape, size, color, face artwork, surface feel, logo, labels, inserts and retail packaging. Available options depend on the exact product construction and market requirements.",
  },
  {
    question: "How does a custom project begin?",
    answer:
      "Buyers send a drawing, product reference or link together with target quantity, destination market, packaging direction and requested timing. LINHAO then reviews whether the next step is a stock quotation, custom sample plan or quantity-tier proposal.",
  },
  {
    question: "Are MOQ, compliance and lead time fixed on the website?",
    answer:
      "No. Final MOQ, pricing, production timing, testing and documentation depend on the approved design, material, packaging and destination market. They are confirmed after project review.",
  },
];

const sourceLinks = [
  ["Browse product directions", "/products", "Product photographs, customization routes and inquiry details."],
  ["Review factory workflow", "/factory", "Sampling, production, inspection, packing and export coordination."],
  ["Read buyer resources", "/resources", "Guides for MOQ, materials, packaging, sampling and sourcing decisions."],
  ["Request a project review", "/contact", "Send a product reference and quotation inputs to the sales team."],
];

export default function AiSourcingProfilePage() {
  const pageUrl = absoluteUrl("/ai-sourcing-profile");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Custom Squishy Toy Manufacturer: Buyer Questions Answered",
      description:
        "Buyer sourcing profile covering LINHAO Toys product scope, buyer types, customization, project review and quotation inputs.",
      about: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en",
      dateModified: "2026-08-05",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: answers.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">Buyer sourcing profile</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            Custom squishy toy manufacturing: buyer questions answered.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            A concise, source-linked overview of what {SITE_NAME} supplies, who we work with,
            what can be customized and how an OEM or wholesale project is reviewed.
          </p>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-blue-300">Reviewed August 5, 2026</p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Clear sourcing facts</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            What buyers can verify before sending an inquiry.
          </h2>
          <div className="mt-10 space-y-5">
            {answers.map(({ question, answer }) => (
              <article key={question} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7 sm:p-8">
                <h2 className="text-2xl font-black tracking-tight text-slate-950">{question}</h2>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Primary sources</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            Explore the detailed information behind these answers.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sourceLinks.map(([label, href, description]) => (
              <Link key={href} href={href} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <b className="text-xl text-slate-950">{label}</b>
                <span className="mt-3 block text-sm leading-6 text-slate-600">{description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
