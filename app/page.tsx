import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProductShowcase from "@/components/ProductShowcase";
import Capabilities from "@/components/Capabilities";
import FactoryStory from "@/components/FactoryStory";
import Certificates from "@/components/Certificates";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import FactoryDirectComparison from "@/components/FactoryDirectComparison";
import BuyerValue from "@/components/BuyerValue";
import PriorityBuyerGuides from "@/components/PriorityBuyerGuides";

export const metadata: Metadata = {
  title: { absolute: "Squishy Toy Manufacturer & Wholesale Supplier | LINHAO Toys" },
  description:
    "Source custom and wholesale squishy toys from LINHAO Toys, with OEM/ODM development, ready-stock options, private-label packaging and worldwide export support.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      de: "/de",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Squishy Toy Manufacturer & Wholesale Supplier | LINHAO Toys",
    description:
      "Custom and wholesale squishy toys for brands, retailers and distributors, with OEM/ODM development and export support.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squishy Toy Manufacturer & Wholesale Supplier | LINHAO Toys",
    description:
      "Custom and wholesale squishy toys with OEM/ODM development, ready-stock options and export support.",
  },
};

// Curated sourcing entry: PU first, then selected existing-mold TPR options.
const homepagePrioritySlugs = [
  "premium-custom-pu-character-figure",
  "ultra-slow-rising-realistic-pu-food-squishy",
  "custom-pu-fruit-animal-figures",
  "pu-slow-rise-animal-keychain",
  "custom-pu-high-rebound-ball",
  "sesame-braided-bread-pu-squishy",
  "custom-crunchy-butter-squishy",
  "custom-tpr-squishy-brand-inserts",
];

const homepageDescriptions: Record<string, string> = {
  "premium-custom-pu-character-figure": "Actual PU character photo and video. Develop your own silhouette, face, clothing details and painted finish.",
  "ultra-slow-rising-realistic-pu-food-squishy": "Actual food samples and squeeze video. Specify food shapes, molded textures, softness, scent and recovery.",
  "custom-pu-fruit-animal-figures": "Develop original PU fruit and animal forms from your artwork, with custom colors, faces, softness and packaging.",
  "pu-slow-rise-animal-keychain": "Animal PU squishy keychains for collectible and blind-box programs. Specify characters, colors, accessories and packaging.",
  "custom-pu-high-rebound-ball": "PU ball size, color and branding options for retail and promotional projects. Confirm rebound and finish on a sample.",
  "sesame-braided-bread-pu-squishy": "Braided PU bread with toasted shading and sesame-style details. Discuss your own bakery collection and retail packing.",
  "custom-crunchy-butter-squishy": "Existing TPR butter-bar mold with moving block filling and crackling sound. Customize colors, print and packaging.",
  "custom-tpr-squishy-brand-inserts": "Existing TPR cube format with moving branded blocks or plastic inserts. Review the pictured reference through sampling.",
};

const sourcingRoutes = [
  { href: "/custom-squishy-toy-manufacturer", title: "Custom PU squishy toys", text: "Develop your own PU shape, recovery, painted details and packaging.", action: "Explore custom manufacturing" },
  { href: "/products", title: "Wholesale product catalog", text: "Compare real samples and product details.", action: "Browse all products" },
  { href: "/custom-pu-squishy-case-studies", title: "Real custom PU cases", text: "See character, robot and strawberry projects with customizable appearance and recovery.", action: "View custom PU cases" },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
      <nav className="shell grid gap-3 py-6 md:grid-cols-3" aria-label="Product sourcing options">
        {sourcingRoutes.map((route) => (
          <Link key={route.href} href={route.href} className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
            <span className="block text-lg font-bold text-slate-950">{route.title}</span>
            <span className="mt-2 block text-sm leading-6 text-slate-600">{route.text}</span>
            <span className="mt-3 block text-sm font-bold text-blue-600">{route.action} →</span>
          </Link>
        ))}
      </nav>
      <ProductShowcase
        productSlugs={homepagePrioritySlugs}
        prioritySlugs={homepagePrioritySlugs}
        cardDescriptions={homepageDescriptions}
        showFilters={false}
        limit={8}
        showCatalogLink
        eyebrow="CUSTOM PU FIRST · WHOLESALE & TPR OPTIONS"
        heading="Custom PU squishy designs for your next collection."
        description="Start with six PU sourcing directions, then two existing-mold TPR options. Open each page for photos, videos, specifications and a custom quotation. Explore all other styles in the complete catalog."
      />
      <Capabilities />
      <FactoryDirectComparison />
      <FactoryStory />
      <BuyerValue />
      <PriorityBuyerGuides />
      <Certificates />
      <FAQ />
      <CTA />
      <Footer />
      <ContactFloat />
    </main>
  );
}

