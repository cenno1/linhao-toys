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

// Lead with search-interest signals, then cover custom and wholesale buying routes.
const homepagePrioritySlugs = [
  "custom-crunchy-butter-squishy",
  "premium-custom-pu-character-figure",
  "ultra-slow-rising-realistic-pu-food-squishy",
  "custom-tpr-squishy-brand-inserts",
  "caramel-pudding-building-block-clay-squishy",
  "kawaii-smiley-banana-squishy-toys",
  "dumpling-squishy-blind-box",
  "pu-slow-rise-animal-keychain",
  "grape-building-block-clay-squishy",
  "custom-pu-ice-skate-squishy",
  "custom-pu-foam-realistic-fruit-squishy",
  "cat-soft-rubber-squishy-toys",
];

const homepageDescriptions: Record<string, string> = {
  "custom-crunchy-butter-squishy": "Existing TPR butter-bar mold with moving block filling and crackling sound. Customize colors, print and packaging.",
  "premium-custom-pu-character-figure": "Actual PU sample photo and video. Custom character shapes, colors and packaging. MOQ 500 per shape and color.",
  "ultra-slow-rising-realistic-pu-food-squishy": "Real PU food samples and squeeze video. Customize shape, softness, scent and packaging. MOQ 500 per shape and color.",
  "custom-tpr-squishy-brand-inserts": "Existing TPR cube with custom logo-shaped inserts and retail packaging. Confirm insert design, minimum quantity and movement on a sample.",
  "caramel-pudding-building-block-clay-squishy": "TPR shell with clay and petroleum jelly filling. Clear retail packs and a countertop display. Wholesale MOQ 500 per style.",
  "kawaii-smiley-banana-squishy-toys": "Kawaii banana with a TPR shell and clay-based filling. Clear individual boxes and display tray. Wholesale MOQ 500 per style.",
  "dumpling-squishy-blind-box": "Custom PU dumplings with branded blind-box packaging. MOQ 500 per shape and color. View design references and a sample squeeze video.",
  "pu-slow-rise-animal-keychain": "PU animal keychains for blind-box and collectible ranges. Customize characters, colors and packaging; confirm assortment and quantities in your quote.",
  "grape-building-block-clay-squishy": "Grape-shaped TPR shell with clay and petroleum jelly filling. Clear retail boxes and a fruit display tray. Wholesale MOQ 500 per style.",
  "custom-pu-ice-skate-squishy": "Sports-themed PU ice-skate design with sculpted details. Customize colors, size and recovery feel. MOQ 500 per shape and color.",
  "custom-pu-foam-realistic-fruit-squishy": "Realistic PU strawberry reference with a hand-squeeze demonstration. Develop fruit shapes, colors and packaging. MOQ 500 per shape and color.",
  "cat-soft-rubber-squishy-toys": "Soft rubber kitten styles for gift and novelty assortments. Compare basket and collar designs; confirm material, accessories and minimum quantity for your selected model.",
};

const homepageTags: Record<string, string> = {
  "custom-crunchy-butter-squishy": "Crunchy TPR",
  "premium-custom-pu-character-figure": "Custom PU Character",
  "ultra-slow-rising-realistic-pu-food-squishy": "Slow-Rise PU Food",
  "custom-tpr-squishy-brand-inserts": "Custom Logo Inserts",
  "caramel-pudding-building-block-clay-squishy": "Retail Display",
  "kawaii-smiley-banana-squishy-toys": "Kawaii · MOQ 500",
  "dumpling-squishy-blind-box": "Custom PU Blind Box",
  "pu-slow-rise-animal-keychain": "PU Animal Keychains",
  "grape-building-block-clay-squishy": "Retail Packaging",
  "custom-pu-ice-skate-squishy": "Custom Sports Shape",
  "custom-pu-foam-realistic-fruit-squishy": "Realistic PU Fruit",
  "cat-soft-rubber-squishy-toys": "Cat Gift Styles",
};

const sourcingRoutes = [
  { href: "/custom-squishy-toy-manufacturer", title: "Custom PU squishy toys", text: "Develop your own PU shape, recovery, painted details and packaging.", action: "Explore custom manufacturing" },
  { href: "/wholesale-squishy-toys#first-wholesale-order", title: "Wholesale squishies for resale", text: "Choose from 21 clay-filled styles, starting at 500 pieces per style.", action: "Select styles and request pricing" },
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
        cardTags={homepageTags}
        showFilters={false}
        limit={12}
        imageFit="contain"
        showCatalogLink
        eyebrow="CUSTOM PU · WHOLESALE STYLES · TPR BRANDING"
        heading="Custom & wholesale squishy toys for your next collection."
        description="Explore 12 product directions for custom development and retail assortments. Compare materials, samples and packaging, then open a product page to discuss your quantity and requirements."
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

