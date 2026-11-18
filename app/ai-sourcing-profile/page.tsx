import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Squishy Toy Manufacturer: Buyer Questions Answered",
  description:
    "Compare wholesale squishies, company-logo stress balls and custom PU projects. Review product-specific MOQs, sample lead times, packing and real sample evidence.",
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
      "Compare wholesale and custom orders, product-specific MOQs, sample lead times and real project evidence from LINHAO Toys.",
    url: "/ai-sourcing-profile",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "LINHAO Toys buyer sourcing profile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Squishy Toy Manufacturer: Buyer Questions Answered",
    description: "Compare wholesale and custom orders, minimum quantities, sample lead times and real project evidence.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const buyingOptions = [
  {
    title: "Wholesale squishies for resale",
    image: "/images/products/caramel-pudding-building-block-clay-squishy/catalog-display.jpg",
    alt: "Caramel pudding squishies with individual packs and a countertop display",
    summary: "Choose from 21 clay-filled styles, starting at 500 pieces per style. Compare outer-carton quantities before requesting a delivered quote.",
    prepare: "Send style names, quantity per style, packing needs and your delivery country and postcode.",
    href: "/wholesale-squishy-toys#first-wholesale-order",
    action: "Choose styles and prepare a wholesale quote",
  },
  {
    title: "Stress balls with company logo",
    image: "/images/company-logo-stress-balls/rugby-shapes.webp",
    alt: "Sports-shaped balls showing logo placement on oval side panels",
    summary: "Branded sports stress balls start at 500 pieces, with raised or recessed logo options. Allow about 15 days for sampling and 25 days for bulk production, at the approval stages explained below.",
    prepare: "Send the shape, quantity, logo artwork, preferred logo finish and required arrival date.",
    href: "/custom-stress-ball-manufacturer#logo-quote",
    action: "View samples and request a logo quote",
  },
  {
    title: "An original PU shape",
    image: "/images/cases/soft-foam-sampling/sample-poster.webp",
    alt: "A physical custom PU foam sample being squeezed by hand",
    summary: "Develop a shape from your artwork, starting at 500 pieces per shape and per color. Review a real project with design references and a physical squeeze video.",
    prepare: "Send front and side views, dimensions, quantity by color, hand-feel references and packaging requirements.",
    href: "/custom-pu-squishy-case-studies/soft-foam-sampling",
    action: "See the design-to-sample case",
  },
];

const sourcingTerms = [
  ["Wholesale clay-filled collection", "21 listed food and everyday-object styles; packing options listed by style", "500 per style", "/wholesale-squishy-toys"],
  ["Branded sports stress balls", "Sports shapes with raised or recessed company logos", "500 pieces; confirm design/color allocation in the quote", "/custom-stress-ball-manufacturer"],
  ["Custom PU foam", "Original shapes, softness/hardness, scent, decoration and packaging", "500 per shape AND per color", "/custom-pu-squishy-manufacturer"],
  ["Custom silicone product", "Original molded shapes, texture, colors and packaging; sample-approved feel", "1,000 for the listed product; split confirmed in the quote", "/products/custom-food-grade-silicone-squishy"],
  ["TPR: 3D-accessory product", "Existing outer-body molds; custom internal 3D accessories, colors, logos and packaging", "2,000 for this specific product", "/products/custom-tpr-squishy-3d-accessories"],
];

