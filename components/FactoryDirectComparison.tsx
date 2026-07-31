import Link from "next/link";

const sourcingLimits = [
  ["Limited product control", "Catalog-only sourcing can restrict shape, material and recovery options."],
  ["More communication layers", "Requests may pass through several parties before reaching production."],
  ["Unclear sample-to-bulk handoff", "A good sample still needs disciplined control during mass production."],
  ["Generic packaging support", "Standard packing may not fit retail, marketplace or gifting requirements."],
];

const factoryBenefits = [
  ["Development-led customization", "Shape, softness, color, print, scent and packaging are planned together."],
  ["Direct technical communication", "Discuss mold structure, materials and production details with one team."],
  ["Sample approval workflow", "Review and confirm the reference sample before mass production begins."],
  ["Production quality checks", "Appearance, function, packing and order details are checked during production."],
  ["Export project support", "Coordinate labeling, cartons, documentation and shipment requirements."],
];

export default function FactoryDirectComparison() {
  return (
    <section className="factory-direct-section">
      <div className="shell">
        <div className="factory-direct-heading">
          <span className="factory-direct-eyebrow">THE FACTORY-DIRECT ADVANTAGE</span>
          <h2>
            Trading-only sourcing vs. <em>direct toy development</em>
          </h2>
          <p>
            Custom stress toys need more than a product link. LINHAO connects design decisions with sampling,
            production and export preparation in one practical workflow.
          </p>
        </div>

        <div className="factory-direct-grid">
          <article className="comparison-card comparison-card-muted">
            <p className="comparison-label">TRADING-ONLY / CATALOG SOURCING</p>
            <ul>
              {sourcingLimits.map(([title, text]) => (
                <li key={title}>
                  <span className="comparison-icon comparison-icon-negative" aria-hidden="true">×</span>
                  <p><strong>{title}:</strong> {text}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="comparison-card comparison-card-featured">
            <span className="comparison-ribbon">BETTER CONTROL</span>
            <p className="comparison-label">LINHAO FACTORY-DIRECT</p>
            <ul>
              {factoryBenefits.map(([title, text]) => (
                <li key={title}>
                  <span className="comparison-icon comparison-icon-positive" aria-hidden="true">✓</span>
                  <p><strong>{title}:</strong> {text}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="factory-direct-action">
          <Link className="factory-direct-button" href="/contact">Discuss Your Custom Stress Toy →</Link>
        </div>
      </div>
    </section>
  );
}
