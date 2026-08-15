import type { Metadata } from "next";
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
  alternates: { canonical: "/" },
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

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
      <ProductShowcase limit={12} showCatalogLink />
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

