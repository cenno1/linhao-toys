import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Wholesale Squishy Toys Supplier | Bulk & Private Label",
  description: "Source bulk squishy toys for retail, distribution and online sales with mixed assortments, buyer branding, retail packaging and export coordination.",
  alternates: { canonical: "/wholesale-squishy-toys" },
  keywords: ["wholesale squishy toys", "bulk squishy toys", "squishy toy supplier", "private label squishy toys", "squishy toys wholesale"],
  openGraph: {
    title: "Wholesale Squishy Toys Supplier | Bulk & Private Label",
    description: "Plan bulk and private-label squishy assortments for retail, distribution and online sales.",
    url: "/wholesale-squishy-toys",
    type: "website",
    images: [{ url: "/images/products/bakery-slow-rise-squishy-assortment/hero.png", alt: "Wholesale squishy toy assortment and private-label packaging" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Squishy Toys Supplier | Bulk & Private Label",
    description: "Plan bulk and private-label squishy assortments for retail, distribution and online sales.",
    images: ["/images/products/bakery-slow-rise-squishy-assortment/hero.png"],
  },
};

export default function Page() {
  return <SeoLandingPage
    path="/wholesale-squishy-toys"
    eyebrow="WHOLESALE SQUISHY TOYS"
    title="Wholesale squishy toys for retail, distribution and online sellers."
    introduction="Build a focused assortment from food-shaped, glitter, mini, seasonal and sensory formats. LINHAO supports product selection, customization and export-ready packaging coordination."
    buyerNote="Tell us your market, target quantity, preferred designs and packaging format so we can recommend the most practical sourcing route."
    productSlugs={["dumpling-squishy-blind-box", "transparent-gel-cube-squishy", "capybara-squishy-assortment", "soft-sticky-squishy-assortment", "bakery-slow-rise-squishy-assortment", "crystal-clear-cat-paw-squishy"]}
    lastReviewed="2026-08-02"
    serviceType="Wholesale and private-label squishy toy supply"
    productHeading="Squishy products for wholesale assortment planning."
    productDescription="Samples suitable for impulse retail, gift shops, party packs, blind bags and online marketplaces."
    capabilities={[
      { title: "Mixed Assortments", text: "Plan coordinated colors, characters and sizes for a complete retail range." },
      { title: "Retail-Ready Packs", text: "Choose individual packs, multipacks, blind bags, display trays or gift boxes." },
      { title: "Buyer Branding", text: "Add approved logos, labels, inserts, barcode areas and package artwork." },
      { title: "Seasonal Programs", text: "Develop themes for Halloween, holidays, gifting and promotional calendars." },
      { title: "Marketplace Planning", text: "Coordinate pack dimensions and variants for online listing strategies." },
      { title: "Quality Reference", text: "Use the approved sample and specification as the production quality reference." },
    ]}
    process={[
      { title: "Assortment Selection", text: "Choose product directions, sales channel, target price position and desired quantity range." },
      { title: "Pack & Brand Plan", text: "Confirm the SKU mix, labels, barcodes, retail pack and shipping-mark requirements." },
      { title: "Reference Approval", text: "Approve the selected sample, color mix, packaging and written product specification." },
      { title: "Bulk Coordination", text: "Confirm production timing, inspection needs, export cartons and delivery terms." },
    ]}
    buyerChecklist={[
      "Selected product links, photos or preferred product categories",
      "Total quantity and quantity required per SKU or color",
      "Mixed-assortment ratio and any must-have designs",
      "Individual bag, blind bag, retail box, display or multipack",
      "Logo, label, insert, barcode and marketplace preparation",
      "Destination country, delivery timing and requested trade terms",
    ]}
    relatedPages={[
      { title: "Wholesale Packaging Guide", text: "Compare bags, blind packs, retail boxes, displays and online multipack directions.", href: "/resources/wholesale-squishy-toy-packaging-guide" },
      { title: "MOQ & Cost Planning", text: "Learn why product mix, packaging, setup and volume must be compared on one specification.", href: "/resources/custom-squishy-toy-moq-cost-guide" },
      { title: "Complete Product Catalog", text: "Review more current squishy, bag-charm, craft and gift product directions.", href: "/products" },
    ]}
    faqs={[
      { question: "Do you sell wholesale squishy toys in mixed designs?", answer: "Mixed assortments may be possible depending on the selected products, colors, packaging and total quantity." },
      { question: "Can wholesale products use our brand?", answer: "Yes. Private-label artwork, labels and packaging can be reviewed as part of the quotation." },
      { question: "How do we receive a wholesale quote?", answer: "Send the product links or references, target quantity, destination country and packaging requirements." },
      { question: "Can you support Amazon or online sellers?", answer: "Yes. We work with marketplace sellers, but final packaging, labeling and compliance requirements must be confirmed for the destination." },
      { question: "Is the same MOQ available for every wholesale product?", answer: "No. The practical minimum depends on the selected product, number of variants, packaging and whether buyer branding or other changes are required." },
      { question: "Can you quote several quantity levels?", answer: "Yes. Send one confirmed assortment and packaging brief, then request realistic quantity tiers so the quotations remain comparable." },
    ]}
  />;
}
