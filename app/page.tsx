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

// Google Search Console, Web, 2026-08-22 through 2026-09-18.
// Clicks descending, then impressions descending. Unreported products retain catalog order.
const homepagePrioritySlugs = [
  "ready-stock-highland-cow-tpr-squishy",
  "transparent-gel-cube-squishy",
  "ready-stock-halloween-butter-bar-squishy",
  "ready-stock-chocolate-bar-squishy",
  "dumpling-squishy-blind-box",
  "christmas-mystery-dumpling-squishy-advent-calendar",
  "squeaky-tongue-popping-animal-squishy",
  "custom-tpr-popsicle-butter-cube-squishy",
  "glitter-basket-blue",
  "glitter-bao-bun",
  "custom-jumbo-ghost-squishy",
  "ready-stock-cheese-cube-squishy",
  "comfort-cat-plush",
  "tennis-ball-plush-keychain"
];

const sourcingRoutes = [
  { href: "/custom-squishy-toy-manufacturer", title: "Custom squishy toys", text: "Develop your own shape, colors and packaging.", action: "Explore custom manufacturing" },
  { href: "/products", title: "Wholesale product catalog", text: "Compare real samples and product details.", action: "Browse all products" },
  { href: "/trending-squishy-toys", title: "Trending squishy styles", text: "Explore product directions for your next collection.", action: "Explore trending styles" },
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
      <ProductShowcase prioritySlugs={homepagePrioritySlugs} limit={30} showCatalogLink />
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

