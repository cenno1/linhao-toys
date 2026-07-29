import Image from "next/image";

const workflowImages = [
  "/images/workflow/01-design-sampling.jpg",
  "/images/workflow/02-foam-mixing.jpg",
  "/images/workflow/03-molding-filling.jpg",
  "/images/workflow/04-printing-decoration.jpg",
  "/images/workflow/05-quality-inspection.jpg",
  "/images/workflow/06-packing-shipment.jpg",
];

const stages = [
  ["Design & sampling", "Artwork review, structure planning and sample confirmation."],
  ["Squishy production", "Molding, filling, curing, printing and surface finishing."],
  ["Plush development", "Pattern making, embroidery, sewing, filling and assembly."],
  ["Accessory assembly", "Key rings, chains, straps, cards and retail components."],
  ["Quality inspection", "Appearance, function, size, packing and order checks."],
  ["Packing & shipment", "Retail packing, carton control and export coordination."],
];

export default function FactoryStory() {
  return (
    <section id="factory" className="section v5-factory">
      <div className="shell">
        <div className="v5-section-head">
          <div>
            <span className="eyebrow">MANUFACTURING WORKFLOW</span>
            <h2>One supplier for multiple creative categories.</h2>
          </div>
          <p>
            Squishy, plush and gift projects follow different production methods. Our
            workflow keeps development organized from first artwork to final cartons.
          </p>
        </div>
        <div className="v5-stage-grid">
          {stages.map(([t, d], i) => (
            <article key={t}>
              <div className={`v5-stage-art art-${i + 1}`}>
                <Image
                  src={workflowImages[i]}
                  alt={t}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
