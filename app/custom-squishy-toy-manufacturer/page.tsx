import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Custom PU Squishy Toy Manufacturer | OEM & Private Label",
  description: "Custom PU squishy toys from your artwork: character figures, realistic food and blind-box designs. MOQ from 500 pieces. Selected TPR designs also available.",
  alternates: { canonical: "/custom-squishy-toy-manufacturer" },
  keywords: ["custom squishy toy manufacturer", "custom PU squishy toys", "OEM PU squishy manufacturer", "custom slow rising squishy toys", "custom TPR squeeze toys"],
  openGraph: {
    title: "Custom PU Squishy Toy Manufacturer | OEM & Private Label",
    description: "Custom PU shapes, recovery speeds, painted details and private-label packaging, plus selected TPR cube and smiley-face projects.",
    url: "/custom-squishy-toy-manufacturer",
    type: "website",
    images: [{ url: "/images/products/premium-custom-pu-character-figure.jpg", alt: "Custom squishy toy manufacturing and private-label product development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom PU Squishy Toy Manufacturer | OEM & Private Label",
    description: "Custom PU shapes, recovery speeds, painted details and private-label packaging, plus selected TPR cube and smiley-face projects.",
    images: ["/images/products/premium-custom-pu-character-figure.jpg"],
  },
};

export default function Page() {
  return <SeoLandingPage
    path="/custom-squishy-toy-manufacturer"
    eyebrow="CUSTOM PU SQUISHY TOY MANUFACTURER"
    title="Custom PU squishy toys made for your brand."
    introduction="Turn your artwork into custom PU squishy toys: detailed character figures, realistic food, toast blind-box collections and original shapes. Specify the appearance, size, colors, recovery speed, painted details and branded packaging. We also support selected TPR projects, including ice-cube shapes, smiley-face designs and squeeze toys with moving custom inserts."
    buyerNote="Custom PU projects typically start at 500 pieces. Send your design, dimensions, quantity and desired feel for a quotation. TPR minimum quantities and specifications are quoted separately by design; final details are confirmed through sample approval."
    productSlugs={["premium-custom-pu-character-figure","ultra-slow-rising-realistic-pu-food-squishy","custom-pu-toast-squishy-blind-box","custom-pu-ice-skate-squishy","custom-pu-fruit-animal-figures","custom-pu-high-rebound-ball","custom-tpr-squishy-brand-inserts","custom-tpr-popsicle-butter-cube-squishy"]}
    preserveProductOrder
    productEyebrow="PU CASES & DESIGN REFERENCES · SELECTED TPR OPTIONS"
    quoteLabel="Send Your Design for a Quote"
    lastReviewed="2026-09-26"
    serviceType="Custom PU squishy toy OEM manufacturing with selected TPR development"
    productHeading="Explore custom PU designs, then selected TPR options."
    productDescription="Start with PU character and realistic food samples, followed by toast and ice-skate design references. Explore TPR cubes and custom-insert toys below. Product pages distinguish actual samples from design references; approve a physical sample for your own project."
    capabilities={[
      { title: "Custom PU Shapes", text: "Develop character figures, food designs, toast collections and other original PU shapes from your artwork, with buyer-defined dimensions." },
      { title: "PU Feel & Recovery", text: "Specify soft slow-rise, extra-slow recovery or higher-rebound requirements. Confirm the finished feel and recovery speed against a physical sample." },
      { title: "Painted Details & Branding", text: "Plan facial features, food textures, color gradients, logos and painted details. Review finish quality and durability requirements during sample approval." },
      { title: "Selected TPR Designs", text: "Review original ice-cube and smiley-face shapes, or transparent squeeze toys containing custom branded blocks and other plastic inserts that move when squeezed." },
      { title: "Private-Label Packaging", text: "Coordinate branded blind boxes, individual bags, labels, retail boxes, display trays and shipping marks." },
      { title: "Export Coordination", text: "Review destination, age grade and documentation needs before confirming production." },
    ]}
    process={[
      { title: "Brief Review", text: "Review artwork, size, quantity, intended user, sales channel and destination market." },
      { title: "Feasibility & Quote", text: "Align the mold route, material feel, decoration, packaging and realistic quantity tiers." },
      { title: "Sample Approval", text: "Confirm shape, dimensions, color, print, squeeze feel and package artwork against the brief." },
      { title: "Production Control", text: "Use the approved sample and specification for production, inspection and export preparation." },
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
      { question: "Which custom PU squishy toys can you develop?", answer: "We review custom character figures, realistic food squishies, toast blind-box collections, ice-skate shapes and other buyer-defined designs. Appearance, dimensions, color, recovery speed, painted details and packaging can be specified for sample review." },
      { question: "Do you also offer custom TPR squeeze toys?", answer: "Yes. Selected TPR projects include original ice-cube shapes, smiley-face designs and transparent squeeze toys with moving custom branded blocks or other plastic inserts. Share the dimensions, intended feel, artwork and quantity for feasibility and pricing." },
      { question: "Can you manufacture a squishy from our own design?", answer: "Yes. We can review sketches, reference images or 3D files and propose a practical mold, sampling and production path." },
      { question: "What is the MOQ for a custom squishy toy?", answer: "Custom PU projects typically start at 500 pieces. TPR minimum quantities are quoted separately according to the shape, material setup, inserts, color effects and packaging. Confirm the final quantity against your specification." },
      { question: "Can we add our logo and retail packaging?", answer: "Yes. Logo application, artwork, labels and private-label packaging can be included in the development brief." },
      { question: "Do you support samples before mass production?", answer: "Yes. Sampling and approval are part of the OEM process before the approved reference moves into production." },
      { question: "What affects the price of a custom squishy toy?", answer: "Shape and mold complexity, dimensions, material feel, design count, printing, visual effects, packaging and order quantity all affect the production plan and quotation." },
      { question: "Can testing be arranged for our destination market?", answer: "Testing can be reviewed for the exact product, age grade and destination market. The required scope must be confirmed before production rather than assumed from a different product." },
    ]}
  />;
}
