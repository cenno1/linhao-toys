export type GuideSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readMinutes: number;
  keywords: string[];
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "custom-squishy-oem-process",
    title: "Custom Squishy OEM Process & Timeline",
    description:
      "Step-by-step OEM squishy development from brief to sample approval and mass production at LINHAO Toys.",
    publishedAt: "2026-07-29",
    readMinutes: 6,
    keywords: [
      "custom squishy OEM process",
      "squishy sampling timeline",
      "China squishy manufacturer",
    ],
    sections: [
      {
        type: "p",
        text: "A custom squishy OEM project at LINHAO Toys follows a structured path: brief review, mold planning, sampling, revision, packaging approval and mass production. Standard MOQ starts at 100 pieces and sample turnaround is typically 3–7 days after specifications are confirmed.",
      },
      { type: "h2", text: "Stage 1 — Project brief" },
      {
        type: "p",
        text: "Send your reference image, target size, quantity, destination market and packaging idea. Our team confirms feasibility, material direction and whether a new mold or adapted shape is required.",
      },
      {
        type: "ul",
        items: [
          "Reference photo, sketch or competitor sample",
          "Target retail price band and order quantity",
          "US, EU or other market compliance needs",
          "Packaging format: bag, box, blind pack or gift set",
        ],
      },
      { type: "h2", text: "Stage 2 — Sampling" },
      {
        type: "p",
        text: "Approved structures move into sampling. Simple glitter or food-shape squishies often sample in 3–7 days. Multi-part shapes, new molds or special finishes may need longer development.",
      },
      { type: "h2", text: "Stage 3 — Revision & approval" },
      {
        type: "p",
        text: "Buyers review hand-feel, color, face artwork, recovery speed and packaging mockups. The approved sample becomes the production reference for bulk orders.",
      },
      { type: "h2", text: "Stage 4 — Mass production" },
      {
        type: "p",
        text: "After sample sign-off, bulk production typically starts within 25–35 days depending on order size and material lead time.",
      },
      {
        type: "table",
        headers: ["Stage", "Typical timeline", "Buyer action"],
        rows: [
          ["Brief review", "1–2 days", "Send reference + quantity + market"],
          ["Sampling", "3–7 days", "Confirm artwork and specs"],
          ["Revision", "2–5 days", "Approve color, face and packaging"],
          ["Mass production", "25–35 days", "Confirm PO and shipping terms"],
        ],
      },
    ],
  },
  {
    slug: "moq-guide-amazon-sellers",
    title: "MOQ Guide for Amazon Sellers & Wholesale Buyers",
    description:
      "How MOQ works for custom squishy toys, blind-box mixes and Amazon FBA launch quantities at LINHAO Toys.",
    publishedAt: "2026-07-29",
    readMinutes: 5,
    keywords: [
      "squishy MOQ",
      "Amazon FBA toy MOQ",
      "wholesale squishy minimum order",
    ],
    sections: [
      {
        type: "p",
        text: "LINHAO Toys typically starts OEM squishy production at 100 pieces per SKU. MOQ is not fixed for every project — it depends on whether a new mold, special material, pad printing or custom packaging is required.",
      },
      { type: "h2", text: "What affects MOQ?" },
      {
        type: "ul",
        items: [
          "New mold vs. adapted existing shape",
          "Number of colors, glitter fills or printed faces",
          "Retail box, blister card or blind-bag packaging",
          "Assortment mixes for vending or party packs",
          "Certification and labeling requirements",
        ],
      },
      { type: "h2", text: "MOQ by project type" },
      {
        type: "table",
        headers: ["Project type", "Typical starting MOQ", "Notes"],
        rows: [
          ["Single-shape glitter squishy", "100 pcs", "Best for FBA test launches"],
          ["Color series (same mold)", "100 pcs per color", "Efficient for retail sets"],
          ["Mini mix / blind bag", "500–1,000 sets", "Assortment and bagging drive MOQ"],
          ["Plush or bag charm OEM", "100–300 pcs", "Depends on embroidery and hardware"],
          ["Full gift set", "300+ sets", "Multiple components increase setup"],
        ],
      },
      { type: "h2", text: "Launch advice for Amazon sellers" },
      {
        type: "p",
        text: "Most Amazon sellers start with one hero SKU, confirm reviews and repeat purchase rate, then expand into colorways or companion shapes. Sampling first reduces risk before committing to a larger FBA inbound quantity.",
      },
    ],
  },
  {
    slug: "en71-astm-cpc-squeeze-toys",
    title: "EN71, ASTM F963-23 & CPC for Squeeze Toys",
    description:
      "A buyer guide to common squishy toy safety documentation for EU and US import programs.",
    publishedAt: "2026-07-29",
    readMinutes: 7,
    keywords: [
      "EN71 squeeze toy",
      "ASTM F963 squishy",
      "CPC squishy toy compliance",
    ],
    sections: [
      {
        type: "p",
        text: "Squishy and squeeze toys sold in the EU and US generally require age-appropriate safety testing. Requirements vary by material, small parts, packaging and whether the item is marketed to children under 3.",
      },
      { type: "h2", text: "EN71 (European Union)" },
      {
        type: "p",
        text: "EN71 covers mechanical, physical, chemical and flammability requirements for toys sold in the EU. Squeeze toys are typically evaluated for small parts, tension, material migration and labeling.",
      },
      { type: "h2", text: "ASTM F963-23 (United States)" },
      {
        type: "p",
        text: "ASTM F963 is the US consumer safety specification for toys. Importers often request testing on the exact SKU, material batch and production run before retail launch.",
      },
      { type: "h2", text: "CPC (Children's Product Certificate)" },
      {
        type: "p",
        text: "For children's products sold in the US, a CPC links the finished product to the applicable test report. The importer or US responsible party must ensure the certificate matches the imported SKU.",
      },
      {
        type: "table",
        headers: ["Document", "Market", "What buyers ask for"],
        rows: [
          ["EN71 test report", "EU / UK", "Material + physical tests for squeeze toys"],
          ["ASTM F963-23 report", "United States", "Safety testing on production sample"],
          ["CPC", "United States", "Certificate tied to tested SKU"],
          ["Label artwork review", "All markets", "Age grade, warnings, traceability"],
        ],
      },
      {
        type: "p",
        text: "LINHAO Toys provides EN71 documentation for documented squeeze-toy programs and can coordinate additional testing by product and destination market. Final compliance responsibility remains with the buyer and destination regulations.",
      },
    ],
  },
  {
    slug: "blind-box-squishy-packaging",
    title: "Blind Box & Mini Squishy Packaging for Wholesale",
    description:
      "How to structure blind-bag squishy mixes, inner packs and retail-ready packaging for Amazon and gift channels.",
    publishedAt: "2026-07-29",
    readMinutes: 5,
    keywords: [
      "blind box squishy packaging",
      "mini squishy assortment wholesale",
      "blind bag toy OEM",
    ],
    sections: [
      {
        type: "p",
        text: "Mini squishy mixes are popular for blind bags, party favors, vending and checkout impulse displays. Packaging structure strongly affects MOQ, unit cost and retail presentation.",
      },
      { type: "h2", text: "Common packaging formats" },
      {
        type: "ul",
        items: [
          "OPP bag with header card",
          "Blind foil bag with assortment code",
          "PDQ counter display with mixed SKUs",
          "Tube or capsule vending format",
          "Gift box set with themed insert tray",
        ],
      },
      { type: "h2", text: "What to define in your brief" },
      {
        type: "table",
        headers: ["Decision", "Example", "Why it matters"],
        rows: [
          ["Units per bag", "1 pc or 3 pc mix", "Affects bag size and cost"],
          ["Assortment ratio", "12 designs × equal qty", "Controls production planning"],
          ["Barcode", "Retail UPC or Amazon FNSKU", "Needed before mass packing"],
          ["Insert card", "Character checklist", "Drives repeat purchase in blind collectibles"],
        ],
      },
      {
        type: "p",
        text: "LINHAO's mini animal squishy mix is a common starting point for blind-box programs. Buyers can customize the design mix, bag artwork and display outer carton for wholesale or Amazon launch.",
      },
    ],
  },
  {
    slug: "how-to-brief-china-toy-factory",
    title: "How to Brief a China Toy Factory for OEM Projects",
    description:
      "A practical checklist for sending a squishy or plush OEM inquiry that gets accurate quotes and faster sampling.",
    publishedAt: "2026-07-29",
    readMinutes: 4,
    keywords: [
      "China toy factory brief",
      "OEM toy inquiry template",
      "squishy factory quotation",
    ],
    sections: [
      {
        type: "p",
        text: "Clear factory briefs reduce revision cycles and help suppliers quote MOQ, sampling time and packaging options accurately. Include visual references, commercial targets and market requirements in the first email.",
      },
      { type: "h2", text: "Minimum information to send" },
      {
        type: "ul",
        items: [
          "Product reference image or link",
          "Approximate size (cm/in) and target hand-feel",
          "Estimated first order quantity",
          "Destination market: US, EU, UK, AU, etc.",
          "Packaging type and branding needs",
          "Target ex-factory or landed cost band",
          "Required test reports or labels",
        ],
      },
      { type: "h2", text: "Helpful extras" },
      {
        type: "ul",
        items: [
          "Competitor SKU or price benchmark",
          "Launch deadline or seasonal window",
          "Planned sales channel: Amazon, retail, promotional",
          "Planned colorways or future collection roadmap",
        ],
      },
      {
        type: "p",
        text: "Send inquiries to sales@lh-industrial.com with subject line 'New OEM Project'. Attach images when possible and note whether you need sampling only or full production pricing.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
