import Image from "next/image";

const products = [
  { name: "Glitter Bun Squishy", category: "Glitter Squishy", image: "/images/real-products/glitter-buns.jpg", tag: "Strong visual appeal", note: "Steamer-style retail presentation" },
  { name: "Butter Stick Squeeze Toy", category: "Food Squishy", image: "/images/real-products/butter-sticks.jpg", tag: "Viral food shape", note: "Long stretch-and-squeeze format" },
  { name: "Mini Animal Squishy Mix", category: "Mini Sensory", image: "/images/real-products/mini-squishy-assortment.jpg", tag: "Assortment ready", note: "Ideal for blind bags and party packs" },
  { name: "Jelly Squeeze Ball", category: "Taba / Jelly", image: "/images/real-products/jelly-squeeze-ball.jpg", tag: "Satisfying squeeze", note: "Soft transparent sensory material" },
  { name: "Glitter Basket Squishy", category: "Glitter Squishy", image: "/images/blue-basket.png", tag: "LINHAO bestseller", note: "Custom color and printed face" },
  { name: "Pink Glitter Basket", category: "Glitter Squishy", image: "/images/pink-basket.png", tag: "Color extension", note: "Retail-ready color series" },
  { name: "Green Cat Comfort Plush", category: "Emotional Plush", image: "/images/real-products/green-cat-plush.jpg", tag: "Emotional value", note: "Desk and bedroom companion" },
  { name: "Long-Ear Mood Bunny", category: "Emotional Plush", image: "/images/real-products/emotion-bunny-plush.jpg", tag: "Character potential", note: "Expressive face and soft texture" },
  { name: "Flower Bag Charm", category: "Bag Accessories", image: "/images/real-products/flower-bag-charm.jpg", tag: "Bag charm trend", note: "Decorative clip-on accessory" },
  { name: "Mini Kitty Desk Buddy", category: "Desk Companion", image: "/images/real-products/mini-kitty-chair.jpg", tag: "Cute desk décor", note: "Mini collectible display style" },
  { name: "Light-Up Robot Toy", category: "Interactive Gift", image: "/images/real-products/light-up-robot.jpg", tag: "Gift innovation", note: "Light and movement development" },
  { name: "Custom Retail Gift Set", category: "OEM / ODM", image: "/images/real-products/catalog-hero.jpg", tag: "Full collection", note: "Shape, color, box and branding" },
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
                <Image src={p.image} alt={p.name} width={1200} height={900}/>
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