const answers = [
  {
    question: "How do retailers place a first wholesale squishy order?",
    answer: "Choose from the 21 listed clay-filled styles and specify at least 500 pieces for each selected style. Use the wholesale page to compare shipping-carton quantities and prepare a request with your delivery country and postcode. Ask us to confirm availability, unit packing, final carton allocation, freight and dispatch timing. Mixed cartons and partial cartons need confirmation for the selected order.",
    href: "/wholesale-squishy-toys#first-wholesale-order",
    label: "See the 21 styles and carton options",
  },
  {
    question: "Can I order stress balls with a raised or recessed company logo?",
    answer: "Yes. Branded sports stress balls support raised (embossed) or recessed (debossed) logos and start at 500 pieces. Allow about 15 days for a sample after artwork approval and about 25 days for bulk production after sample approval. Sample delivery, revisions, buyer review and freight transit are separate. Send your logo artwork, quantity, shape, delivery postcode and event date for a project-specific quote.",
    href: "/custom-stress-ball-manufacturer#logo-quote",
    label: "Review sports samples and request a logo quote",
  },
  {
    question: "Can I see a real custom PU project before ordering?",
    answer: "The anonymized soft-foam sampling case shows the buyer brief, logo and color review, packaging coordination and a physical squeeze-sample video. Design references are identified separately from actual sample footage. Use this example to prepare your own sample review; timing, recovery and final specifications are confirmed for your project.",
    href: "/custom-pu-squishy-case-studies/soft-foam-sampling",
    label: "Read the case and watch the actual sample",
  },
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
      "Customization follows the material-specific scope in the comparison on this page. Specify the original shape route for PU or silicone, or an existing TPR outer-body mold with the supported branding and accessory options.",
  },
  {
    question: "How does a custom project begin?",
    answer:
      "Buyers send a drawing, product reference or link together with target quantity, destination market, packaging direction and requested timing. LINHAO then reviews whether the next step is a stock quotation, custom sample plan or quantity-tier proposal.",
  },
  {
    question: "Are MOQ, compliance and lead time fixed on the website?",
    answer:
      "Starting MOQs are listed separately for the wholesale clay-filled collection, branded sports stress balls, custom PU, the listed silicone product and the TPR 3D-accessory product. Sampling and production terms depend on the selected route. Confirm design/color allocation, price, timing and documentation for the exact order.",
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
        "Buyer sourcing profile comparing wholesale squishies, company-logo stress balls and custom PU projects, with product-specific MOQs, sample evidence and quotation inputs.",
      about: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en",
      dateModified: "2026-11-18",
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
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.055em] sm:text-6xl">
            Custom squishy toy manufacturing: buyer questions answered.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Compare three ways to buy from {SITE_NAME}: wholesale styles for resale,
            sports stress balls with your logo, or an original PU shape. Check the
            minimum quantity, sample evidence and information needed for your quote.
          </p>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-blue-300">Reviewed November 18, 2026</p>
          <a href="#buying-options" className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500">Find your order type</a>
        </div>
      </section>

      <section id="buying-options" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-950">Start with the order you want to place</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {buyingOptions.map((option) => (
              <article key={option.href} className="flex flex-col rounded-3xl border border-slate-200 p-6">
                <div className="relative h-48 w-full">
                  <Image src={option.image} alt={option.alt} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain" />
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-950">{option.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{option.summary}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600"><strong>For your quote:</strong> {option.prepare}</p>
                <Link href={option.href} className="mt-auto pt-5 font-bold text-blue-700 underline underline-offset-4">{option.action}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-950">Compare products, customization and minimum orders</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">Minimum quantities apply to the specific collection or product below. Check the detail page for your selected item before planning a mixed assortment.</p>
          <div role="region" aria-label="Product-specific minimum order comparison" tabIndex={0} className="relative mt-6 overflow-x-auto rounded-xl focus-visible:outline-2 focus-visible:outline-blue-600">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Product-specific sourcing terms</caption>
              <thead><tr>{["Product / order type", "Customization scope", "Minimum order", "Details"].map((label) => <th key={label} scope="col" className="border-b p-4">{label}</th>)}</tr></thead>
              <tbody>{sourcingTerms.map(([product, scope, moq, href]) => (
                <tr key={product}>
                  <th scope="row" className="border-b p-4">{product}</th>
                  <td className="border-b p-4 leading-6">{scope}</td>
                  <td className="border-b p-4 leading-6">{moq}</td>
                  <td className="border-b p-4"><Link className="font-bold text-blue-700 underline" href={href}>View details<span className="sr-only"> for {product}</span></Link></td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Clear sourcing facts</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            What buyers can verify before sending an inquiry.
          </h2>
          <div className="mt-10 space-y-5">
            {answers.map(({ question, answer, href, label }) => (
              <article key={question} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7 sm:p-8">
                <h3 className="text-2xl font-black tracking-tight text-slate-950">{question}</h3>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
                {href && <Link href={href} className="mt-4 inline-block font-bold text-blue-700 underline underline-offset-4">{label}</Link>}
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
      <section className="bg-blue-50 py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-950">Prepare one brief for an accurate quote</h2>
          <p className="mt-4 leading-7 text-slate-600">Send these details together so we can review the product, packing and delivery plan.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-700">
            <li>Product link or design reference, with dimensions for a new shape.</li>
            <li>Quantity per style and color, plus logo artwork and the requested finish.</li>
            <li>Individual packing, display-box and outer-carton requirements.</li>
            <li>Destination country, delivery postcode and required arrival date.</li>
            <li>Target age group and any product-specific document requirements.</li>
          </ul>
          <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800">Send your project brief</Link>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
