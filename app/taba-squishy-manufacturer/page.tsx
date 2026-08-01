import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Taba Squishy Manufacturer | Custom Jelly Sensory Toys",
  description: "Develop custom taba-style jelly sensory toys with buyer-approved shape, color, transparency, squeeze feel, protective packaging and private labeling.",
  alternates: { canonical: "/taba-squishy-manufacturer" },
  keywords: ["taba squishy manufacturer", "custom taba squishy", "jelly squishy toy supplier", "sticky squishy wholesale", "sensory squishy OEM"],
  openGraph: {
    title: "Taba Squishy Manufacturer | Custom Jelly Sensory Toys",
    description: "Develop custom taba-style sensory products with coordinated appearance, feel and packaging.",
    url: "/taba-squishy-manufacturer",
    type: "website",
    images: [{ url: "/images/products/crystal-clear-cat-paw-squishy/hero.png", alt: "Custom clear cat paw and taba-style sensory squishy products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taba Squishy Manufacturer | Custom Jelly Sensory Toys",
    description: "Develop custom taba-style sensory products with coordinated appearance, feel and packaging.",
    images: ["/images/products/crystal-clear-cat-paw-squishy/hero.png"],
  },
};

export default function Page() {
  return <SeoLandingPage
    path="/taba-squishy-manufacturer"
    eyebrow="TABA SQUISHY MANUFACTURER"
    title="Custom taba squishy development for sensory and novelty collections."
    introduction="LINHAO develops visually engaging jelly-style squeeze products for retail, gifting and online sales, with options for color, scale, appearance and private-label presentation."
    buyerNote="Taba is a market term used for soft jelly-like squeeze formats. Material, labeling, age grade and testing requirements are confirmed for each project and destination."
    productSlugs={["soft-sticky-squishy-assortment", "transparent-gel-cube-squishy", "crystal-clear-cat-paw-squishy", "glitter-basket-blue", "mini-animal-mix"]}
    lastReviewed="2026-08-02"
    serviceType="Custom taba-style jelly sensory toy development"
    productHeading="Taba and related sensory product directions."
    productDescription="Start with an existing visual direction or ask us to review a new shape and collection concept."
    capabilities={[
      { title: "Jelly Appearance", text: "Develop transparent, translucent, glitter or colored visual directions." },
      { title: "Shape Development", text: "Review simple balls, food shapes, characters and other moldable concepts." },
      { title: "Sensory Feel", text: "Align squeeze feel and recovery behavior with the intended user experience." },
      { title: "Color Series", text: "Create coordinated colorways for collections, blind packs and display programs." },
      { title: "Packaging", text: "Plan protective, retail and private-label packaging appropriate to the format." },
      { title: "Market Review", text: "Confirm product claims, age grading and required documentation before production." },
    ]}
    process={[
      { title: "Concept Review", text: "Review the shape, dimensions, appearance, intended use and destination market." },
      { title: "Feel & Material Sample", text: "Align transparency, color, decorative effects, squeeze resistance and recovery behavior." },
      { title: "Protection & Packaging", text: "Confirm protective packing, dust control, retail presentation and required labels." },
      { title: "Approved Production", text: "Use the signed-off sample and specification for production and inspection planning." },
    ]}
    buyerChecklist={[
      "Shape reference, front and back views or simple drawing",
      "Target dimensions and desired squeeze resistance",
      "Transparent, translucent, solid-color or glitter appearance",
      "Surface-feel expectations and protective packing needs",
      "Quantity per design and total collection quantity",
      "Destination market, packaging artwork and requested timing",
    ]}
    relatedPages={[
      { title: "Custom Squishy Manufacturing", text: "Compare the broader OEM path for molded squeeze products, artwork and private-label packaging.", href: "/custom-squishy-toy-manufacturer" },
      { title: "Toy Compliance Planning", text: "Understand why documentation must match the exact product, materials, age grade and market.", href: "/resources/en71-astm-f963-cpc-toy-compliance-guide" },
      { title: "Trending Squishy Directions", text: "Review current product directions selected for buyer assortment and concept planning.", href: "/trending-squishy-toys" },
    ]}
    faqs={[
      { question: "What is a taba squishy?", answer: "Taba commonly describes a very soft, jelly-like squeeze product with strong tactile and visual appeal." },
      { question: "Can you make a custom taba shape?", answer: "We can review the shape, dimensions and expected feel, then advise whether the design is suitable for development." },
      { question: "Can colors and glitter be customized?", answer: "Yes. Color, transparency and decorative effects can be evaluated during sampling." },
      { question: "What information is needed for a quote?", answer: "Provide reference images, size, quantity, destination, packaging needs and any required compliance standard." },
      { question: "How should soft or sticky products be packaged?", answer: "The protective format depends on surface behavior, dimensions and sales channel. Individual protection, dust control, labels and retail presentation should be confirmed during sampling." },
      { question: "Can a taba-style product use our own character?", answer: "A buyer-owned character can be reviewed for moldability, decoration, material behavior and intellectual-property authorization before development." },
    ]}
  />;
}
