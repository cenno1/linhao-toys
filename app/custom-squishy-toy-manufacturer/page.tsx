import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Custom Squishy Manufacturer | PU OEM & Private Label",
  description: "Custom PU squishy toys from your artwork: character figures, realistic food and blind-box designs. MOQ from 500 pieces. Selected TPR designs also available.",
  alternates: { canonical: "/custom-squishy-toy-manufacturer" },
  keywords: ["custom squishy toy manufacturer", "custom PU squishy toys", "OEM PU squishy manufacturer", "custom slow rising squishy toys", "custom TPR squeeze toys"],
  openGraph: {
    title: "Custom Squishy Manufacturer | PU OEM & Private Label",
    description: "Custom PU shapes, recovery speeds, painted details and private-label packaging, plus selected TPR cube and smiley-face projects.",
    url: "/custom-squishy-toy-manufacturer",
    type: "website",
    images: [{ url: "/images/products/premium-custom-pu-character-figure.jpg", alt: "Custom squishy toy manufacturing and private-label product development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Squishy Manufacturer | PU OEM & Private Label",
    description: "Custom PU shapes, recovery speeds, painted details and private-label packaging, plus selected TPR cube and smiley-face projects.",
    images: ["/images/products/premium-custom-pu-character-figure.jpg"],
  },
};

export default function Page() {
  return <SeoLandingPage
    path="/custom-squishy-toy-manufacturer"
    eyebrow="CUSTOM SQUISHY MANUFACTURER · PU OEM"
    title="Custom squishy manufacturer for your original PU designs."
    introduction="LINHAO manufactures custom PU squishy toys from your artwork, including character figures, realistic food, animal forms and other original shapes. Customize dimensions, colors, hardness or softness, scent, printed or painted details and packaging. TPR customization is limited to existing molds and supports logo printing, colors, hand feel and custom packaging."
    buyerNote="MOQ is 500 pieces per shape and 500 pieces per color. The workflow is customer artwork, 3D rendering, sampling and sample shipment for approval. Sampling takes 12–15 days; bulk production takes 25–30 days. Confirm the schedule for your order; sample delivery and freight transit are separate."
    productSlugs={["premium-custom-pu-character-figure","ultra-slow-rising-realistic-pu-food-squishy","custom-pu-toast-squishy-blind-box","custom-pu-ice-skate-squishy","custom-pu-fruit-animal-figures","custom-pu-high-rebound-ball","custom-tpr-squishy-brand-inserts","custom-tpr-popsicle-butter-cube-squishy"]}
    preserveProductOrder
    productEyebrow="PU CASES & DESIGN REFERENCES"
    quoteLabel="Request a Custom Quote"
    lastReviewed="2026-10-08"
    serviceType="Custom PU squishy toy OEM manufacturing with selected TPR development"
    productHeading="Explore custom PU designs, then selected TPR options."
    productDescription="Explore actual PU character and food samples alongside design references for toast, ice-skate and other shapes. Each product page identifies the visuals shown. Your original PU design is developed through 3D rendering and physical sample approval; TPR options use existing molds."
    capabilities={[
      { title: "Custom PU Shapes", text: "Develop character figures, food designs, toast collections and other original PU shapes from your artwork, with buyer-defined dimensions." },
      { title: "PU Feel & Recovery", text: "Specify soft slow-rise, extra-slow recovery or higher-rebound requirements. Confirm the finished feel and recovery speed against a physical sample." },
      { title: "Painted Details & Branding", text: "Plan facial features, food textures, color gradients, logos and painted details. Review finish quality and durability requirements during sample approval." },
      { title: "TPR Existing Molds", text: "Choose from existing square and other available TPR molds. Customize logo printing, colors, hand feel and packaging; new custom TPR shapes are not offered." },
      { title: "Private-Label Packaging", text: "Coordinate branded blind boxes, individual bags, labels, retail boxes, display trays and shipping marks." },
      { title: "Export Coordination", text: "Review destination, age grade and documentation needs before confirming production." },
    ]}
    process={[
{ title: "Artwork & 3D Rendering", text: "Send your design artwork. We prepare a 3D rendering to review the appearance before sampling. TPR projects use existing molds." },
{ title: "Sampling: 12–15 Days", text: "Develop the physical sample to check dimensions, colors, hardness or softness, scent for PU, logo and packaging." },
{ title: "Ship & Approve Samples", text: "We ship the sample for your review. Approve the appearance, hand feel and finish before proceeding to bulk production; delivery time is separate." },
{ title: "Bulk Production: 25–30 Days", text: "Produce against the approved sample and order specification. Confirm the order schedule and freight transit separately." },
]}
    buyerChecklist={[
      "Artwork, character sheet or annotated reference images",
      "Target dimensions and preferred squeeze or recovery feel",
      "Total quantity and quantity per design or colorway",
      "Logo, face artwork, print positions and surface effects",
      "Packaging format, barcode and private-label requirements",
      "Destination market, intended age grade and requested timing",
    ]}
    relatedPages={[
      { title: "Custom Food Squishy Manufacturing", text: "Review real PU food samples, ultra-slow recovery and moist-feeling texture, then specify your original shapes and packaging.", href: "/products/ultra-slow-rising-realistic-pu-food-squishy" },
      { title: "Custom Character Squishy Manufacturing", text: "Plan original character artwork, sculpted features, painted details and recovery speed around an approved physical sample.", href: "/products/premium-custom-pu-character-figure" },
      { title: "Logo Printing & Packaging Guide", text: "Choose artwork positions, finish requirements and branded packing before approving your sample.", href: "/resources/custom-squishy-toy-logo-printing-packaging-guide" },
      { title: "Real Custom PU Cases", text: "View character, robot and strawberry examples with customizable appearance and recovery speed.", href: "/custom-pu-squishy-case-studies" },
      { title: "Selected TPR Customization", text: "Explore ice-cube shapes, smiley-face designs and moving custom brand inserts.", href: "/tpr-squishy-toy-manufacturer" },
      { title: "Custom PU Squishy Manufacturer", text: "Plan original PU shapes, slow-rise recovery, artwork and private-label packaging around one approved sample.", href: "/custom-pu-squishy-manufacturer" },
      { title: "Custom Squishy MOQ & Cost Guide", text: "Understand how molds, design count, effects, packaging and volume shape a quotation.", href: "/resources/custom-squishy-toy-moq-cost-guide" },
      { title: "How to Prepare an OEM Brief", text: "Use a practical checklist for artwork, size, softness, quantity, packaging and market details.", href: "/resources/how-to-prepare-custom-squishy-toy-brief" },
      { title: "PU vs TPR vs Silicone", text: "Compare material routes by squeeze feel, recovery, appearance, surface behavior and packaging needs.", href: "/resources/pu-vs-tpr-vs-silicone-squishy-material-guide" },
      { title: "Sample Approval Checklist", text: "Approve dimensions, appearance, squeeze behavior, artwork and packaging against one production reference.", href: "/resources/custom-squishy-toy-sample-approval-checklist" },
      { title: "OEM / ODM Development Process", text: "See how a broader custom toy project moves from concept review to production coordination.", href: "/oem" },
    ]}
    faqs={[
{ question: "How long do sampling and bulk production take?", answer: "The workflow is customer artwork, 3D rendering, sampling and sample shipment for approval. Sampling takes 12–15 days; bulk production takes 25–30 days. Confirm the schedule for your order; sample delivery and freight transit are separate." },
{ question: "Do these images show actual products or design references?", answer: "This collection includes actual PU product photos and videos as well as design references. Individual product pages identify what is shown; toast concepts are design references rather than finished production samples. Your own project is confirmed through an approved physical sample." },
      { question: "Which custom PU squishy toys can you develop?", answer: "We review custom character figures, realistic food squishies, toast blind-box collections, ice-skate shapes and other buyer-defined designs. Appearance, dimensions, color, recovery speed, painted details and packaging can be specified for sample review." },
      { question: "Do you also offer custom TPR squeeze toys?", answer: "TPR customization is limited to existing molds, including square and other available shapes. Logo printing, colors, hand feel and packaging can be customized. We do not currently offer new custom TPR shapes." },
      { question: "Can you manufacture a squishy from our own design?", answer: "For PU, we can review sketches, reference images or 3D files for an original shape and sampling plan. TPR projects are limited to existing molds, with custom colors, logos, hand feel and packaging." },
      { question: "What is the MOQ for a custom squishy toy?", answer: "MOQ is 500 pieces per shape and 500 pieces per color. Specify the quantity per shape and per color in your quotation request." },
      { question: "Can we add our logo and retail packaging?", answer: "Yes. Logo application, artwork, labels and private-label packaging can be included in the development brief." },
      { question: "Do you support samples before mass production?", answer: "Yes. Sampling and approval are part of the OEM process before the approved reference moves into production." },
      { question: "What affects the price of a custom squishy toy?", answer: "Shape and mold complexity, dimensions, material feel, design count, printing, visual effects, packaging and order quantity all affect the production plan and quotation." },
      { question: "Can testing be arranged for our destination market?", answer: "Testing can be reviewed for the exact product, age grade and destination market. The required scope must be confirmed before production rather than assumed from a different product." },
    ]}
  />;
}
