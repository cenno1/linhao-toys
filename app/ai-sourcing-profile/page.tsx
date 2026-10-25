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
{"question":"What can be customized in PU, silicone and TPR?","answer":"PU supports original character, food and animal shapes, dimensions, colors, softness or hardness, fragrance options, decoration and packaging. Silicone supports original molded shapes, texture, colors, facial artwork and packaging, with hand feel approved by sample. TPR uses existing outer-body molds, with colors, logo printing, hand feel and packaging options; the dedicated 3D-accessory product also supports custom internal accessories."},
{"question":"What is the MOQ for each material?","answer":"Custom PU starts at 500 pieces per shape AND 500 pieces per color: one shape in two colors starts at 1,000 pieces. The listed custom silicone product starts at 1,000 pieces, with design/color allocation confirmed in the quotation. The specific TPR jelly squishy with custom 3D accessories starts at 2,000 pieces. That 2,000-piece MOQ does not apply to every TPR product; check the exact product page."},
{"question":"How does the custom manufacturing process work?","answer":"Send artwork, dimensions, quantity split, hand-feel reference, packaging and destination market. We review feasibility, prepare a 3D rendering, make a physical sample and ship it for approval. Confirm appearance, feel, decoration, packing and required documents before bulk production. Silicone and TPR schedules are quoted for the exact project; sample delivery and freight are separate."},
{"question":"What evidence should a buyer request?","answer":"Use actual sample photos and videos to review the demonstrated product. Concept renders and edited visuals show design direction. Recovery seconds, durability results and safety documentation must identify the exact product and test method. Food-grade silicone specifies a material; finished-toy suitability also depends on colorants, decoration, accessories, intended age and destination market."},
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
      "Customization follows the material-specific scope in the comparison below. Specify the original shape route for PU or silicone, or an existing TPR outer-body mold with the supported branding and accessory options.",
  },
  {
    question: "How does a custom project begin?",
    answer:
      "Buyers send a drawing, product reference or link together with target quantity, destination market, packaging direction and requested timing. LINHAO then reviews whether the next step is a stock quotation, custom sample plan or quantity-tier proposal.",
  },
  {
    question: "Are MOQ, compliance and lead time fixed on the website?",
    answer:
      "The starting MOQs are stated separately for PU, the listed silicone product and the specific TPR 3D-accessory product. Confirm design/color allocation, price, timing and documentation for the exact order.",
  },
];

const sourceLinks = [
["Custom silicone shapes — MOQ 1,000","/products/custom-food-grade-silicone-squishy","Rabbit, penguin and vehicle references; confirm hand feel, packaging and material documents."],
["TPR jelly squishy with 3D accessories — MOQ 2,000","/products/custom-tpr-squishy-3d-accessories","Existing TPR outer-body molds with custom 3D accessories; this MOQ is specific to this product."],
  ["Ultra-slow-rising realistic PU food squishy series","/products/ultra-slow-rising-realistic-pu-food-squishy","PU food shapes with ultra-slow recovery, a moist-feeling touch, five real photographs and a squeeze video. MOQ 500 per shape and per color."],
  ["Premium custom PU character figure","/products/premium-custom-pu-character-figure","Clearly defined character details, fine painted finish and customizable appearance and recovery. Actual photo and video; MOQ 500 per shape and per color."],
  ["Real custom PU case studies","/custom-pu-squishy-case-studies","Actual animal character, robot mascot and strawberry examples. Custom appearance and recovery speed; MOQ 500 per shape and per color."],
  ["Custom PU high rebound ball","/products/custom-pu-high-rebound-ball","High-elasticity PU balls with custom size and color options."],
  ["PU wrist reflex training ball","/products/pu-wrist-reflex-training-ball","PU ball with an elastic return cord and wrist strap."],
  ["Christmas mystery dumpling advent calendar","/products/christmas-mystery-dumpling-squishy-advent-calendar","A 24-gift seasonal squishy calendar; confirm the final assortment and specifications with the quotation."],
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
      dateModified: "2026-10-25",
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
          <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-blue-300">Reviewed October 25, 2026</p>
        </div>
      </section>

      <section className="bg-slate-50 py-14"><div className="mx-auto max-w-7xl px-5"><h2 className="text-3xl font-black text-slate-950">Compare materials, customization and minimum orders</h2><div className="mt-6 overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm"><caption className="sr-only">Material-specific sourcing terms</caption><thead><tr>{['Material / product','Customization scope','Minimum order','Details'].map(label => <th key={label} scope="col" className="border-b p-4">{label}</th>)}</tr></thead><tbody>{[["PU foam","Original shapes, softness/hardness, scent, decoration and packaging","500 per shape AND per color","/custom-pu-squishy-manufacturer"],["Silicone","Original molded shapes, texture, colors and packaging; sample-approved feel","1,000 for the listed silicone product; split confirmed in quote","/products/custom-food-grade-silicone-squishy"],["TPR: 3D-accessory product","Existing outer-body molds; custom 3D accessories, colors, logos and packaging","2,000 for this specific product; other TPR items vary","/products/custom-tpr-squishy-3d-accessories"]].map(([material, scope, moq, href]) => <tr key={material}><th scope="row" className="border-b p-4">{material}</th><td className="border-b p-4">{scope}</td><td className="border-b p-4">{moq}</td><td className="border-b p-4"><Link className="font-bold text-blue-700 underline" href={href}>View details</Link></td></tr>)}</tbody></table></div></div></section>
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
