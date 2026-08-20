import { products, type Product, type ProductFilterGroup } from "./products";

export const PRODUCT_MOQ = 100;

const READY_STOCK_SLUGS = new Set([
  "ready-stock-highland-cow-tpr-squishy",
  "ready-stock-mango-squishy",
  "ready-stock-giant-peach-squishy",
  "ready-stock-cheese-cube-squishy",
  "ready-stock-giant-strawberry-squishy",
  "ready-stock-giant-banana-squishy",
  "ready-stock-dragon-fruit-squishy",
  "ready-stock-halloween-butter-bar-squishy",
]);

export const FULL_GALLERY_SLUGS = new Set([
  "ready-stock-highland-cow-tpr-squishy",
  "glitter-bao-bun",
  "glitter-basket-blue",
  "butter-stick",
  "mini-animal-mix",
  "custom-pu-fruit-animal-figures",
]);

export type ProductGalleryItem = {
  id: string;
  src: string;
  label: string;
};

type ProductBuyingProfile = {
  specifications: ProductSpecification[];
  customization: string[];
  useCases: string[];
  buyerBrief: string[];
  packagingAnswer: string;
};

const productBuyingProfiles: Partial<Record<string, ProductBuyingProfile>> = {
  "ready-stock-highland-cow-tpr-squishy": {
    specifications: [
      { label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" },
      { label: "Material", value: "TPR squeeze-toy construction" },
      { label: "Available colorways", value: "Brown and orange shown; confirm the current color allocation with the stock check" },
      { label: "Packing route", value: "Retail presentation box shown; unit packing and outer-carton details confirmed with live inventory" },
    ],
    customization: [
      "Live stock and colorway check",
      "Available retail-box presentation",
      "Carton quantity and dimensions",
      "Dispatch and shipping coordination",
    ],
    useCases: ["Novelty retail", "Gift shops", "Impulse displays", "Bulk animal-toy assortments"],
    buyerBrief: ["Required quantity", "Preferred color allocation", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "The current retail presentation, unit packing, carton quantity, carton dimensions and dispatch timing are confirmed against live stock before the wholesale order is accepted.",
  },
  "dumpling-squishy-blind-box": {
    specifications: [
      { label: "Material route", value: "PU slow-rise or another approved squeeze construction confirmed during sampling" },
      { label: "Assortment format", value: "Original dumpling or bao characters with buyer-approved color and expression ratios" },
      { label: "Packaging route", value: "Blind box, blind bag, display carton or private-label retail box" },
    ],
    customization: [
      "Original dumpling, bao or food-character shapes",
      "Expressions, accessories and secret-edition directions",
      "Colorway and assortment-ratio planning",
      "Softness, recovery and optional scent review",
      "Blind box, display carton and barcode artwork",
      "Private-label inserts, warning labels and export cartons",
    ],
    useCases: ["Blind-box collections", "Impulse retail", "Social-commerce launches", "Gift and vending assortments"],
    buyerBrief: ["Number of characters and colorways", "Target size and squeeze feel", "Total quantity and quantity per design", "Blind-box rarity or assortment plan", "Destination market and packaging format"],
    packagingAnswer: "Blind boxes, blind bags and counter-display cartons can be reviewed together with the character count, assortment ratio, barcode and destination-market labeling.",
  },
  "transparent-gel-cube-squishy": {
    specifications: [
      { label: "Material route", value: "Clear elastomer or gel-style construction selected after firmness and market review" },
      { label: "Visual options", value: "Transparent color, glitter, suspended inclusions or clean crystal appearance" },
      { label: "Packaging route", value: "Protective bag, tray, retail box or gift-set presentation" },
    ],
    customization: [
      "Cube dimensions and corner radius",
      "Firmness, squeeze resistance and rebound behavior",
      "Transparent colors and visual inclusions",
      "Surface finish and dust-control review",
      "Protective inner tray or individual bag",
      "Retail box, barcode and private-label artwork",
    ],
    useCases: ["Desk sensory ranges", "Lifestyle gift sets", "Color assortments", "Online marketplace multipacks"],
    buyerBrief: ["Target dimensions", "Preferred resistance or reference sample", "Color and inclusion directions", "Quantity per color", "Packaging and destination market"],
    packagingAnswer: "Because clear and soft surfaces can show marks or collect dust, the protective bag, tray and outer box should be confirmed during sampling rather than after the product is approved.",
  },
  "capybara-squishy-assortment": {
    specifications: [
      { label: "Material route", value: "PU slow-rise or approved squeeze material selected for the required feel and finish" },
      { label: "Assortment format", value: "Original poses, accessories, expressions and buyer-owned artwork directions" },
      { label: "Packaging route", value: "Open-box retail, blind assortment, display carton or gift set" },
    ],
    customization: [
      "Original capybara poses and proportions",
      "Accessories, expressions and seasonal themes",
      "Color series and assortment ratios",
      "Softness, recovery and surface finish",
      "Face printing, logo and hangtag options",
      "Blind packaging, display cartons and gift boxes",
    ],
    useCases: ["Character collectibles", "Seasonal retail drops", "Gift-shop assortments", "Blind-box and impulse programs"],
    buyerBrief: ["Original artwork or mood board", "Number of poses and accessories", "Target size and feel", "Quantity per design", "Packaging, labels and destination market"],
    packagingAnswer: "Open retail boxes, blind assortments and display cartons are available development directions. Final structure depends on the number of poses, assortment ratio and product dimensions.",
  },
  "soft-sticky-squishy-assortment": {
    specifications: [
      { label: "Material route", value: "Soft TPR/TPE-style or approved sticky-touch construction subject to market-specific review" },
      { label: "Surface control", value: "Tackiness, dust protection, print adhesion and storage behavior reviewed at sampling" },
      { label: "Packaging route", value: "Sealed protective bag with optional retail card, box or multipack" },
    ],
    customization: [
      "Original fruit, animal and abstract shapes",
      "Softness, stretch and surface-tack level",
      "Solid, transparent or gradient color effects",
      "Face artwork and compatible print method",
      "Individual dust-control protective packaging",
      "Private-label card, box and multipack presentation",
    ],
    useCases: ["Trend-led sensory collections", "Fruit and animal assortments", "Impulse gifts", "Private-label multipacks"],
    buyerBrief: ["Shape artwork and approximate size", "Required softness and surface feel", "Color and print directions", "Quantity per design", "Protective packaging and destination market"],
    packagingAnswer: "Individual sealed protection is normally reviewed for sticky-touch products to control dust and surface contact. Retail cards, boxes and multipacks can be built around that inner protection.",
  },
  "custom-tpr-popsicle-butter-cube-squishy": {
    specifications: [
      { label: "Material route", value: "TPR or another approved soft-elastic construction selected for the target squeeze and finish" },
      { label: "Assortment format", value: "Popsicle, butter cube, ice-cream and other original food-inspired novelty shapes" },
      { label: "Color route", value: "Solid, transparent, glitter, gradient or marbled effects reviewed with the production sample" },
      { label: "Packaging route", value: "Individual protective bag, retail card, display box or mixed-SKU multipack" },
    ],
    customization: [
      "Original popsicle, cube, ice-cream and novelty-food shape development",
      "Target softness, rebound and surface-finish direction",
      "Transparent, glitter, swirl or gradient color effects",
      "Compatible logo, message card and private-label artwork",
      "Single-SKU or mixed-shape assortment ratios",
      "Protective bag, counter display and retail multipack packaging",
    ],
    useCases: ["Impulse retail", "Colorful sensory assortments", "Party and gift programs", "Private-label fidget-toy collections"],
    buyerBrief: ["Selected shapes and approximate size", "Target softness and finish", "Color effect and logo artwork", "Quantity per shape", "Packaging, destination market and requested timeline"],
    packagingAnswer: "The assortment can be quoted as individual protected pieces, mixed retail packs or display cartons. Confirm the final shape count, color mix and package size with the pre-production sample before bulk production.",
  },
  "bakery-slow-rise-squishy-assortment": {
    specifications: [
      { label: "Material route", value: "PU slow-rise foam or approved recovery construction confirmed with the reference sample" },
      { label: "Assortment format", value: "Bread, pastry, waffle, cake or dessert shapes with buyer-approved colorways" },
      { label: "Packaging route", value: "Individual bag, printed box, bakery-style display or gift multipack" },
    ],
    customization: [
      "Bread, pastry and dessert shape development",
      "Recovery speed, softness and optional scent",
      "Baked color gradients and face artwork",
      "Single-SKU or mixed bakery assortment",
      "Individual bag, printed box or display tray",
      "Brand labels, inserts, barcodes and export cartons",
    ],
    useCases: ["Food-themed gift retail", "Bakery and café merchandise", "Marketplace multipacks", "Seasonal and promotional sets"],
    buyerBrief: ["Selected bakery shapes", "Target size and recovery speed", "Scent and artwork requirements", "Quantity per shape", "Retail packaging and destination market"],
    packagingAnswer: "The product can be planned as individual packaged pieces, mixed bakery multipacks or counter displays. Scent, shape count and packaging minimums should be quoted together.",
  },
  "adult-desk-sensory-squishy": {
    specifications: [
      { label: "Material route", value: "Silicone, TPR-style or another approved construction selected for resistance and finish" },
      { label: "Design direction", value: "Quiet, minimal forms and lifestyle color palettes without medical claims" },
      { label: "Packaging route", value: "Protective pouch, premium gift box or corporate-branded set" },
    ],
    customization: [
      "Minimal pebble, geometric or original desk forms",
      "Squeeze resistance and rebound behavior",
      "Neutral, seasonal or corporate color palettes",
      "Matte, smooth or compatible tactile finish",
      "Logo, message card and corporate branding",
      "Protective pouch, gift box and set packaging",
    ],
    useCases: ["Corporate gifting", "Lifestyle desk accessories", "Adult sensory collections", "Premium promotional sets"],
    buyerBrief: ["Target user and sales channel", "Preferred shape and dimensions", "Resistance or reference feel", "Brand colors and logo placement", "Gift packaging, quantity and destination market"],
    packagingAnswer: "Protective pouches, premium boxes and corporate gift sets can be developed. Claims and wording should remain lifestyle-focused unless the buyer has appropriate substantiation for another use.",
  },
  "custom-eva-geometric-cutout-squeeze-ball": {
    specifications: [
      { label: "Material route", value: "EVA foam construction selected for the target resilience, color and surface finish" },
      { label: "Typical size", value: "Buyer-specified diameter; final size and weight confirmed with the approved sample" },
      { label: "Packaging route", value: "Individual bag, header card, multipack or promotional-gift presentation" },
    ],
    customization: [
      "Buyer-specified ball diameter and colorway assortment",
      "Original rounded-triangle cutout and diagonal-slot pattern direction",
      "Compatible logo panel, message or event printing",
      "Squeeze resilience and surface-finish review",
      "Individual bag, carded pack or multipack packaging",
      "Mixed-color display pack and private-label artwork",
    ],
    useCases: ["School and party favors", "Promotional giveaways", "Colorful sensory-toy assortments", "Retail gift programs"],
    buyerBrief: ["Target diameter and reference feel", "Color count and logo or print artwork", "Quantity per color", "Individual or multipack packaging", "Destination market and requested timeline"],
    packagingAnswer: "Individual bags, header cards and mixed-color displays can be developed. The packaging dimensions and any print area should be confirmed with the selected ball size before bulk quotation.",
  },
  "custom-jumbo-ghost-squishy": {
    specifications: [
      { label: "Material route", value: "PU slow-rise foam or another buyer-approved construction selected with the production sample" },
      { label: "Typical size", value: "Jumbo format; final dimensions, weight and rebound feel are confirmed after artwork and sampling" },
      { label: "Artwork route", value: "Original ghost silhouette, facial artwork, color palette and compatible logo placement" },
      { label: "Packaging route", value: "Individual bag, color box, party-favor set or seasonal retail display carton" },
    ],
    customization: [
      "Original ghost silhouette, arm shape and base profile",
      "Buyer-approved facial artwork, colors and seasonal accent details",
      "Custom size, density and slow-rise recovery target",
      "Logo, message card and private-label packaging",
      "Single color, mixed-color or seasonal assortment planning",
      "Retail carton, gift box and party-favor presentation",
    ],
    useCases: ["Halloween retail campaigns", "Party favors", "Seasonal gift programs", "Branded promotional giveaways"],
    buyerBrief: ["Original artwork direction and target user", "Preferred size and squeeze or recovery feel", "Colorway and logo placement", "Quantity per color or assortment", "Packaging, destination market and requested timeline"],
    packagingAnswer: "Individual bags, themed retail boxes, party-favor sets and display cartons can be planned around the approved jumbo size. Confirm final artwork and carton dimensions with the pre-production sample before bulk quotation.",
  },
  "ready-stock-mango-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "11.5 × 6 cm" }, { label: "Order route", value: "Bulk wholesale by available color and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Novelty retail", "Gift shops", "Party packs", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Current individual packing and outer-carton details are confirmed with the live stock check. Request a quantity-based quotation before payment.",
  },
  "ready-stock-giant-peach-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "17 × 15 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Novelty retail", "Seasonal displays", "Gift shops", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "The live stock check confirms available pieces, inner packing and carton details before the wholesale order is accepted.",
  },
  "ready-stock-cheese-cube-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "12 × 12 × 12 cm" }, { label: "Packing route", value: "Retail presentation box with wholesale carton packing" }],
    customization: ["Live stock check", "Available retail presentation", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Countertop retail", "Novelty gift packs", "Impulse displays", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "This item is supplied in its available retail presentation. Ask for current carton quantity, carton dimensions and dispatch timing.",
  },
  "ready-stock-giant-strawberry-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "16 × 13 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Novelty retail", "Party gifts", "Gift shops", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Available stock, carton packing and dispatch options are confirmed with the quantity inquiry.",
  },
  "ready-stock-giant-banana-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "35 × 7.5 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Carton quantity", "Individual packing availability", "Dispatch and shipping coordination"],
    useCases: ["Display-focused retail", "Party prizes", "Novelty gift shops", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Because this is an oversized item, current carton quantity and shipping options should be confirmed with the live stock quotation.",
  },
  "ready-stock-dragon-fruit-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "18.2 × 12 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Colorful novelty retail", "Gift assortments", "Party packs", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Request a live stock confirmation for available quantity, carton packing and dispatch timing before ordering.",
  },
  "ready-stock-halloween-butter-bar-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Season", value: "Halloween retail and party-favor assortment" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available unit-packing review", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Halloween retail", "Party favors", "Seasonal gift shops", "Bulk novelty assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "The available unit packing and outer-carton details are confirmed with the live stock check. Request a quantity-based quotation before payment.",
  },
};

