import type { Product, ProductFilterGroup } from "./products";

export type ProductSpecRow = {
  label: string;
  value: string;
};

const baseSpecs: Record<ProductFilterGroup, ProductSpecRow[]> = {
  squishy: [
    { label: "Product type", value: "Slow-rise / sensory squishy toy" },
    { label: "Typical use", value: "Retail, gifting, Amazon FBA, promotional" },
    { label: "Material", value: "PU foam compound (project-specific)" },
    { label: "Standard MOQ", value: "100 pcs per SKU" },
    { label: "Sample lead time", value: "3–7 days after specs confirmed" },
    { label: "Mass production", value: "25–35 days after approved sample" },
  ],
  plush: [
    { label: "Product type", value: "Plush comfort / emotional gift" },
    { label: "Typical use", value: "Gift shops, retail, seasonal programs" },
    { label: "Material", value: "Plush fabric, embroidery, filling" },
    { label: "Standard MOQ", value: "100–300 pcs depending on design" },
    { label: "Sample lead time", value: "5–10 days after artwork confirmed" },
    { label: "Mass production", value: "30–40 days after approved sample" },
  ],
  "bag-charms": [
    { label: "Product type", value: "Bag charm / keyring accessory" },
    { label: "Typical use", value: "Impulse retail, gifting, character merch" },
    { label: "Material", value: "Plush, hardware, card backing" },
    { label: "Standard MOQ", value: "100–300 pcs per design" },
    { label: "Sample lead time", value: "5–10 days" },
    { label: "Mass production", value: "25–35 days after approved sample" },
  ],
  "emotional-gifts": [
    { label: "Product type", value: "Emotional / comfort gift item" },
    { label: "Typical use", value: "Retail gifting, seasonal campaigns" },
    { label: "Material", value: "Plush or mixed-material gift construction" },
    { label: "Standard MOQ", value: "100–300 pcs" },
    { label: "Sample lead time", value: "5–10 days" },
    { label: "Mass production", value: "30–40 days after approved sample" },
  ],
  oem: [
    { label: "Product type", value: "Custom retail gift set / mixed SKU program" },
    { label: "Typical use", value: "Private label, promotional, retail bundles" },
    { label: "Material", value: "Mixed squishy, plush and accessory components" },
    { label: "Standard MOQ", value: "300+ sets depending on components" },
    { label: "Sample lead time", value: "7–14 days for set mockup" },
    { label: "Mass production", value: "35–45 days after approved sample" },
  ],
};

const channelByGroup: Record<ProductFilterGroup, string> = {
  squishy: "Amazon FBA, retail chains, gift shops, vending, promotional",
  plush: "Gift retail, seasonal stores, character shops, ecommerce",
  "bag-charms": "Impulse retail, accessory stores, gifting counters",
  "emotional-gifts": "Gift shops, ecommerce, seasonal promotions",
  oem: "Retail sets, promotional campaigns, private-label programs",
};

export function getProductSpecs(product: Product): ProductSpecRow[] {
  return [
    ...baseSpecs[product.filterGroup],
    { label: "Category", value: product.category },
    { label: "Best channels", value: channelByGroup[product.filterGroup] },
    { label: "Customization", value: "Shape, color, artwork, packaging, labeling" },
  ];
}
