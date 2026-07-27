import Image from "next/image";
import { buildProductInquiryMailto } from "@/lib/product-utils";
import { products } from "@/lib/products";

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
            <article className="v7-card" key={p.slug}>
              <div className="v7-photo">
                <Image src={p.images.hero} alt={p.alt ?? p.name} width={1200} height={900}/>
                <b>{p.tag}</b><em>{String(i + 1).padStart(2, "0")}</em>
              </div>
              <div className="v7-card-copy">
                <span>{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.note}</p>
                <a href={buildProductInquiryMailto(p.name)}>Request price & samples →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
