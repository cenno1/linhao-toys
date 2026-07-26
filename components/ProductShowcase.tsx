import Image from "next/image";

const products = [
  {
    name: "OEM Glitter Bao Bun Squishy",
    category: "Glitter Squishy · Food Shape",
    image: "/images/real-products/glitter-buns.jpg",
    tag: "OEM Available",
    note: "Kawaii steamer-bun shape with embedded glitter — strong shelf appeal for gift and impulse retail. OEM: custom colors, faces, and packaging. For Amazon sellers, gift brands, and importers.",
    alt: "OEM glitter bao bun squishy toy custom design wholesale supplier LINHAO China toy manufacturer",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "glitter food squishy OEM", "bao bun squishy wholesale"],
  },
  {
    name: "OEM Glitter Basket Squishy — Blue",
    category: "Glitter Squishy · Export Line",
    image: "/images/blue-basket.png",
    tag: "Export Bestseller",
    note: "LINHAO's top export line — slow-rise glitter basket with high repeat order rate. OEM: color series, face print, and retail box. For Amazon FBA, claw machine, and retail chain buyers.",
    alt: "OEM blue glitter basket squishy export bestseller wholesale China toy manufacturer LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "glitter basket squishy OEM", "export squishy wholesale"],
  },
  {
    name: "OEM Butter Stick Food Squishy",
    category: "Food Squishy · Trend",
    image: "/images/real-products/butter-sticks.jpg",
    tag: "Custom Color",
    note: "Viral food-trend stretch squishy with long-format squeeze recovery. OEM: custom food shapes, colors, and print. For Amazon sellers and promotional distributors.",
    alt: "OEM butter stick food squishy toy custom color wholesale China supplier LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "food squishy OEM", "butter stick squishy wholesale"],
  },
  {
    name: "OEM Mini Animal Squishy Mix",
    category: "Mini Sensory · Assortment",
    image: "/images/real-products/mini-squishy-assortment.jpg",
    tag: "Blind Box Ready",
    note: "20+ mini animal designs in one program — built for blind bags and party packs. OEM: custom mix and branded blind bags. For vending, collectible, and party favor buyers.",
    alt: "OEM mini animal squishy assortment blind box party pack wholesale China toy manufacturer LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "mini squishy assortment OEM", "blind box squishy wholesale"],
  },
  {
    name: "OEM Pink Glitter Basket Squishy",
    category: "Glitter Squishy · Color Series",
    image: "/images/pink-basket.png",
    tag: "Custom Packaging",
    note: "Proven basket mold in pink — expand your SKU line without new tooling. OEM: brand color matching and co-branded packaging. For retail chains and gift brands.",
    alt: "OEM pink glitter basket squishy color series retail wholesale China toy supplier LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "pink squishy OEM", "color series squishy wholesale"],
  },
  {
    name: "OEM Taba Jelly Squeeze Ball",
    category: "Taba Squishy · Sensory",
    image: "/images/real-products/jelly-squeeze-ball.jpg",
    tag: "OEM Available",
    note: "Transparent taba jelly compound with satisfying squeeze and visual appeal. OEM: custom colors, glitter fill, and size variants. For sensory retailers and Amazon fidget category.",
    alt: "OEM taba jelly squeeze ball transparent sensory toy wholesale China manufacturer LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "taba squishy OEM", "jelly squeeze ball wholesale"],
  },
  {
    name: "OEM Comfort Cat Plush Toy",
    category: "Emotional Plush · Gift",
    image: "/images/real-products/green-cat-plush.jpg",
    tag: "Custom Color",
    note: "Soft emotional plush with expressive face — strong gifting and desk décor appeal. OEM: character design, fabric color, and gift box. For gift brands and promotional buyers.",
    alt: "OEM emotional comfort cat plush toy soft gift wholesale China supplier LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "emotional plush OEM", "comfort cat plush wholesale"],
  },
  {
    name: "OEM Long-Ear Mood Bunny Plush",
    category: "Emotional Plush · Character",
    image: "/images/real-products/emotion-bunny-plush.jpg",
    tag: "OEM Available",
    note: "Distinctive long-ear character with mood expression — ready for collectible series. OEM: expression variants and branded hangtags. For brands building mascot IP lines.",
    alt: "OEM long ear mood bunny plush character series wholesale China toy manufacturer LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "bunny plush OEM", "character plush wholesale"],
  },
  {
    name: "OEM Flower Plush Bag Charm",
    category: "Bag Accessories · Clip-On",
    image: "/images/real-products/flower-bag-charm.jpg",
    tag: "Custom Packaging",
    note: "Soft flower clip-on with keyring — lightweight accessory for bag charm programs. OEM: flower types, colorways, and logo tags. For accessory brands and gift add-on programs.",
    alt: "OEM flower plush bag charm clip on accessory keychain wholesale China supplier LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "bag charm OEM", "plush keychain wholesale"],
  },
  {
    name: "OEM Mini Kitty Desk Buddy Plush",
    category: "Desk Companion · Collectible",
    image: "/images/real-products/mini-kitty-chair.jpg",
    tag: "OEM Available",
    note: "Mini cat in chair format — designed for desk display and collectible series. OEM: animal combos and 6–12 SKU series. For gift shops and collectible buyers.",
    alt: "OEM mini kitty desk buddy plush collectible display gift wholesale China toy manufacturer LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "desk buddy plush OEM", "collectible plush wholesale"],
  },
  {
    name: "OEM Light-Up Robot Gift Toy",
    category: "Interactive Gift · LED",
    image: "/images/real-products/light-up-robot.jpg",
    tag: "Custom Color",
    note: "LED light and movement features — higher perceived value for gift and promo. OEM: custom shapes, LED colors, and branded gift box. For promotional distributors and novelty retailers.",
    alt: "OEM light up robot interactive toy LED gift promotional wholesale China toy supplier LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "light up toy OEM", "interactive gift wholesale"],
  },
  {
    name: "OEM Custom Retail Gift Set",
    category: "OEM / ODM · Full Service",
    image: "/images/real-products/catalog-hero.jpg",
    tag: "OEM Available",
    note: "End-to-end OEM from your reference to finished retail set. Squishy, plush, accessory, and packaging in one program. For brand owners and private label Amazon sellers.",
    alt: "OEM full custom gift set private label squishy plush development wholesale China toy manufacturer LINHAO",
    keywords: ["custom squishy toy", "OEM toy manufacturer", "wholesale squishy toys", "China toy supplier", "private label toy OEM", "full custom gift set wholesale"],
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="section v7-products">
      <div className="shell">
        <div className="v7-heading">
          <div>
            <span className="eyebrow">REAL SAMPLE GALLERY</span>
            <h2>Hot-looking products, not placeholder illustrations.</h2>
          </div>
          <p>These images come from LINHAO's supplied product catalogue and existing sample photography. Current market research is used to prioritize food squishies, glitter formats, sensory assortments, emotional plush and bag accessories.</p>
        </div>
        <div className="v7-filters"><span>All</span><span>Squishy</span><span>Plush</span><span>Bag Charms</span><span>Emotional Gifts</span><span>OEM</span></div>
        <div className="v7-product-grid">
          {products.map((p, i) => (
            <article className="v7-card" key={p.name}>
              <div className="v7-photo">
                <Image src={p.image} alt={p.alt ?? p.name} width={1200} height={900}/>
                <b>{p.tag}</b><em>{String(i + 1).padStart(2, "0")}</em>
              </div>
              <div className="v7-card-copy">
                <span>{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.note}</p>
                <a href={`mailto:sales@linhaotoys.com?subject=${encodeURIComponent(`Inquiry about ${p.name}`)}`}>Request price & samples →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
