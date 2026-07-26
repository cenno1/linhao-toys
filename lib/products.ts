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
    detail: `/images/products/${slug}/detail.jpg`,
    packaging: `/images/products/${slug}/packaging.jpg`,
    oemCase: `/images/products/${slug}/oem-case.jpg`,
  };
}

export const products: Product[] = [
  {
    slug: "glitter-bao-bun",
    name: "OEM Glitter Bao Bun Squishy",
    category: "Glitter Squishy · Food Shape",
    tag: "OEM Available",
    note: "Kawaii steamer-bun shape with embedded glitter — strong shelf appeal for gift and impulse retail. OEM: custom colors, faces, and packaging. For Amazon sellers, gift brands, and importers.",
    alt: "OEM glitter bao bun squishy toy custom design wholesale supplier LINHAO China toy manufacturer",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "glitter food squishy OEM",
      "bao bun squishy wholesale",
    ],
    images: images("glitter-bao-bun", "/images/real-products/glitter-buns.jpg"),
    featured: true,
    filterGroup: "squishy",
  },
  {
    slug: "glitter-basket-blue",
    name: "OEM Glitter Basket Squishy — Blue",
    category: "Glitter Squishy · Export Line",
    tag: "Export Bestseller",
    note: "LINHAO's top export line — slow-rise glitter basket with high repeat order rate. OEM: color series, face print, and retail box. For Amazon FBA, claw machine, and retail chain buyers.",
    alt: "OEM blue glitter basket squishy export bestseller wholesale China toy manufacturer LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "glitter basket squishy OEM",
      "export squishy wholesale",
    ],
    images: images("glitter-basket-blue", "/images/blue-basket.png"),
    featured: true,
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "butter-stick",
    name: "OEM Butter Stick Food Squishy",
    category: "Food Squishy · Trend",
    tag: "Custom Color",
    note: "Viral food-trend stretch squishy with long-format squeeze recovery. OEM: custom food shapes, colors, and print. For Amazon sellers and promotional distributors.",
    alt: "OEM butter stick food squishy toy custom color wholesale China supplier LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "food squishy OEM",
      "butter stick squishy wholesale",
    ],
    images: images("butter-stick", "/images/real-products/butter-sticks.jpg"),
    featured: true,
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "mini-animal-mix",
    name: "OEM Mini Animal Squishy Mix",
    category: "Mini Sensory · Assortment",
    tag: "Blind Box Ready",
    note: "20+ mini animal designs in one program — built for blind bags and party packs. OEM: custom mix and branded blind bags. For vending, collectible, and party favor buyers.",
    alt: "OEM mini animal squishy assortment blind box party pack wholesale China toy manufacturer LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "mini squishy assortment OEM",
      "blind box squishy wholesale",
    ],
    images: images("mini-animal-mix", "/images/real-products/mini-squishy-assortment.jpg"),
    featured: true,
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "glitter-basket-pink",
    name: "OEM Pink Glitter Basket Squishy",
    category: "Glitter Squishy · Color Series",
    tag: "Custom Packaging",
    note: "Proven basket mold in pink — expand your SKU line without new tooling. OEM: brand color matching and co-branded packaging. For retail chains and gift brands.",
    alt: "OEM pink glitter basket squishy color series retail wholesale China toy supplier LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "pink squishy OEM",
      "color series squishy wholesale",
    ],
    images: images("glitter-basket-pink", "/images/pink-basket.png"),
    bestseller: true,
    filterGroup: "squishy",
  },
  {
    slug: "taba-jelly-ball",
    name: "OEM Taba Jelly Squeeze Ball",
    category: "Taba Squishy · Sensory",
    tag: "OEM Available",
    note: "Transparent taba jelly compound with satisfying squeeze and visual appeal. OEM: custom colors, glitter fill, and size variants. For sensory retailers and Amazon fidget category.",
    alt: "OEM taba jelly squeeze ball transparent sensory toy wholesale China manufacturer LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "taba squishy OEM",
      "jelly squeeze ball wholesale",
    ],
    images: images("taba-jelly-ball", "/images/real-products/jelly-squeeze-ball.jpg"),
    filterGroup: "squishy",
  },
  {
    slug: "comfort-cat-plush",
    name: "OEM Comfort Cat Plush Toy",
    category: "Emotional Plush · Gift",
    tag: "Custom Color",
    note: "Soft emotional plush with expressive face — strong gifting and desk décor appeal. OEM: character design, fabric color, and gift box. For gift brands and promotional buyers.",
    alt: "OEM emotional comfort cat plush toy soft gift wholesale China supplier LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "emotional plush OEM",
      "comfort cat plush wholesale",
    ],
    images: images("comfort-cat-plush", "/images/real-products/green-cat-plush.jpg"),
    filterGroup: "emotional-gifts",
  },
  {
    slug: "mood-bunny-plush",
    name: "OEM Long-Ear Mood Bunny Plush",
    category: "Emotional Plush · Character",
    tag: "OEM Available",
    note: "Distinctive long-ear character with mood expression — ready for collectible series. OEM: expression variants and branded hangtags. For brands building mascot IP lines.",
    alt: "OEM long ear mood bunny plush character series wholesale China toy manufacturer LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "bunny plush OEM",
      "character plush wholesale",
    ],
    images: images("mood-bunny-plush", "/images/real-products/emotion-bunny-plush.jpg"),
    filterGroup: "emotional-gifts",
  },
  {
    slug: "flower-bag-charm",
    name: "OEM Flower Plush Bag Charm",
    category: "Bag Accessories · Clip-On",
    tag: "Custom Packaging",
    note: "Soft flower clip-on with keyring — lightweight accessory for bag charm programs. OEM: flower types, colorways, and logo tags. For accessory brands and gift add-on programs.",
    alt: "OEM flower plush bag charm clip on accessory keychain wholesale China supplier LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "bag charm OEM",
      "plush keychain wholesale",
    ],
    images: images("flower-bag-charm", "/images/real-products/flower-bag-charm.jpg"),
    filterGroup: "bag-charms",
  },
  {
    slug: "mini-kitty-desk-buddy",
    name: "OEM Mini Kitty Desk Buddy Plush",
    category: "Desk Companion · Collectible",
    tag: "OEM Available",
    note: "Mini cat in chair format — designed for desk display and collectible series. OEM: animal combos and 6–12 SKU series. For gift shops and collectible buyers.",
    alt: "OEM mini kitty desk buddy plush collectible display gift wholesale China toy manufacturer LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "desk buddy plush OEM",
      "collectible plush wholesale",
    ],
    images: images("mini-kitty-desk-buddy", "/images/real-products/mini-kitty-chair.jpg"),
    filterGroup: "plush",
  },
  {
    slug: "light-up-robot",
    name: "OEM Light-Up Robot Gift Toy",
    category: "Interactive Gift · LED",
    tag: "Custom Color",
    note: "LED light and movement features — higher perceived value for gift and promo. OEM: custom shapes, LED colors, and branded gift box. For promotional distributors and novelty retailers.",
    alt: "OEM light up robot interactive toy LED gift promotional wholesale China toy supplier LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "light up toy OEM",
      "interactive gift wholesale",
    ],
    images: images("light-up-robot", "/images/real-products/light-up-robot.jpg"),
    filterGroup: "emotional-gifts",
  },
  {
    slug: "custom-gift-set",
    name: "OEM Custom Retail Gift Set",
    category: "OEM / ODM · Full Service",
    tag: "OEM Available",
    note: "End-to-end OEM from your reference to finished retail set. Squishy, plush, accessory, and packaging in one program. For brand owners and private label Amazon sellers.",
    alt: "OEM full custom gift set private label squishy plush development wholesale China toy manufacturer LINHAO",
    keywords: [
      "custom squishy toy",
      "OEM toy manufacturer",
      "wholesale squishy toys",
      "China toy supplier",
      "private label toy OEM",
      "full custom gift set wholesale",
    ],
    images: images("custom-gift-set", "/images/real-products/catalog-hero.jpg"),
    filterGroup: "oem",
  },
];
