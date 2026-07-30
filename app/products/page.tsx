import type { Metadata } from "next";
import Header from "@/components/Header";
import ProductShowcase from "@/components/ProductShowcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom Squishy Toys, Plush Charms & OEM Gifts",
  description:
    "Browse LINHAO custom squishy toys, plush bag charms and private-label gift products for wholesale, retail and Amazon sellers.",
  alternates: { canonical: "/products" },
};

export default function Products() {
  return (
    <main>
      <Header />
      <div className="v6-page-intro shell">
        <span className="eyebrow">PRODUCT CATALOG</span>
        <h1>Squishy, plush charms and emotional gifts.</h1>
        <p>
          Browse original development directions created for retail, gifting,
          promotional and private-label projects.
        </p>
      </div>
      <ProductShowcase />
      <CTA />
      <Footer />
    </main>
  );
}
