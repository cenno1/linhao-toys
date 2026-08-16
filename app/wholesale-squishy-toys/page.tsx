import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Wholesale Squishy Toys & Bulk Supplier | Ready Stock",
  description: "Source wholesale squishy toys in bulk from LINHAO Toys. Compare ready-stock fruit and novelty styles, MOQ, carton packing, dispatch timing and freight options.",
  alternates: { canonical: "/wholesale-squishy-toys" },
  keywords: ["wholesale squishy toys", "squishy toys in stock", "bulk squishy toys", "ready stock squishy toys", "squishy toy supplier", "squishy toys wholesale"],
  openGraph: {
    title: "Wholesale Squishy Toys & Bulk Supplier | Ready Stock",
    description: "Review ready-stock and bulk squishy toy options for retailers and distributors, then request live quantity, packing and dispatch details.",
    url: "/wholesale-squishy-toys",
    type: "website",
    images: [{ url: "/images/products/ready-stock-mango-squishy/hero.png", alt: "Ready-stock fruit squishy toys for bulk wholesale" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Squishy Toys & Bulk Supplier | Ready Stock",
    description: "Review ready-stock and bulk squishy toy options for retailers and distributors, then request live quantity, packing and dispatch details.",
    images: ["/images/products/ready-stock-mango-squishy/hero.png"],
  },
};

export default function Page() {
  return <SeoLandingPage
    path="/wholesale-squishy-toys"
    eyebrow="READY-STOCK WHOLESALE SQUISHY TOYS"
    title="Wholesale squishy toys for retail, distribution and ready-stock orders."
    introduction="Source bulk squishy toys for gift shops, importers, distributors, party suppliers and online sellers. Review current fruit and novelty styles, then confirm live quantity, available colors, carton packing and dispatch timing before ordering."
    buyerNote="Send the product name, required quantity, destination country and receiving date. We will check current stock first, then return the available quantity, packing and freight route."
    productSlugs={["ready-stock-mango-squishy", "ready-stock-giant-peach-squishy", "ready-stock-cheese-cube-squishy", "ready-stock-giant-strawberry-squishy", "ready-stock-giant-banana-squishy", "ready-stock-dragon-fruit-squishy", "ready-stock-halloween-butter-bar-squishy"]}
    lastReviewed="2026-08-14"
    serviceType="Ready-stock wholesale squishy toy supply"
    productHeading="Current ready-stock squishy directions for bulk buyers."
    productDescription="Reference items for live-stock checks. Quantity, color mix, carton packing and dispatch timing are reconfirmed with every inquiry."
    capabilities={[
      { title: "Live Stock Check", text: "Confirm current quantity and available colors before payment or shipment planning." },
      { title: "Bulk Quantity Tiers", text: "Request practical quantity options using the same product and packing specification." },
      { title: "Carton Information", text: "Confirm unit packing, carton quantity, carton dimensions and gross weight for freight comparison." },
      { title: "Dispatch Planning", text: "Match stock confirmation, payment, warehouse handling and the selected freight route to the receiving date." },
      { title: "Mixed Product Review", text: "Ask whether selected ready-stock SKUs can be combined in one wholesale shipment." },
      { title: "Product Documents", text: "Review available product specifications and applicable testing information for the exact item and market." },
    ]}
    process={[
      { title: "Select Stock Items", text: "Send the product names or links, required quantity and any acceptable color alternatives." },
      { title: "Verify Availability", text: "We check live quantity, unit packing, cartons and warehouse dispatch timing." },
      { title: "Confirm Freight", text: "Compare shipment options using the destination, carton data and requested receiving date." },
      { title: "Release Shipment", text: "Confirm the commercial terms, final quantity, inspection needs and shipping documents." },
    ]}
    buyerChecklist={[
      "Selected ready-stock product names, links or screenshots",
      "Total quantity and acceptable quantity per SKU or color",
      "Destination country, city or delivery postal code",
      "Required receiving date and preferred freight method",
      "Unit packing, barcode, carton or labeling requirements",
      "Any product document or destination-market requirement",
    ]}
    relatedPages={[
      { title: "Wholesale Packaging Guide", text: "Compare bags, blind packs, retail boxes, displays and online multipack directions.", href: "/resources/wholesale-squishy-toy-packaging-guide" },
      { title: "Squishy Durability Guide", text: "Understand how material, shape, seams, storage and squeeze behavior influence product lifespan.", href: "/resources/squishy-toy-durability-testing-quality-control-guide" },
      { title: "ASTM F963 Buyer Checklist", text: "Review ASTM F963-23, older report versions, CPC responsibilities and product-specific document checks.", href: "/resources/en71-astm-f963-cpc-toy-compliance-guide" },
      { title: "MOQ & Cost Planning", text: "Learn why product mix, packaging, setup and volume must be compared on one specification.", href: "/resources/custom-squishy-toy-moq-cost-guide" },
      { title: "Complete Product Catalog", text: "Review more current squishy, bag-charm, craft and gift product directions.", href: "/products" },
    ]}
    faqs={[
      { question: "Are the displayed wholesale squishy toys always in stock?", answer: "They are current ready-stock directions, but live quantity and colors must be reconfirmed because warehouse availability changes with orders." },
      { question: "What information is needed for a stock quotation?", answer: "Send the product name, quantity, destination, receiving date and any packing or document requirements." },
      { question: "Can several ready-stock squishy toys ship together?", answer: "A mixed shipment may be possible after the selected SKUs, quantity, carton data and warehouse availability are checked." },
      { question: "How fast can ready-stock squishy toys be dispatched?", answer: "Dispatch depends on live availability, payment, inspection, warehouse handling and the selected freight route. We confirm timing with the quotation." },
      { question: "Is there one MOQ for every in-stock squishy toy?", answer: "No. The practical wholesale quantity can vary by product, available color, packing and current warehouse stock." },
      { question: "Can ready-stock items use custom labels or packaging?", answer: "Some secondary packing or labeling may be reviewed, but changes can affect quantity and dispatch timing. State the requirement before the stock quote is confirmed." },
    ]}
  />;
}

