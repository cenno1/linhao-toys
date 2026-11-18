import type { Metadata } from "next";
import WholesaleOrder from "@/components/WholesaleOrder";
import SeoLandingPage from "@/components/SeoLandingPage";

const title = "Wholesale Squishy Toys for Resale | Bulk Orders";
const description = "Buy bulk squishy toys for resale. Compare 21 clay-filled styles with a 500-piece minimum per style, check pieces per outer carton, and request wholesale pricing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/wholesale-squishy-toys",
    languages: {
      en: "/wholesale-squishy-toys",
      es: "/es/squishy-toys",
      de: "/de/squishy-toys",
      "x-default": "/wholesale-squishy-toys",
    },
  },
  keywords: ["wholesale squishy toys", "squishy toys in stock", "bulk squishy toys", "ready stock squishy toys", "squishy toy supplier", "squishy toys wholesale"],
  openGraph: {
    title,
    description,
    url: "/wholesale-squishy-toys",
    type: "website",
    images: [{ url: "/images/products/ready-stock-mango-squishy/hero.png", alt: "Ready-stock fruit squishy toys for bulk wholesale" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/products/ready-stock-mango-squishy/hero.png"],
  },
};

export default function Page() {
  return <SeoLandingPage
    path="/wholesale-squishy-toys"
    eyebrow="READY-STOCK WHOLESALE SQUISHY TOYS"
    title="Wholesale squishy toys for resale"
    introduction="Order bulk squishy toys for your gift shop or retail display. Compare shipping carton options for 21 clay-filled designs, from caramel pudding to sweet corn, or browse our other wholesale styles below."
    buyerNote="The clay-filled collection starts at 500 pieces per style. Select your styles and quantities to prepare a wholesale quote request."
    productSlugs={["ready-stock-highland-cow-tpr-squishy", "ready-stock-chocolate-bar-squishy", "ready-stock-mango-squishy", "ready-stock-cheese-cube-squishy", "ready-stock-giant-strawberry-squishy", "ready-stock-giant-peach-squishy", "ready-stock-giant-banana-squishy", "ready-stock-dragon-fruit-squishy"]}
    preserveProductOrder
    browseLabel="Browse wholesale styles"
    quoteLabel="Get a wholesale quote"
    quoteHref="#first-wholesale-order"
    cardDescriptions={{
      "ready-stock-highland-cow-tpr-squishy": "Brown and orange Highland cow styles with a retail presentation box. View the packing photo and request availability by color.",
      "ready-stock-chocolate-bar-squishy": "Chocolate-bar squeeze toy in retail packaging. Request live quantity, unit packing and carton details.",
      "ready-stock-cheese-cube-squishy": "Boxed cheese-cube toy. Reference size: 12 × 12 × 12 cm. Confirm stock and outer-carton packing.",
      "ready-stock-mango-squishy": "Fruit-shaped squeeze toy. Reference size: 11.5 × 6 cm. Confirm available colors and carton quantities.",
      "ready-stock-giant-strawberry-squishy": "Jumbo fruit style for retail displays. Reference size: 16 × 13 cm. Ask for stock and packing details.",
      "ready-stock-giant-peach-squishy": "Jumbo peach for novelty assortments. Reference size: 17 × 15 cm. Confirm availability before ordering.",
      "ready-stock-giant-banana-squishy": "Oversized banana for display-focused ranges. Reference size: 35 × 7.5 cm. Request carton and freight details.",
      "ready-stock-dragon-fruit-squishy": "Colorful fruit style. Reference size: 18.2 × 12 cm. Request live quantity and packing information.",
    }}
    beforeProducts={<WholesaleOrder />}
    lastReviewed="2026-11-19"
    serviceType="Ready-stock wholesale squishy toy supply"
    productHeading="More wholesale squishy styles"
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
      { title: "Custom Dumpling Squishies", text: "Compare dumpling shapes and blind-box packaging for a private-label assortment.", href: "/products/dumpling-squishy-blind-box" },
      { title: "Wholesale Packaging Guide", text: "Compare bags, blind packs, retail boxes, displays and online multipack directions.", href: "/resources/wholesale-squishy-toy-packaging-guide" },
      { title: "Squishy Durability Guide", text: "Understand how material, shape, seams, storage and squeeze behavior influence product lifespan.", href: "/resources/squishy-toy-durability-testing-quality-control-guide" },
      { title: "ASTM F963 Buyer Checklist", text: "Review ASTM F963-23, older report versions, CPC responsibilities and product-specific document checks.", href: "/resources/en71-astm-f963-cpc-toy-compliance-guide" },
      { title: "MOQ & Cost Planning", text: "Learn why product mix, packaging, setup and volume must be compared on one specification.", href: "/resources/custom-squishy-toy-moq-cost-guide" },
      { title: "Complete Product Catalog", text: "Review more current squishy, bag-charm, craft and gift product directions.", href: "/products" },
    ]}
    faqs={[
      { question: "How do I buy wholesale squishy toys for resale?", answer: "Choose the product links and quantities per SKU, then send your destination, receiving date and retail packaging requirements. LINHAO checks live stock, minimum quantities, packing and freight before confirming the quotation. For an original design, use the custom PU development route with sampling before bulk production." },
      { question: "Can you supply custom dumpling squishies and blind-box packaging?", answer: "Our custom PU dumpling route supports buyer-defined shapes, expressions and steamer-style or blind-box packaging for sample review. It is a development order, not a promise of ready stock. MOQ is 500 pieces per shape and 500 pieces per color; confirm the approved sample, packing and schedule for your order." },
      { question: "Are the displayed wholesale squishy toys always in stock?", answer: "They are current ready-stock directions, but live quantity and colors must be reconfirmed because warehouse availability changes with orders." },
      { question: "What information is needed for a stock quotation?", answer: "Send the product name, quantity, destination, receiving date and any packing or document requirements." },
      { question: "Can several ready-stock squishy toys ship together?", answer: "A mixed shipment may be possible after the selected SKUs, quantity, carton data and warehouse availability are checked." },
      { question: "How fast can ready-stock squishy toys be dispatched?", answer: "Dispatch depends on live availability, payment, inspection, warehouse handling and the selected freight route. We confirm timing with the quotation." },
      { question: "What is the minimum order for the clay-filled collection?", answer: "The minimum is 500 pieces per style for the 21 clay-filled designs listed in the first-order table. Tell us the colour split and delivery destination for a packing and freight quote. Other ranges are quoted separately." },
      { question: "Can ready-stock items use custom labels or packaging?", answer: "Some secondary packing or labeling may be reviewed, but changes can affect quantity and dispatch timing. State the requirement before the stock quote is confirmed." },
    ]}
  />;
}

