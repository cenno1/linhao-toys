export type BuyerGuide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  updated: string;
  readTime: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }>;
  relatedLinks: Array<{ label: string; href: string }>;
};

export const buyerGuides: BuyerGuide[] = [
  {
    slug: "how-to-prepare-custom-squishy-toy-brief",
    title: "How to Prepare a Custom Squishy Toy Manufacturing Brief",
    description:
      "A practical checklist for sending shape, size, softness, artwork, quantity, packaging and market requirements to a squishy toy manufacturer.",
    eyebrow: "OEM BUYER GUIDE",
    updated: "2026-07-31",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start with the commercial goal",
        paragraphs: [
          "Explain where the product will be sold and who is expected to buy or use it. A retail impulse item, promotional giveaway, blind-box collectible and marketplace multipack may need different dimensions, packaging and assortment planning.",
          "Include the destination country and intended age grade at the beginning. These details affect labeling, testing discussions and the information a manufacturer needs before confirming production.",
        ],
      },
      {
        heading: "Define the product clearly",
        paragraphs: [
          "Send a drawing, character sheet, reference photo or simple annotated sketch. State which details are essential and which can be adjusted for manufacturing feasibility.",
        ],
        checklist: [
          "Target dimensions and acceptable tolerance",
          "Preferred softness and recovery behavior",
          "Solid, gradient, transparent or glitter appearance",
          "Face artwork, logo and printing positions",
          "Single design or mixed assortment",
          "Any scent, accessory or special surface requirement",
        ],
      },
      {
        heading: "Share quantity and packaging together",
        paragraphs: [
          "Quantity and packaging should be discussed at the same time because a retail box, blind bag, display tray or multipack can change the practical MOQ and production plan.",
          "If the final quantity is not fixed, provide a realistic range. Asking for quotations at two quantities can help a buyer understand which setup costs are sensitive to volume.",
        ],
      },
      {
        heading: "Confirm the sampling approval process",
        paragraphs: [
          "Before mass production, agree on what the sample is approving: dimensions, color, print placement, softness, packaging artwork and functional details. Keep the approved sample and written specification aligned.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Custom squishy toy manufacturing", href: "/custom-squishy-toy-manufacturer" },
      { label: "OEM / ODM development process", href: "/oem" },
      { label: "Request a project quotation", href: "/contact" },
    ],
  },
  {
    slug: "wholesale-squishy-toy-packaging-guide",
    title: "Wholesale Squishy Toy Packaging: A Buyer’s Planning Guide",
    description:
      "Compare common squishy toy packaging formats and learn which information buyers should confirm before requesting a wholesale quotation.",
    eyebrow: "WHOLESALE BUYER GUIDE",
    updated: "2026-07-31",
    readTime: "5 min read",
    sections: [
      {
        heading: "Choose packaging around the sales channel",
        paragraphs: [
          "Packaging should protect the product while matching how it will be displayed, shipped and purchased. A gift shop counter display has different needs from an Amazon multipack or promotional giveaway.",
        ],
        checklist: [
          "Individual bag with label or barcode",
          "Printed blind bag for collectible assortments",
          "Retail box for gifting and shelf presentation",
          "PDQ display tray for impulse retail",
          "Multipack or set packaging for online marketplaces",
        ],
      },
      {
        heading: "Plan artwork and product information early",
        paragraphs: [
          "Provide the logo, brand colors, barcode area, warning text and required language before packaging sampling. Confirm which party supplies final artwork and who checks market-specific labeling.",
          "Avoid approving a package based only on appearance. Dimensions, product fit, sealing method, carton quantity and shipping durability also need review.",
        ],
      },
      {
        heading: "Understand how packaging affects MOQ",
        paragraphs: [
          "A custom printed package may have a different minimum quantity from the toy itself. Buyers can ask whether a standard package with a custom label is available when testing a new product direction.",
        ],
      },
      {
        heading: "Prepare the quotation request",
        paragraphs: [
          "Send the selected product, quantity, number of designs, target market, preferred package and delivery country. Mention whether you need retail-ready units, master cartons or marketplace preparation.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse wholesale squishy toys", href: "/wholesale-squishy-toys" },
      { label: "View product samples", href: "/products" },
      { label: "Send packaging requirements", href: "/contact" },
    ],
  },
  {
    slug: "custom-plush-bag-charm-development-checklist",
    title: "Custom Plush Bag Charm Development Checklist",
    description:
      "Plan character artwork, size, fabric, embroidery, hardware, labeling and retail packaging for a custom plush bag charm project.",
    eyebrow: "PLUSH ACCESSORY GUIDE",
    updated: "2026-07-31",
    readTime: "6 min read",
    sections: [
      {
        heading: "Simplify artwork for a compact product",
        paragraphs: [
          "A bag charm is smaller than a standard plush toy, so very fine artwork may need to be simplified. Identify the character features that must remain recognizable and allow the manufacturer to propose construction-friendly adjustments.",
        ],
      },
      {
        heading: "Specify the construction",
        paragraphs: [
          "State the target height and whether that measurement includes ears, loops or hardware. Provide front, side and back references when the shape is not symmetrical.",
        ],
        checklist: [
          "Fabric texture and main colors",
          "Embroidered or printed facial details",
          "Stuffing level and intended softness",
          "Keyring, clip, chain, loop or strap",
          "Woven label or printed brand tag",
          "Single character or coordinated series",
        ],
      },
      {
        heading: "Review attachment hardware",
        paragraphs: [
          "Choose hardware based on the intended use, appearance and market. Confirm color, finish, dimensions and how the attachment connects to the plush body during sampling.",
        ],
      },
      {
        heading: "Coordinate packaging with the accessory",
        paragraphs: [
          "Common presentations include a branded card, bag, box or display set. Check that the product hangs correctly, the artwork remains visible and the package protects the plush and hardware during transport.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Custom plush bag charm manufacturing", href: "/custom-plush-bag-charms" },
      { label: "OEM product development", href: "/oem" },
      { label: "Discuss your character design", href: "/contact" },
    ],
  },
];

export function getBuyerGuide(slug: string) {
  return buyerGuides.find((guide) => guide.slug === slug);
}
