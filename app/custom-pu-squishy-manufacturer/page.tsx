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
      introduction="LINHAO Toys supports custom PU squishy projects from buyer artwork and shape review through sample approval, surface decoration, assortment planning and private-label packaging. The approved sample defines the finished appearance, squeeze feel and recovery behavior for production."
      buyerNote="A typical custom PU project starts at 500 pieces. The current mold fee is US$680. The sample fee is US$360 with a 20-day sampling time, and the sample fee can be credited against the bulk order. Bulk-production timing, testing scope and final cost are confirmed for the exact specification."
      productSlugs={[
        "custom-pu-fruit-animal-figures",
        "pu-slow-rise-animal-keychain",
        "bakery-slow-rise-squishy-assortment",
        "christmas-pu-squishy-toy-assortment",
        "sesame-braided-bread-pu-squishy",
        "dessert-cake-pu-squishy-keychain-assortment",
      ]}
      lastReviewed="2026-09-02"
      serviceType="Custom PU slow-rising squishy OEM and private-label manufacturing"
      productHeading="PU squishy directions for custom shapes and retail collections."
      productDescription="Review original fruit and animal figures, slow-rise keychains, bakery assortments, seasonal designs and food shapes as references for a buyer-defined program."
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
        {
          title: "Review the Brief",
          text: "Confirm artwork, finished dimensions, quantity, target market, intended age grade, packaging and required receive date.",
        },
        {
          title: "Develop the Sample",
          text: "Align shape feasibility, PU feel, recovery, colors, decoration and packaging. The current sample fee is US$360 and the stated sampling time is 20 days; the sample fee can be credited against the bulk order.",
        },
        {
          title: "Approve the Reference",
          text: "Record dimensions, appearance, squeeze behavior, artwork and packaging against one approved sample and specification.",
        },
        {
          title: "Confirm Production",
          text: "Finalize production, inspection, packing and shipping terms only after the approved specification and quotation are accepted.",
        },
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
          answer: "The current typical MOQ starts at 500 pieces and the mold fee is US$680. The final quotation is confirmed against the shape, dimensions, design count, decoration and packaging specification.",
        },
        {
          question: "What is the sample fee and sampling time?",
          answer: "The current sample fee is US$360 and the stated sampling time is 20 days. The sample fee can be credited against the bulk order. Bulk-production timing is confirmed separately after the approved specification and order details are reviewed.",
        },
        {
          question: "Which testing documents can be arranged?",
          answer: "For the exact custom PU product and intended market, documentation can be arranged against ASTM F963 and CPSIA with CPC for the United States, and EN 71 for relevant European-market projects. The required scope is confirmed for the final product and age grade.",
        },
      ]}
    />
  );
}
