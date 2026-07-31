const workflowImages = [
  "/images/workflow/01-design-sampling-premium.jpg",
  "/images/workflow/02-material-preparation-premium.jpg",
  "/images/workflow/03-molding-forming-premium.jpg",
  "/images/workflow/04-printing-assembly-premium.jpg",
  "/images/workflow/05-quality-inspection-premium.jpg",
  "/images/workflow/06-packing-export-premium.jpg",
];

const stages = [
  ["Product design & sampling", "Artwork, materials and prototypes aligned before production."],
  ["Material preparation", "Controlled preparation for the approved color, feel and finish."],
  ["Molding & forming", "Consistent shaping based on the confirmed product specification."],
  ["Printing & assembly", "Surface details, accessories and components finished with care."],
  ["Quality inspection", "Appearance, dimensions, function and finish checked before packing."],
  ["Packing & export", "Retail presentation, carton control and shipment preparation."],
];

export default function FactoryStory() {
  return (
    <section id="factory" className="section v5-factory">
      <div className="shell">
        <div className="v5-section-head">
          <div>
            <span className="eyebrow">MANUFACTURING WORKFLOW</span>
            <h2>A clear manufacturing path from concept to shipment.</h2>
          </div>
          <p>
            A disciplined six-stage workflow keeps product details, approved samples,
            quality expectations and export preparation aligned.
            <small className="mt-3 block text-xs text-slate-400">
              Workflow visualizations; equipment and production setup vary by project.
            </small>
          </p>
        </div>
        <div className="v5-stage-grid">
          {stages.map(([t, d], i) => (
            <article key={t}>
              <div className={`v5-stage-art art-${i + 1}`}>
                <Image
                  src={workflowImages[i]}
                  alt={`${t} workflow visualization`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  className="object-cover"
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
import Image from "next/image";
