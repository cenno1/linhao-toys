import { products, type Product, type ProductFilterGroup } from "./products";
import { resolveProductHero } from "./product-images";

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
  const heroSrc = resolveProductHero(product.slug, product.images.hero);
  const gallery: ProductGalleryItem[] = [
    { id: "hero", src: heroSrc, label: "Product view" },
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
