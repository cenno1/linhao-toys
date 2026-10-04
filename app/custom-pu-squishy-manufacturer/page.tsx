import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { localizedAlternates } from "@/lib/localized-catalog";

export const metadata: Metadata = {
  title: "Custom PU Squishy Manufacturer | Slow-Rising OEM",
  description:
    "Custom PU squishy manufacturing with MOQ from 500 pieces, buyer-defined shapes, slow-rise sample approval and private-label packaging.",
  alternates: {
    canonical: "/custom-pu-squishy-manufacturer",
    languages: localizedAlternates("customPu"),
  },
  keywords: [
    "custom PU squishy manufacturer",
    "slow rising PU squishy",
    "custom shape squishy",
    "private label squishy packaging",
    "OEM PU squishy toys",
  ],
  openGraph: {
    title: "Custom PU Squishy Manufacturer | Slow-Rising OEM",
    description:
      "Plan a custom PU squishy from shape and slow-rise feel through artwork, sample approval and private-label packaging.",
    url: "/custom-pu-squishy-manufacturer",
    type: "website",
    images: [
      {
        url: "/images/products/custom-pu-fruit-animal-figures/hero.png",
        alt: "Custom PU slow-rise fruit and animal squishy figures developed from buyer artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom PU Squishy Manufacturer | Slow-Rising OEM",
    description:
      "Custom PU squishy development for original shapes, slow-rise recovery and private-label packaging.",
    images: ["/images/products/custom-pu-fruit-animal-figures/hero.png"],
  },
};

export default function Page() {
  return (
    <SeoLandingPage
      path="/custom-pu-squishy-manufacturer"
      eyebrow="CUSTOM PU SQUISHY MANUFACTURER"
      title="Custom PU squishy manufacturing for slow-rise, original-shape programs."
      introduction="LINHAO manufactures custom PU squishy toys from your artwork, including character figures, realistic food, animal forms and other original shapes. Customize dimensions, colors, hardness or softness, scent, printed or painted details and packaging. TPR customization is limited to existing molds and supports logo printing, colors, hand feel and custom packaging."
      buyerNote="MOQ is 500 pieces per shape and 500 pieces per color. The workflow is customer artwork, 3D rendering, sampling and sample shipment for approval. Sampling takes 12–15 days; bulk production takes 25–30 days. Confirm the schedule for your order; sample delivery and freight transit are separate."
      productSlugs={["premium-custom-pu-character-figure","ultra-slow-rising-realistic-pu-food-squishy","custom-pu-toast-squishy-blind-box","custom-pu-ice-skate-squishy","custom-pu-fruit-animal-figures","custom-pu-high-rebound-ball"]}
      preserveProductOrder
      productEyebrow="ACTUAL CUSTOMIZATION CASES"
      quoteLabel="Send Your Design for a Quote"
      lastReviewed="2026-10-04"
      serviceType="Custom PU slow-rising squishy OEM and private-label manufacturing"
      productHeading="PU squishy directions for custom shapes and retail collections."
      productDescription="Explore actual PU customization cases, including characters, realistic food, toast, ice-skate and animal shapes. These cases demonstrate our manufacturing work; your design is confirmed by 3D rendering and physical sample approval."
      capabilities={[
        {
          title: "Custom Shape & Size",
          text: "Review sketches, character artwork, 3D files or reference products for a practical PU shape, dimensions and mold route.",
        },
        {
          title: "Slow-Rise Hand Feel",
          text: "Define softness and recovery with an approved physical sample and a repeatable comparison method instead of relying on a marketing phrase alone.",
        },
        {
          title: "Color & Decoration",
          text: "Plan base colors, gradients, faces, logos, printed details and surface effects around the approved design.",
        },
        {
          title: "Scent Direction",
          text: "State whether the product should be scented or unscented so odor, ventilation, packing and destination-market requirements can be reviewed.",
        },
        {
          title: "Private-Label Packaging",
          text: "Coordinate individual bags, branded boxes, hangtags, inserts, barcode labels, display trays and export cartons for the exact product.",
        },
        {
          title: "U.S. & European Testing",
          text: "For the exact product and destination, documentation can be arranged against ASTM F963 and CPSIA with CPC for the U.S., and EN 71 for relevant European-market projects.",
        },
      ]}
      process={[
{ title: "Artwork & 3D Rendering", text: "Send your design artwork. We prepare a 3D rendering to review the appearance before sampling. TPR projects use existing molds." },
{ title: "Sampling: 12–15 Days", text: "Develop the physical sample to check dimensions, colors, hardness or softness, scent for PU, logo and packaging." },
{ title: "Ship & Approve Samples", text: "We ship the sample for your review. Approve the appearance, hand feel and finish before proceeding to bulk production; delivery time is separate." },
{ title: "Bulk Production: 25–30 Days", text: "Produce against the approved sample and order specification. Confirm the order schedule and freight transit separately." },
]}
      buyerChecklist={[
        "Sketch, character sheet, 3D file or annotated reference images",
        "Finished dimensions and any thin or vulnerable shape features",
        "Target squeeze feel and slow-rise recovery reference or video",
        "Colors, face artwork, logo, print and scent direction if required",
        "Total quantity and quantity per design, colorway or assortment",
        "Individual packaging, display, barcode and label requirements",
        "Destination market, intended age grade and required receive date",
        "Any product-specific testing or documentation requested by your buyer",
      ]}
      relatedPages={[
        {
          title: "Real Custom PU Cases",
          text: "See actual character, robot and strawberry designs with customizable appearance and recovery speed. MOQ from 500 pieces.",
          href: "/custom-pu-squishy-case-studies",
        },
        {
          title: "Custom Squishy Manufacturing",
          text: "Compare the broader OEM route for PU, TPR and other sensory squishy programs.",
          href: "/custom-squishy-toy-manufacturer",
        },
        {
          title: "Slow-Rising Squishy Wholesale",
          text: "Plan recovery targets, assortments, artwork and packaging for slow-rise collections.",
          href: "/slow-rising-squishy-wholesale",
        },
        {
          title: "PU vs TPR vs Silicone",
          text: "Compare material routes by hand feel, recovery, appearance and packaging behavior.",
          href: "/resources/pu-vs-tpr-vs-silicone-squishy-material-guide",
        },
        {
          title: "Recovery-Time Specification",
          text: "Define a repeatable slow-rise reference for sample and production approval.",
          href: "/resources/slow-rising-squishy-recovery-time-specification-guide",
        },
        {
          title: "Sample Approval Checklist",
          text: "Check dimensions, appearance, recovery, artwork and packaging before production.",
          href: "/resources/custom-squishy-toy-sample-approval-checklist",
        },
        {
          title: "Packaging Guide",
          text: "Compare individual packaging, retail displays, labels and export protection.",
          href: "/resources/wholesale-squishy-toy-packaging-guide",
        },
      ]}
      faqs={[
{ question: "How long do sampling and bulk production take?", answer: "The workflow is customer artwork, 3D rendering, sampling and sample shipment for approval. Sampling takes 12–15 days; bulk production takes 25–30 days. Confirm the schedule for your order; sample delivery and freight transit are separate." },
{ question: "Are these actual customization cases?", answer: "Yes. The products presented here are actual customization cases supplied by LINHAO. Your own project is developed from your requirements and approved physical sample." },
        {
          question: "What do you need to quote a custom PU squishy?",
          answer: "Send the design or reference, finished dimensions, target squeeze and recovery feel, quantity per design, decoration, packaging, destination market and required receive date. A comparable quotation depends on one confirmed specification.",
        },
        {
          question: "Can a PU squishy be made in our own shape?",
          answer: "Original shapes can be reviewed from artwork, reference images or 3D files. Feasibility depends on geometry, dimensions, mold construction, vulnerable features and the required decoration.",
        },
        {
          question: "Is every PU squishy slow-rising?",
          answer: "No. Recovery behavior varies with the foam setup, shape, size, wall thickness, temperature and test method. Approve a physical reference and define how the result will be checked.",
        },
        {
          question: "Can private-label packaging be included?",
          answer: "Private-label packaging can be planned with the product. Options may include bags, boxes, hangtags, inserts, barcode labels, display trays and export cartons, subject to the final specification and quantity.",
        },
        {
          question: "What is the MOQ and mold fee for a custom PU squishy?",
          answer: "MOQ is 500 pieces per shape and 500 pieces per color. Mold and sample fees are confirmed in the quotation for your specification.",
        },
        {
          question: "What is the sample fee and sampling time?",
          answer: "The workflow is customer artwork, 3D rendering, sampling and sample shipment for approval. Sampling takes 12–15 days; bulk production takes 25–30 days. Confirm the schedule for your order; sample delivery and freight transit are separate. Sample fees are confirmed in the quotation.",
        },
        {
          question: "Which testing documents can be arranged?",
          answer: "For the exact custom PU product and intended market, documentation can be arranged against ASTM F963 and CPSIA with CPC for the United States, and EN 71 for relevant European-market projects. The required scope is confirmed for the final product and age grade.",
        },
      ]}
    />
  );
}
