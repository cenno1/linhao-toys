export type CaseStudy = {
  slug: string;
  title: string;
  clientType: string;
  market: string;
  productSlug: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "amazon-glitter-bao-bun",
    title: "Amazon FBA Glitter Bao Bun Launch",
    clientType: "Amazon FBA seller",
    market: "United States",
    productSlug: "glitter-bao-bun",
    image: "/images/products/glitter-bao-bun/oem-case.png",
    summary:
      "Private-label glitter bao bun squishy developed for an Amazon FBA launch with custom face artwork, barcode label and retail polybag.",
    challenge:
      "The buyer needed a trend-led food-shape squishy with strong unboxing appeal, fast sampling and FBA-ready packaging within a tight listing window.",
    solution:
      "LINHAO adapted an existing steamer-bun structure, revised glitter fill and facial expression, then packaged the SKU with custom hangtag and UPC label for FBA inbound.",
    results: [
      "Sample approved in 5 days",
      "MOQ 100 pcs first production run",
      "Custom packaging and barcode labeling included",
      "Repeat order opened for colorway expansion",
    ],
  },
  {
    slug: "retail-glitter-basket-program",
    title: "Retail Chain Glitter Basket Color Program",
    clientType: "Retail importer",
    market: "Europe",
    productSlug: "glitter-basket-blue",
    image: "/images/products/glitter-basket-blue/oem-case.png",
    summary:
      "Repeat-order glitter basket squishy program with blue hero SKU and planned color-series rollout for impulse retail.",
    challenge:
      "The buyer wanted a proven export shape with stable recovery, shelf-ready packaging and the option to scale into additional colorways after the first container.",
    solution:
      "LINHAO supplied the blue basket reference sample, PDQ packaging mockup and production specification used for recurring wholesale replenishment.",
    results: [
      "Export repeat SKU with documented QC reference",
      "PDQ and inner-pack options prepared",
      "Color-series roadmap for follow-on orders",
      "EN71 documentation coordinated for EU market",
    ],
  },
  {
    slug: "promo-butter-stick-collection",
    title: "Promotional Butter Stick Collection",
    clientType: "Promotional distributor",
    market: "North America",
    productSlug: "butter-stick",
    image: "/images/products/butter-stick/oem-case.png",
    summary:
      "Viral butter-stick squishy adapted for a promotional gift program with branded sleeve packaging and mixed color fill.",
    challenge:
      "The distributor needed a visually strong trend product that could carry a logo, ship in branded sleeves and stay cost-efficient at mid-volume MOQ.",
    solution:
      "LINHAO customized color fill, face print and sleeve packaging while keeping the approved long-format recovery from the reference sample.",
    results: [
      "Branded sleeve packaging approved in sampling",
      "100 pcs MOQ supported for pilot campaign",
      "Logo pad print matched to approved artwork",
      "Subsequent reorder for trade-show giveaway program",
    ],
  },
  {
    slug: "blind-box-mini-animal-mix",
    title: "Blind Box Mini Animal Mix for Wholesale",
    clientType: "Wholesale / vending buyer",
    market: "Global",
    productSlug: "mini-animal-mix",
    image: "/images/products/mini-animal-mix/oem-case.png",
    summary:
      "20+ mini animal squishy assortment packaged for blind-bag and party-pack wholesale programs.",
    challenge:
      "The buyer needed a mixed mini assortment, consistent bagging workflow and a checklist insert to support blind collectibles merchandising.",
    solution:
      "LINHAO built the assortment mix, bagging specification and display outer carton plan around the mini animal hero set.",
    results: [
      "Assortment mix and bag artwork confirmed in sampling",
      "Blind-bag format ready for party-pack channels",
      "Display carton specification for wholesale buyers",
      "Guide content published for MOQ and packaging planning",
    ],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
