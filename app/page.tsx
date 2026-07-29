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
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd data={faqPageJsonLd()} />
      <Header />
      <Hero />
      <TrustStrip />
      <ProductShowcase />
      <Capabilities />
      <FactoryStory />
      <Certificates />
      <FAQ />
      <CTA />
      <Footer />
      <ContactFloat />
    </main>
  );
}
