import Link from "next/link";

const HERO_VIDEO = "/videos/oem-market-squishy-showcase.mp4";
const HERO_POSTER = "/images/products/glitter-bao-bun/hero.png";

export default function Hero() {
  return (
    <section className="v7-hero v7-hero-video">
      <div className="v7-hero-bg" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO} type="video/mp4" media="(min-width: 769px)" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="v7-hero-bg-fallback"
          src={HERO_POSTER}
          alt=""
        />
      </div>
      <div className="v7-hero-overlay" aria-hidden="true" />

      <div className="shell v7-hero-content">
        <div className="v7-copy">
          <span className="eyebrow">REAL PRODUCTS · TREND-LED OEM</span>
          <h1>
            Products buyers
            <br />
            <span>want to pick up.</span>
          </h1>
          <p>
            Real LINHAO sample photography across glitter squishies, food shapes, mini
            sensory toys, plush gifts and bag accessories—supported by custom colors,
            faces, packaging and private label development.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#products">
              Browse real products
            </a>
            <Link
              className="btn btn-outline btn-lg v7-hero-btn-outline"
              href="/contact"
            >
              Start an OEM project
            </Link>
          </div>
          <div className="v7-proof">
            <div>
              <b>OEM / ODM</b>
              <span>development support</span>
            </div>
            <div>
              <b>Custom</b>
              <span>products & packaging</span>
            </div>
            <div>
              <b>Export</b>
              <span>buyer coordination</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
