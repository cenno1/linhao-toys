import { products, type Product, type ProductFilterGroup } from "./products";

export const PRODUCT_MOQ = 100;

export const FULL_GALLERY_SLUGS = new Set([
  "glitter-bao-bun",
  "glitter-basket-blue",
  "butter-stick",
  "mini-animal-mix",
]);

export type ProductGalleryItem = {
  id: string;
  src: string;
  label: string;
};

export type ProductInquiryFormData = {
  company: string;
  email: string;
  quantity: string;
  market: string;
  packaging: string;
  requirements: string;
};

export function getHeroProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductGallery(product: Product): ProductGalleryItem[] {
  const gallery: ProductGalleryItem[] = [
    { id: "hero", src: product.images.hero, label: "Product view" },
  ];

  if (FULL_GALLERY_SLUGS.has(product.slug)) {
    if (product.images.detail) {
      gallery.push({
        id: "detail",
        src: product.images.detail,
        label: "Close-up detail",
      });
    }
    if (product.images.packaging) {
      gallery.push({
        id: "packaging",
        src: product.images.packaging,
        label: "Retail packaging",
      });
    }
    if (product.images.oemCase) {
      gallery.push({
        id: "oemCase",
        src: product.images.oemCase,
        label: "OEM case study",
      });
    }
  }

  return gallery;
}

export function getCustomizationOptions(filterGroup: ProductFilterGroup): string[] {
  const options: Record<ProductFilterGroup, string[]> = {
    squishy: [
      "Shape & dimensions",
      "Color & glitter fill",
      "Face artwork & pad print",
      "Scent option",
      "Hangtag & barcode label",
      "Retail box / PDQ packaging",
    ],
    plush: [
      "Character & expression design",
      "Fabric color & texture",
      "Embroidery & labeling",
      "Size family (S / M / L)",
      "Gift box & hangtag branding",
      "Display tray / inner pack",
    ],
    "bag-charms": [
      "Flower / charm style",
      "Colorway series",
      "Keyring & chain hardware",
      "Logo tag & card backing",
      "Blister / retail card packaging",
      "Assortment mix",
    ],
    "emotional-gifts": [
      "Character & mood expression",
      "Material & color",
      "Packaging & gift box",
      "Message card / branding",
      "Size & accessory options",
      "Promotional labeling",
    ],
    oem: [
      "Product mix (squishy + plush + accessory)",
      "Private label branding",
      "Retail gift set layout",
      "Inner pack & display design",
      "Market-specific labeling",
      "Full turnkey packaging",
    ],
  };

  return options[filterGroup];
}

export type ProductSpecification = {
  label: string;
  value: string;
};

export function getProductSpecifications(product: Product): ProductSpecification[] {
  const groupDetails: Record<ProductFilterGroup, ProductSpecification[]> = {
    squishy: [
      { label: "Product type", value: "Soft squeeze / sensory toy" },
      { label: "Customization", value: "Shape, size, color, print and packaging" },
      { label: "Typical buyers", value: "Retailers, distributors, brands and online sellers" },
    ],
    plush: [
      { label: "Product type", value: "Custom plush collectible" },
      { label: "Customization", value: "Character, fabric, embroidery, size and packaging" },
      { label: "Typical buyers", value: "Gift brands, retailers and collectible programs" },
    ],
    "bag-charms": [
      { label: "Product type", value: "Plush bag charm / keychain" },
      { label: "Customization", value: "Shape, fabric, hardware, label and retail card" },
      { label: "Typical buyers", value: "Accessory brands, gift shops and online sellers" },
    ],
    "emotional-gifts": [
      { label: "Product type", value: "Character and emotional-value gift" },
      { label: "Customization", value: "Expression, color, accessory, message and packaging" },
      { label: "Typical buyers", value: "Gift retailers, lifestyle brands and distributors" },
    ],
    oem: [
      { label: "Product type", value: "Turnkey private-label gift set" },
      { label: "Customization", value: "Product mix, branding, inserts and packaging" },
      { label: "Typical buyers", value: "Brand owners, retailers and promotional buyers" },
    ],
  };

  return [
    { label: "Product", value: product.name },
    ...groupDetails[product.filterGroup],
    { label: "Indicative MOQ", value: `From ${PRODUCT_MOQ} pcs; confirmed by specification` },
    { label: "Sampling", value: "Typically 3–7 days after specifications are confirmed" },
  ];
}

export function getProductUseCases(filterGroup: ProductFilterGroup): string[] {
  const useCases: Record<ProductFilterGroup, string[]> = {
    squishy: ["Impulse retail", "Sensory assortments", "Blind bags", "Party and promotional packs"],
    plush: ["Collectible series", "Gift retail", "Desk companions", "Mascot programs"],
    "bag-charms": ["Fashion accessories", "Gift-with-purchase", "Collectible drops", "Bag and key accessories"],
    "emotional-gifts": ["Lifestyle gifting", "Seasonal campaigns", "Desk décor", "Promotional programs"],
    oem: ["Private-label launches", "Retail gift sets", "Marketplace bundles", "Promotional campaigns"],
  };
  return useCases[filterGroup];
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameGroup = products.filter(
    (item) => item.slug !== product.slug && item.filterGroup === product.filterGroup,
  );
  const otherProducts = products.filter(
    (item) => item.slug !== product.slug && item.filterGroup !== product.filterGroup,
  );
  return [...sameGroup, ...otherProducts].slice(0, limit);
}

export function getProductCategoryLandingPath(filterGroup: ProductFilterGroup): string {
  if (filterGroup === "squishy") return "/wholesale-squishy-toys";
  if (filterGroup === "bag-charms") return "/custom-plush-bag-charms";
  return "/products";
}

export function getProductFAQs(product: Product) {
  return [
    {
      question: `Can ${product.name} be customized?`,
      answer: "Yes. Available options depend on the product and may include shape, dimensions, color, artwork, logo, labels and retail packaging.",
    },
    {
      question: `What is the MOQ for ${product.name}?`,
      answer: `The indicative starting point is ${PRODUCT_MOQ} pieces. Final MOQ depends on mold, material, printing, assortment and packaging requirements.`,
    },
    {
      question: "Can I approve a sample before mass production?",
      answer: "Yes. Sampling and buyer approval are part of the OEM workflow before the approved reference moves into mass production.",
    },
    {
      question: "Which compliance documents are available?",
      answer: "Existing documents are shown on the page where applicable. Final testing and documentation must be confirmed for the exact product, age grade and destination market.",
    },
  ];
}

export const INQUIRY_EMAIL = "sales@lh-industrial.com";

export function buildProductInquiryMailto(productName: string): string {
  const body = [
    `Product: ${productName}`,
    "",
    "Estimated quantity:",
    "Target market:",
    "Preferred packaging:",
    "Additional requirements:",
  ].join("\n");

  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(productName)}&body=${encodeURIComponent(body)}`;
}

export function buildProductInquiryMailtoFromForm(
  productName: string,
  data: ProductInquiryFormData,
): string {
  const body = [
    `Product: ${productName}`,
    "",
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Estimated quantity: ${data.quantity}`,
    `Target market: ${data.market}`,
    `Preferred packaging: ${data.packaging}`,
    "",
    "Additional requirements:",
    data.requirements,
  ].join("\n");

  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(`${productName} — Inquiry`)}&body=${encodeURIComponent(body)}`;
}
