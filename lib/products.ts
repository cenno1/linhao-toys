export type ProductFilterGroup =
  | "squishy"
  | "plush"
  | "bag-charms"
  | "emotional-gifts"
  | "oem";

export type ProductImageSet = {
  hero: string;
  detail?: string;
  packaging?: string;
  oemCase?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  tag: string;
  note: string;
  alt: string;
  keywords: string[];
  images: ProductImageSet;
  featured?: boolean;
  bestseller?: boolean;
  filterGroup: ProductFilterGroup;
};

function images(slug: string, hero: string): ProductImageSet {
  return {
    hero,
    detail: `/images/products/${slug}/detail.png`,
    packaging: `/images/products/${slug}/packaging.png`,
    oemCase: `/images/products/${slug}/oem-case.png`,
  };
}

export const products: Product[] = [
  {
    slug: "glitter-bao-bun",
    name: "OEM Glitter Bao Bun Squishy",
    category: "Glitter Squishy · OEM/ODM",
    tag: "OEM Available",
    note: "Steamer-bun squishy with embedded glitter — strong impulse-buy appeal for retail shelves and gift stores. OEM/ODM: custom colors, faces, glitter fill, hangtags and retail packaging. Wholesale-ready for Amazon sellers, importers and chain retailers.",
    alt: "OEM glitter bao bun squishy wholesale Amazon seller retail custom design LINHAO China toy manufacturer",
    keywords: [
      "OEM toy manufacturer",
      "ODM squishy manufacturer",
      "wholesale squishy toys",
      "Amazon seller toys",
      "retail toy wholesale",
      "glitter bao bun squishy OEM",
    ],
    images: images("glitter-bao-bun", "/images/products/glitter-bao-bun/hero.png"),
    featured: true,
    filterGroup: "squishy",
  },
  {
    slug: "glitter-basket-blue",
    name: "OEM Glitter Basket Squishy — Blue",
    category: "Glitter Squishy · Wholesale",
    tag: "Export Bestseller",
    note: "Top export SKU with slow-rise glitter basket format and proven repeat orders. OEM/ODM: color series, face print, PDQ boxes and private label packaging. Ideal for Amazon FBA, claw machine operators and wholesale distributors.",
    alt: "OEM blue glitter basket squishy export bestseller wholesale Amazon FBA LINHAO China manufacturer",
    keywords: [
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "Amazon FBA toys",
      "export squishy wholesale",
      "retail squishy supplier",
      "glitter basket squishy OEM",
    ],
    images: images("glitter-basket-blue", "/images/products/glitter-basket-blue/hero.png"),
    featured: true,
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "butter-stick",
    name: "OEM Butter Stick Food Squishy",
    category: "Food Squishy · OEM/ODM",
    tag: "Custom Color",
    note: "Viral food-trend stretch squishy with long-format squeeze recovery for social-driven retail. OEM/ODM: custom food shapes, colors, scent and print artwork. Built for Amazon sellers, promotional wholesalers and gift retailers.",
    alt: "OEM butter stick food squishy wholesale Amazon seller custom color LINHAO China supplier",
    keywords: [
      "OEM toy manufacturer",
      "ODM squishy manufacturer",
      "wholesale squishy toys",
      "Amazon seller toys",
      "food squishy OEM",
      "butter stick squishy wholesale",
    ],
    images: images("butter-stick", "/images/products/butter-stick/hero.png"),
    featured: true,
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "mini-animal-mix",
    name: "OEM Mini Animal Squishy Mix",
    category: "Mini Sensory · Wholesale",
    tag: "Blind Box Ready",
    note: "20+ mini designs in one wholesale program — ready for blind bags, party packs and vending. OEM/ODM: custom animal mix, branded blind bags and display inner packs. For Amazon sellers, party favor distributors and retail buyers.",
    alt: "OEM mini animal squishy assortment blind box wholesale Amazon seller LINHAO China manufacturer",
    keywords: [
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "Amazon seller toys",
      "blind box squishy wholesale",
      "retail party favor supplier",
      "mini squishy assortment OEM",
    ],
    images: images("mini-animal-mix", "/images/products/mini-animal-mix/hero.png"),
    featured: true,
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "halloween-shiny-bao",
    name: "OEM Halloween Shiny Bao Squishy",
    category: "Seasonal Squishy · OEM/ODM",
    tag: "Blind Box Ready",
    note: "Halloween Mystery line with 6 glitter baozi designs for seasonal retail windows. OEM/ODM: custom faces, glitter colors, blind box artwork and PDQ shippers. Wholesale program for Amazon sellers, gift chains and seasonal importers.",
    alt: "OEM Halloween shiny bao squishy blind box wholesale retail Amazon seller LINHAO China manufacturer",
    keywords: [
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "Amazon seller toys",
      "halloween squishy OEM",
      "seasonal retail wholesale",
      "blind box baozi squishy wholesale",
    ],
    images: images("halloween-shiny-bao", "/images/products/halloween-shiny-bao/hero.png"),
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "taba-jelly-ball",
    name: "OEM Taba Jelly Squeeze Ball",
    category: "Taba Squishy · Wholesale",
    tag: "OEM Available",
    note: "Transparent taba jelly compound with high visual and squeeze appeal for fidget retail. OEM/ODM: custom colors, glitter inclusions and size tiers. Supply-ready for Amazon sellers, sensory toy retailers and wholesale importers.",
    alt: "OEM taba jelly squeeze ball sensory toy wholesale Amazon seller LINHAO China manufacturer",
    keywords: [
      "OEM toy manufacturer",
      "ODM squishy manufacturer",
      "wholesale squishy toys",
      "Amazon seller toys",
      "sensory toy wholesale",
      "taba jelly squishy OEM",
    ],
    images: images("taba-jelly-ball", "/images/real-products/jelly-squeeze-ball.jpg"),
    filterGroup: "squishy",
  },
  {
    slug: "comfort-cat-plush",
    name: "OEM Comfort Cat Plush Toy",
    category: "Emotional Plush · OEM/ODM",
    tag: "Custom Color",
    note: "Soft emotional plush with expressive face — strong gifting and desk décor positioning. OEM/ODM: character design, fabric colors, embroidery and gift box branding. For Amazon sellers, gift brands and promotional wholesale buyers.",
    alt: "OEM comfort cat plush toy wholesale Amazon seller emotional gift LINHAO China manufacturer",
    keywords: [
      "OEM plush manufacturer",
      "ODM plush toys",
      "wholesale plush toys",
      "Amazon seller plush",
      "retail gift wholesale",
      "emotional plush OEM",
    ],
    images: images("comfort-cat-plush", "/images/real-products/green-cat-plush.jpg"),
    filterGroup: "emotional-gifts",
  },
  {
    slug: "mood-bunny-plush",
    name: "OEM Long-Ear Mood Bunny Plush",
    category: "Emotional Plush · Wholesale",
    tag: "OEM Available",
    note: "Long-ear mood character ready for collectible series and mascot IP development. OEM/ODM: expression variants, size family and branded hangtags. Wholesale program for retailers, Amazon private label and character licensors.",
    alt: "OEM mood bunny plush character series wholesale Amazon seller LINHAO China manufacturer",
    keywords: [
      "OEM plush manufacturer",
      "wholesale plush toys",
      "Amazon seller plush",
      "character plush OEM",
      "retail collectible wholesale",
      "ODM plush manufacturer",
    ],
    images: images("mood-bunny-plush", "/images/real-products/emotion-bunny-plush.jpg"),
    filterGroup: "emotional-gifts",
  },
  {
    slug: "flower-bag-charm",
    name: "OEM Flower Plush Bag Charm",
    category: "Bag Accessories · OEM/ODM",
    tag: "Custom Packaging",
    note: "Lightweight flower clip-on with keyring for bag charm and accessory programs. OEM/ODM: flower styles, colorways, logo tags and retail card packaging. For accessory brands, Amazon sellers and gift add-on wholesalers.",
    alt: "OEM flower plush bag charm wholesale Amazon seller keychain accessory LINHAO China supplier",
    keywords: [
      "OEM toy manufacturer",
      "wholesale bag charms",
      "Amazon seller accessories",
      "plush keychain OEM",
      "retail gift wholesale",
      "ODM accessory manufacturer",
    ],
    images: images("flower-bag-charm", "/images/real-products/flower-bag-charm.jpg"),
    filterGroup: "bag-charms",
  },
  {
    slug: "mini-kitty-desk-buddy",
    name: "OEM Mini Kitty Desk Buddy Plush",
    category: "Desk Companion · Wholesale",
    tag: "OEM Available",
    note: "Mini cat desk display format built for collectible and impulse retail sets. OEM/ODM: animal + furniture combos, 6–12 SKU series and display tray packaging. Wholesale-ready for gift shops, Amazon sellers and novelty retailers.",
    alt: "OEM mini kitty desk buddy plush wholesale Amazon seller collectible LINHAO China manufacturer",
    keywords: [
      "OEM plush manufacturer",
      "wholesale plush toys",
      "Amazon seller toys",
      "desk companion plush OEM",
      "retail collectible wholesale",
      "ODM plush manufacturer",
    ],
    images: images("mini-kitty-desk-buddy", "/images/real-products/mini-kitty-chair.jpg"),
    filterGroup: "plush",
  },
  {
    slug: "light-up-robot",
    name: "OEM Light-Up Robot Gift Toy",
    category: "Interactive Gift · OEM/ODM",
    tag: "Custom Color",
    note: "LED light and movement features for higher perceived value in gift and promo channels. OEM/ODM: custom shapes, LED programs, battery labeling and branded gift boxes. For promotional distributors, Amazon sellers and retail chains.",
    alt: "OEM light up robot toy wholesale Amazon seller promotional gift LINHAO China manufacturer",
    keywords: [
      "OEM toy manufacturer",
      "wholesale gift toys",
      "Amazon seller toys",
      "light up toy OEM",
      "promotional toy wholesale",
      "retail novelty supplier",
    ],
    images: images("light-up-robot", "/images/real-products/light-up-robot.jpg"),
    filterGroup: "emotional-gifts",
  },
  {
    slug: "custom-gift-set",
    name: "OEM Custom Retail Gift Set",
    category: "OEM / ODM · Turnkey",
    tag: "OEM Available",
    note: "Turnkey OEM/ODM from your reference to finished retail gift set — squishy, plush, accessory and packaging in one program. Full private label support for brand owners, Amazon sellers and retail chain buyers seeking wholesale-ready collections.",
    alt: "OEM custom retail gift set private label wholesale Amazon seller LINHAO China toy manufacturer",
    keywords: [
      "OEM toy manufacturer",
      "ODM toy manufacturer",
      "wholesale gift sets",
      "Amazon private label toys",
      "retail toy wholesale",
      "turnkey OEM toy supplier",
    ],
    images: images("custom-gift-set", "/images/real-products/catalog-hero.jpg"),
    filterGroup: "oem",
  },
];
