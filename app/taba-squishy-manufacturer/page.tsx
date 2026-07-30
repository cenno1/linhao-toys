import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Taba Squishy Manufacturer | Custom & Wholesale",
  description: "Develop custom and wholesale taba squishy products with color, size and packaging options for sensory retailers, gift brands and online sellers.",
  alternates: { canonical: "/taba-squishy-manufacturer" },
};

export default function Page() {
  return <SeoLandingPage
    path="/taba-squishy-manufacturer"
    eyebrow="TABA SQUISHY MANUFACTURER"
    title="Custom taba squishy development for sensory and novelty collections."
    introduction="LINHAO develops visually engaging jelly-style squeeze products for retail, gifting and online sales, with options for color, scale, appearance and private-label presentation."
    buyerNote="Taba is a market term used for soft jelly-like squeeze formats. Material, labeling, age grade and testing requirements are confirmed for each project and destination."
    productSlugs={["taba-jelly-ball", "glitter-basket-blue", "mini-animal-mix"]}
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
    faqs={[
      { question: "What is a taba squishy?", answer: "Taba commonly describes a very soft, jelly-like squeeze product with strong tactile and visual appeal." },
      { question: "Can you make a custom taba shape?", answer: "We can review the shape, dimensions and expected feel, then advise whether the design is suitable for development." },
      { question: "Can colors and glitter be customized?", answer: "Yes. Color, transparency and decorative effects can be evaluated during sampling." },
      { question: "What information is needed for a quote?", answer: "Provide reference images, size, quantity, destination, packaging needs and any required compliance standard." },
    ]}
  />;
}
