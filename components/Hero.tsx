import Image from "next/image";
import { getHeroProducts } from "@/lib/product-utils";

const hero = getHeroProducts().map((product) => ({
  src: product.images.hero,
  alt: product.alt,
}));

export default function Hero() {
  return (
    <section className="v7-hero">
      <div className="shell v7-hero-grid">
        <div className="v7-copy">
          <span className="eyebrow">REAL PRODUCTS · TREND-LED OEM</span>
          <h1>Products buyers<br/><span>want to pick up.</span></h1>
          <p>Real LINHAO sample photography across glitter squishies, food shapes, mini sensory toys, plush gifts and bag accessories—supported by custom colors, faces, packaging and private label development.</p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#products">Browse real products</a>
            <a className="btn btn-outline btn-lg" href="mailto:sales@linhaotoys.com?subject=New%20OEM%20Project">Start an OEM project</a>
          </div>
          <div className="v7-proof">
            <div><b>500+</b><span>custom projects</span></div>
            <div><b>30+</b><span>export markets</span></div>
            <div><b>24h</b><span>quotation response</span></div>
          </div>
        </div>
        <div className="v7-collage">
          {hero.map((item, i) => (
            <figure className={`v7-shot shot-${i + 1}`} key={item.src}>
              <Image src={item.src} alt={item.alt} width={1200} height={900} priority={i < 2}/>
            </figure>
          ))}
          <div className="v7-market-badge"><b>HOT</b><span>Product<br/>Directions</span></div>
        </div>
      </div>
    </section>
  );
}
