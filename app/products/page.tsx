import type { Metadata } from "next";
import Header from "@/components/Header";
import ProductShowcase from "@/components/ProductShowcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { productCatalogPdf } from "@/lib/compliance-docs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Wholesale Squishy & Plush Product Catalog",
  description:
    "Browse LINHAO OEM squishy, plush charm and emotional gift SKUs for Amazon sellers, retail chains and wholesale importers.",
  path: "/products",
  keywords: [
    "wholesale squishy toys",
    "OEM plush catalog",
    "Amazon seller toys",
    "squishy product catalog",
    "LINHAO Toys products",
  ],
});

export default function Products() {
  return (
    <main>
      <Header />
      <div className="v6-page-intro shell">
        <span className="eyebrow">PRODUCT CATALOG</span>
        <h1>Squishy, plush charms and emotional gifts.</h1>
        <p>
          Browse original development directions created for retail, gifting,
          promotional and private-label projects.{" "}
          <a
            href={productCatalogPdf.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-blue-600 hover:underline"
          >
            Download full catalog PDF →
          </a>
        </p>
      </div>
      <ProductShowcase />
      <CTA />
      <Footer />
    </main>
  );
}
