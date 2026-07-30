import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Wholesale Squishy Toys Supplier | Private Label",
  description: "Source wholesale squishy toys for retail, distribution, promotions and Amazon. Food, glitter, mini and seasonal formats with private-label options.",
  alternates: { canonical: "/wholesale-squishy-toys" },
};

export default function Page() {
  return <SeoLandingPage
    path="/wholesale-squishy-toys"
    eyebrow="WHOLESALE SQUISHY TOYS"
    title="Wholesale squishy toys for retail, distribution and online sellers."
    introduction="Build a focused assortment from food-shaped, glitter, mini, seasonal and sensory formats. LINHAO supports product selection, customization and export-ready packaging coordination."
    buyerNote="Tell us your market, target quantity, preferred designs and packaging format so we can recommend the most practical sourcing route."
    initialFilter="squishy"
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
    faqs={[
      { question: "Do you sell wholesale squishy toys in mixed designs?", answer: "Mixed assortments may be possible depending on the selected products, colors, packaging and total quantity." },
      { question: "Can wholesale products use our brand?", answer: "Yes. Private-label artwork, labels and packaging can be reviewed as part of the quotation." },
      { question: "How do we receive a wholesale quote?", answer: "Send the product links or references, target quantity, destination country and packaging requirements." },
      { question: "Can you support Amazon or online sellers?", answer: "Yes. We work with marketplace sellers, but final packaging, labeling and compliance requirements must be confirmed for the destination." },
    ]}
  />;
}
