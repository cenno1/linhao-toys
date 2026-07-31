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
    slug: "custom-squishy-toy-moq-cost-guide",
    title: "Custom Squishy Toy MOQ and Cost Drivers: A Buyer’s Guide",
    description:
      "Understand how mold setup, design count, material effects, printing, packaging and order quantity influence a custom squishy toy quotation.",
    eyebrow: "QUOTATION PLANNING",
    updated: "2026-07-31",
    readTime: "7 min read",
    sections: [
      {
        heading: "MOQ is a production-planning result",
        paragraphs: [
          "A useful MOQ is not determined by one number alone. The practical minimum depends on the mold or tooling plan, number of designs, compound and finish, printing steps, individual packaging and how efficiently the order can move through production.",
          "A standard product with a custom label can usually be planned differently from a completely new shape with several colors and a printed retail box. Buyers should therefore compare quotations with the same specification rather than comparing MOQ in isolation.",
        ],
      },
      {
        heading: "Separate one-time development from unit cost",
        paragraphs: [
          "Ask the quotation to distinguish development or mold costs from the bulk unit price when applicable. This makes it easier to understand which costs may not repeat on a reorder using the same approved design.",
        ],
        checklist: [
          "New shape, mold or structural development",
          "Artwork preparation and sample revisions",
          "Color, glitter, transparency or special surface effects",
          "Number of print positions and colors",
          "Individual packaging and printed inserts",
          "Testing requested for the product and destination market",
        ],
      },
      {
        heading: "Design count changes the production plan",
        paragraphs: [
          "A 3,000-piece order split across one design is not the same production plan as 3,000 pieces split across six designs. Each color change, face artwork, package or assortment can add setup and inspection work.",
          "For a collection, state both total quantity and quantity per design. If you are flexible, ask the manufacturer to propose a practical assortment that reduces unnecessary setup.",
        ],
      },
      {
        heading: "Packaging can have its own minimum",
        paragraphs: [
          "Custom printed bags, boxes and display trays may have supplier minimums that differ from the toy. A standard bag or box with a branded label or insert may be a more practical launch option for a smaller market test.",
        ],
      },
      {
        heading: "Request comparable quotation tiers",
        paragraphs: [
          "Provide one confirmed specification and ask for two or three realistic quantity tiers. Include the destination country and clarify whether freight, testing, retail preparation or marketplace labeling should be quoted separately.",
        ],
        checklist: [
          "Product drawing or reference and target dimensions",
          "Quantity per design and total quantity",
          "Material feel, recovery and visual effects",
          "Logo, printing and artwork requirements",
          "Packaging format and barcode requirements",
          "Destination market and requested delivery timing",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prepare a custom squishy manufacturing brief", href: "/resources/how-to-prepare-custom-squishy-toy-brief" },
      { label: "Compare real product directions", href: "/products" },
      { label: "Request quantity-based quotation options", href: "/contact" },
    ],
  },
  {
    slug: "en71-astm-f963-cpc-toy-compliance-guide",
    title: "EN71, ASTM F963 and CPC: A Practical Toy Buyer Guide",
    description:
      "A sourcing-oriented explanation of EN71, ASTM F963 and Children’s Product Certificates, including what buyers should confirm for each product and market.",
    eyebrow: "COMPLIANCE PLANNING",
    updated: "2026-07-31",
    readTime: "8 min read",
    sections: [
      {
        heading: "Start with the product and destination market",
        paragraphs: [
          "Testing and documentation should be planned for the actual product, intended age group, materials, functions and country of sale. A report for one squishy construction or color formulation should not automatically be treated as coverage for every future design.",
          "Give the supplier the destination market and intended age grade before sampling is finalized. Special functions, small components, coatings, scent, batteries, magnets or accessories can change which requirements need review.",
        ],
      },
      {
        heading: "What EN71 means in an EU sourcing discussion",
        paragraphs: [
          "EN71 is a series of European toy safety standards used in the EU toy safety framework. Relevant parts depend on the product and can address areas such as mechanical and physical properties, flammability and migration of certain elements.",
          "A buyer should check the exact product identification, tested materials, applicable standard parts, report date and whether the report matches the product being ordered. EU requirements can change, so final market access decisions should be checked against current official guidance.",
        ],
      },
      {
        heading: "ASTM F963 and the US toy framework",
        paragraphs: [
          "For US children’s toys, CPSC guidance explains that 16 CFR part 1250 incorporates ASTM F963. The applicable sections and testing depend on the toy. CPSC guidance also states that toys manufactured after April 20, 2024 must meet ASTM F963-23.",
          "Do not ask only whether a factory has an ASTM report. Confirm which product, age grading, materials, colors and ASTM sections the report covers, and whether additional US requirements apply.",
        ],
      },
      {
        heading: "A CPC is a certificate, not a laboratory report",
        paragraphs: [
          "The US Consumer Product Safety Commission describes a Children’s Product Certificate as the written certificate in which the manufacturer or importer certifies that a children’s product complies with applicable children’s product safety rules.",
          "The CPC should identify the covered product and applicable rules and be supported by the required testing or other permitted basis. Buyers and importers should determine who is responsible for issuing and maintaining the certificate for the specific shipment and product.",
        ],
      },
      {
        heading: "Build a product-specific document file",
        paragraphs: [
          "Keep the approved specification, bill of materials or material description, color and artwork references, age grade, test reports, certificate, production identification and packaging files connected to the same product version.",
        ],
        checklist: [
          "Exact product name, model or SKU on each document",
          "Product photos and tested color or material variants",
          "Applicable standard version and tested sections",
          "Laboratory identity and report issue date",
          "Manufacturer or importer details where required",
          "Batch, production date or traceability information",
        ],
      },
      {
        heading: "Use official guidance for final decisions",
        paragraphs: [
          "This guide is general sourcing information, not legal or regulatory advice. Buyers remain responsible for confirming the rules that apply to their product and market with qualified compliance professionals and current regulator guidance.",
        ],
      },
    ],
    relatedLinks: [
      { label: "View LINHAO’s available compliance documents", href: "/#compliance" },
      { label: "US CPSC toy safety guidance", href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety" },
      { label: "European Commission toy safety legislation", href: "https://single-market-economy.ec.europa.eu/sectors/toys/toy-safety/legislation_en" },
    ],
  },
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