export type ProductInquiryFormData = {
  company: string;
  email: string;
  projectType: string;
  quantity: string;
  market: string;
  timeline: string;
  packaging: string;
  referenceUrl: string;
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
        label: "OEM customization reference",
      });
    }
  }

  return gallery;
}

export function getCustomizationOptions(product: Product): string[] {
  const options: Record<ProductFilterGroup, string[]> = {
    squishy: [
      "Custom 3D shape from buyer artwork",
      "Fruit, animal, mascot or character forms",
      "Dimensions & slow-rise softness",
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
    "diy-crafts": [
      "Character, motif or landscape artwork",
      "Material and color palette",
      "Beginner or advanced difficulty",
      "Tools and accessory configuration",
      "Multilingual instruction card",
      "Private-label retail packaging",
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

  return productBuyingProfiles[product.slug]?.customization ?? options[product.filterGroup];
}

export type ProductSpecification = {
  label: string;
  value: string;
};

export function getProductSpecifications(product: Product): ProductSpecification[] {
  const profile = productBuyingProfiles[product.slug];
  const isReadyStock = READY_STOCK_SLUGS.has(product.slug);

  if (isReadyStock) {
    return [
      { label: "Product", value: product.name },
      ...(profile?.specifications ?? []),
      {
        label: "Wholesale supply",
        value: "Ready-stock item supplied according to live inventory and carton availability",
      },
      {
        label: "Stock confirmation",
        value: "Current quantity, packing and dispatch schedule are confirmed with each inquiry",
      },
    ];
  }
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
    "diy-crafts": [
      { label: "Product type", value: "DIY needle felting, crochet or embroidery kit" },
      { label: "Customization", value: "Design, materials, tools, instructions and packaging" },
      { label: "Typical buyers", value: "Craft retailers, gift brands, workshops and online sellers" },
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
    ...(profile?.specifications ?? []),
    ...groupDetails[product.filterGroup],
    { label: "Indicative MOQ", value: `From ${PRODUCT_MOQ} pcs; confirmed by specification` },
    { label: "Sampling", value: "Typically 3–7 days after specifications are confirmed" },
  ];
}

export function getProductUseCases(product: Product): string[] {
  const useCases: Record<ProductFilterGroup, string[]> = {
    squishy: ["Impulse retail", "Sensory assortments", "Blind bags", "Party and promotional packs"],
    plush: ["Collectible series", "Gift retail", "Desk companions", "Mascot programs"],
    "bag-charms": ["Fashion accessories", "Gift-with-purchase", "Collectible drops", "Bag and key accessories"],
    "diy-crafts": ["Creative gifting", "Craft retail", "Beginner workshops", "Mindful hobby collections"],
    "emotional-gifts": ["Lifestyle gifting", "Seasonal campaigns", "Desk décor", "Promotional programs"],
    oem: ["Private-label launches", "Retail gift sets", "Marketplace bundles", "Promotional campaigns"],
  };
  return productBuyingProfiles[product.slug]?.useCases ?? useCases[product.filterGroup];
}

export function getProductBuyerBrief(product: Product): string[] {
  return productBuyingProfiles[product.slug]?.buyerBrief ?? [
    "Product drawing or reference image",
    "Target dimensions and quantity",
    "Color, artwork and logo requirements",
    "Packaging format",
    "Destination market and requested timing",
  ];
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
  const profile = productBuyingProfiles[product.slug];
  const isReadyStock = READY_STOCK_SLUGS.has(product.slug);

  if (isReadyStock) {
    return [
      {
        question: `Is ${product.name} available now?`,
        answer: "This is a ready-stock wholesale item. We confirm the current quantity, available colors and dispatch schedule when you send your requested quantity.",
      },
      {
        question: "What wholesale quantity can I order?",
        answer: "Order quantity is based on live stock and carton packing. Send the quantity you need and we will confirm the available allocation and price.",
      },
      {
        question: "Can you provide current packing and shipping details?",
        answer: "Yes. We can confirm individual packing, outer-carton quantity, carton dimensions and shipment options after checking live inventory.",
      },
      {
        question: "Can this product be mixed with other ready-stock toys?",
        answer: "Mixed ready-stock assortments may be possible depending on the items, quantities and destination. Include your preferred assortment in the inquiry.",
      },
      {
        question: "What information should I send for a stock quotation?",
        answer: "Send your requested quantity, destination country, preferred shipping method and required receiving date. This lets us check stock and prepare a practical wholesale quotation.",
      },
    ];
  }

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
      question: `Which packaging options are suitable for ${product.name}?`,
      answer: profile?.packagingAnswer ?? "Available directions may include individual bags, retail boxes, hangtags, display trays and multipacks. The practical option depends on product size, quantity, sales channel and destination-market labeling.",
    },
    {
      question: "Which compliance documents are available?",
      answer: "Existing documents are shown on the page where applicable. Final testing and documentation must be confirmed for the exact product, age grade and destination market.",
    },
    {
      question: "What should I send for a useful quotation?",
      answer: "Send the product reference or artwork, target dimensions, quantity per design, destination market, packaging format and requested delivery timing. A reference for softness or resistance is also useful when hand-feel matters.",
    },
  ];
}

export const INQUIRY_EMAIL = "sales@lh-industrial.com";
export const WHATSAPP_NUMBER = "8615088452259";

type WhatsAppContext = "hero" | "product" | "general";

type BuildWhatsAppUrlInput =
  | string
  | {
      productName?: string;
      context?: WhatsAppContext;
    };

export function buildWhatsAppUrl(input: BuildWhatsAppUrlInput = "your products"): string {
  const options =
    typeof input === "string" ? { productName: input, context: "general" as const } : input;
  const context = options.context ?? "general";

  let message =
    "Hello LINHAO Toys, I am interested in your OEM squishy products.";

  if (context === "hero") {
    message =
      "Hello LINHAO Toys, I would like factory pricing for custom squishy OEM / wholesale.";
  } else if (context === "product" && options.productName) {
    message = `Hello LINHAO Toys, I would like a quote for: ${options.productName}`;
  } else if (options.productName) {
    message = [
      "Hello LINHAO Toys,",
      `I am interested in ${options.productName}.`,
      "",
      "Company / brand:",
      "Estimated quantity:",
      "Target market:",
      "Packaging requirements:",
    ].join("\n");
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
    `Project type: ${data.projectType}`,
    `Estimated quantity: ${data.quantity}`,
    `Target market: ${data.market}`,
    `Requested timeline: ${data.timeline}`,
    `Preferred packaging: ${data.packaging}`,
    `Reference link: ${data.referenceUrl}`,
    "",
    "Additional requirements:",
    data.requirements,
  ].join("\n");

  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(`${productName} — Inquiry`)}&body=${encodeURIComponent(body)}`;
}