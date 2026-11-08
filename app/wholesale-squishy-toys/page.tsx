import type { Metadata } from "next";
import Link from "next/link";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Wholesale Squishy Toys & Bulk Supplier | Ready Stock",
  description: "Source wholesale squishy toys in bulk from LINHAO Toys. Compare ready-stock fruit and novelty styles, MOQ, carton packing, dispatch timing and freight options.",
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
    title="Wholesale squishy toys in bulk for retailers and distributors."
    introduction="Source bulk squishy toys for gift shops, importers, distributors, party suppliers and online sellers. Review current fruit and novelty styles, then confirm live quantity, available colors, carton packing and dispatch timing before ordering."
    buyerNote="Send the product name, required quantity, destination country and receiving date. We will check current stock first, then return the available quantity, packing and freight route."
    productSlugs={["ready-stock-chocolate-bar-squishy", "ready-stock-cheese-cube-squishy", "ready-stock-mango-squishy", "ready-stock-giant-strawberry-squishy", "ready-stock-giant-peach-squishy", "ready-stock-giant-banana-squishy", "ready-stock-dragon-fruit-squishy", "ready-stock-highland-cow-tpr-squishy"]}
    preserveProductOrder
    browseLabel="Browse wholesale styles"
    quoteLabel="Request Stock & Bulk Pricing"
    cardDescriptions={{
      "ready-stock-chocolate-bar-squishy": "Chocolate-bar squeeze toy in retail packaging. Request live quantity, unit packing and carton details.",
      "ready-stock-cheese-cube-squishy": "Boxed cheese-cube toy. Reference size: 12 × 12 × 12 cm. Confirm stock and outer-carton packing.",
      "ready-stock-mango-squishy": "Fruit-shaped squeeze toy. Reference size: 11.5 × 6 cm. Confirm available colors and carton quantities.",
      "ready-stock-giant-strawberry-squishy": "Jumbo fruit style for retail displays. Reference size: 16 × 13 cm. Ask for stock and packing details.",
      "ready-stock-giant-peach-squishy": "Jumbo peach for novelty assortments. Reference size: 17 × 15 cm. Confirm availability before ordering.",
      "ready-stock-giant-banana-squishy": "Oversized banana for display-focused ranges. Reference size: 35 × 7.5 cm. Request carton and freight details.",
      "ready-stock-dragon-fruit-squishy": "Colorful fruit style. Reference size: 18.2 × 12 cm. Request live quantity and packing information.",
    }}
    beforeProducts={
      <section className="bg-white py-16" aria-labelledby="wholesale-order-route">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 id="wholesale-order-route" className="text-3xl font-black tracking-tight text-slate-950">Choose a wholesale order route.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">Buying squishies for resale starts with the assortment, quantity per style and packaging. Choose current stock for an availability check, or a development route for your own design.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { title: "Ready-stock bulk squishies", text: "Compare fruit, chocolate and novelty styles below. Send quantities per SKU for a live-stock and carton check.", href: "#products", label: "Compare stock styles" },
              { title: "Custom dumpling & blind-box ranges", text: "Develop original PU dumpling shapes, expressions and steamer-style or blind-box packaging. Sampling and MOQ apply.", href: "/products/dumpling-squishy-blind-box", label: "Explore custom dumpling squishies" },
              { title: "Your own slow-rise PU design", text: "Start from artwork for custom shapes, colors, squeeze feel and branded packaging. Confirm specifications on a physical sample.", href: "/custom-squishy-toy-manufacturer", label: "Plan a custom squishy order" },
            ].map((item) => (
              <article key={item.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <Link href={item.href} className="mt-5 inline-block font-bold text-blue-700 hover:underline">{item.label} →</Link>
              </article>
            ))}
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <caption className="bg-slate-50 p-5 text-left text-lg font-bold text-slate-950">Compare bulk quotations on the same basis</caption>
              <thead className="bg-slate-950 text-white"><tr><th scope="col" className="p-4">Order detail</th><th scope="col" className="p-4">What to confirm</th><th scope="col" className="p-4">Why it matters</th></tr></thead>
              <tbody>
                {[
                  ["Quantity & MOQ", "Pieces per SKU and color; carton multiples; any mixed-SKU option.", "A total assortment quantity may not meet each item's minimum."],
                  ["Unit & display packing", "Individual bag or box, units per display, barcode and labeling requirements.", "Retail presentation and packing changes affect the quote."],
                  ["Carton & freight", "Units per carton, carton dimensions, gross weight and destination.", "Compare total landed cost with freight and applicable import costs."],
                  ["Availability & timing", "Current quantity, dispatch estimate, inspection and transit time.", "Ready stock still needs a live availability and delivery check."],
                ].map(([label, detail, reason]) => (<tr key={label} className="border-t border-slate-200"><th scope="row" className="p-4 font-bold text-slate-950">{label}</th><td className="p-4 leading-6 text-slate-600">{detail}</td><td className="p-4 leading-6 text-slate-600">{reason}</td></tr>))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">There is no single stock MOQ or pack quantity for every style. Ask for the current specification and a sample where needed before confirming a bulk order.</p>
        </div>
      </section>
    }
    lastReviewed="2026-11-08"
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
      { question: "How do I buy wholesale squishy toys for resale?", answer: "Choose the product links and quantities per SKU, then send your destination, receiving date and retail packaging requirements. LINHAO checks live stock, minimum quantities, packing and freight before confirming the quotation. For an original design, use the custom PU development route with sampling before bulk production." },
      { question: "Can you supply custom dumpling squishies and blind-box packaging?", answer: "Our custom PU dumpling route supports buyer-defined shapes, expressions and steamer-style or blind-box packaging for sample review. It is a development order, not a promise of ready stock. MOQ is 500 pieces per shape and 500 pieces per color; confirm the approved sample, packing and schedule for your order." },
      { question: "Are the displayed wholesale squishy toys always in stock?", answer: "They are current ready-stock directions, but live quantity and colors must be reconfirmed because warehouse availability changes with orders." },
      { question: "What information is needed for a stock quotation?", answer: "Send the product name, quantity, destination, receiving date and any packing or document requirements." },
      { question: "Can several ready-stock squishy toys ship together?", answer: "A mixed shipment may be possible after the selected SKUs, quantity, carton data and warehouse availability are checked." },
      { question: "How fast can ready-stock squishy toys be dispatched?", answer: "Dispatch depends on live availability, payment, inspection, warehouse handling and the selected freight route. We confirm timing with the quotation." },
      { question: "Is there one MOQ for every in-stock squishy toy?", answer: "No. The practical wholesale quantity can vary by product, available color, packing and current warehouse stock." },
      { question: "Can ready-stock items use custom labels or packaging?", answer: "Some secondary packing or labeling may be reviewed, but changes can affect quantity and dispatch timing. State the requirement before the stock quote is confirmed." },
    ]}
  />;
}

