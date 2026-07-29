import { INQUIRY_EMAIL } from "./product-utils";

export const COMPANY_FACTS = {
  name: "LINHAO Toys",
  legalName: "LINHAO Industrial Co., Ltd.",
  siteUrl: "https://linhaotoys.com",
  email: INQUIRY_EMAIL,
  location: "Guangdong, China",
  founded: "2015",
  exportMarkets: "30+",
  customProjects: "500+",
  standardMoq: 100,
  sampleLeadDays: "3–7",
  massProductionLeadWeeks: "25–35",
  categories: [
    "Glitter squishy toys",
    "Food-shape squishies",
    "Mini sensory squishy assortments",
    "Plush comfort gifts",
    "Bag charms & accessories",
    "Emotional gift sets",
  ],
  certifications: ["EN71 (squeeze toy)", "ASTM F963-23", "CPC"],
  catalogPdf: "/downloads/linhao-squishy-product-catalog.pdf",
  buyers: [
    "Amazon FBA sellers",
    "Retail chains",
    "Promotional buyers",
    "Wholesale importers",
    "Private-label brands",
  ],
} as const;
