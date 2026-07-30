import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Custom Squishy Toy Manufacturer | OEM & ODM",
  description: "Custom squishy toy manufacturing for brands, retailers and importers. Develop shapes, softness, colors, printing and private-label packaging.",
  alternates: { canonical: "/custom-squishy-toy-manufacturer" },
};

export default function Page() {
  return <SeoLandingPage
    path="/custom-squishy-toy-manufacturer"
    eyebrow="CUSTOM SQUISHY MANUFACTURER"
    title="Custom squishy toy manufacturing for private-label product lines."
    introduction="LINHAO Toys supports OEM and ODM squishy projects from concept review and mold development through sampling, printing, packaging and mass-production coordination."
    buyerNote="Suitable for brand owners, retail buyers, promotional distributors and Amazon sellers. Final MOQ, lead time and testing depend on the approved specification and destination market."
    initialFilter="squishy"
    productHeading="Custom squishy formats ready for your design direction."
    productDescription="Explore food, glitter, mini, seasonal and sensory directions that can be adapted for an OEM or private-label program."
    capabilities={[
      { title: "Shape & Mold", text: "Develop an original shape from sketches, references or an existing character direction." },
      { title: "Softness & Recovery", text: "Align material feel and recovery speed with the intended sensory and retail experience." },
      { title: "Color & Surface", text: "Specify colors, gradients, glitter effects, printed faces and branded details." },
      { title: "Size & Assortment", text: "Plan single SKUs, color series, mini assortments, blind bags or seasonal collections." },
      { title: "Private-Label Packaging", text: "Coordinate labels, polybags, retail boxes, display trays and shipping marks." },
      { title: "Export Coordination", text: "Review destination, age grade and documentation needs before confirming production." },
    ]}
    faqs={[
      { question: "Can you manufacture a squishy from our own design?", answer: "Yes. We can review sketches, reference images or 3D files and propose a practical mold, sampling and production path." },
      { question: "What is the MOQ for a custom squishy toy?", answer: "MOQ varies with mold complexity, material, printing and packaging. A firm quantity is quoted after the specification is reviewed." },
      { question: "Can we add our logo and retail packaging?", answer: "Yes. Logo application, artwork, labels and private-label packaging can be included in the development brief." },
      { question: "Do you support samples before mass production?", answer: "Yes. Sampling and approval are part of the OEM process before the approved reference moves into production." },
    ]}
  />;
}
