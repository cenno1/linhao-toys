import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Custom Plush Bag Charms Manufacturer | OEM",
  description: "Custom plush bag charm and plush keychain manufacturing for accessory brands, retailers and gift programs. OEM characters, colors, hardware and packaging.",
  alternates: { canonical: "/custom-plush-bag-charms" },
};

export default function Page() {
  return <SeoLandingPage
    path="/custom-plush-bag-charms"
    eyebrow="CUSTOM PLUSH BAG CHARMS"
    title="Custom plush bag charms and keychains for branded accessory collections."
    introduction="Turn character, flower, mascot and gift concepts into compact plush accessories with coordinated colors, attachment hardware, labels and retail packaging."
    buyerNote="Ideal for accessory brands, gift shops, promotional programs, collectible ranges and online sellers. Feasibility and MOQ depend on construction and materials."
    initialFilter="bag-charms"
    productHeading="Plush accessory directions for OEM programs."
    productDescription="Use an existing sample as inspiration or share your own character and packaging brief for review."
    capabilities={[
      { title: "Character & Shape", text: "Develop mascots, flowers, animals and simplified branded forms for compact plush construction." },
      { title: "Fabric & Color", text: "Coordinate pile, texture, embroidery and color options around the approved design." },
      { title: "Attachment Hardware", text: "Review key rings, clips, loops and other attachment choices for the intended use." },
      { title: "Brand Details", text: "Add woven labels, printed labels, embroidery and approved logo applications." },
      { title: "Retail Presentation", text: "Coordinate hang cards, bags, boxes, display sets and barcode placement." },
      { title: "Collection Planning", text: "Create colorways or character families for collectible and seasonal launches." },
    ]}
    faqs={[
      { question: "Can you make a plush bag charm from our character?", answer: "Yes. Send character artwork, target size and reference details so construction and sampling can be assessed." },
      { question: "Can we choose the clip or keyring?", answer: "Attachment hardware can be reviewed and selected according to the product design and intended market." },
      { question: "Can you add custom labels and packaging?", answer: "Yes. Woven or printed labels and private-label retail packaging can be included in the project." },
      { question: "Do you make a series with several designs?", answer: "Yes. Coordinated character or color series can be planned, subject to the final quantity and construction requirements." },
    ]}
  />;
}
