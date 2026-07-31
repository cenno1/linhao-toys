const buyerValues = [
  {
    title: "Clear development feedback",
    text: "Buyers need fast answers on whether an idea can be molded, printed, packed and produced at the target quantity.",
    role: "For brand & product teams",
    market: "OEM",
  },
  {
    title: "Consistent bulk production",
    text: "Approved color, softness, decoration and recovery performance should remain controlled from sample to shipment.",
    role: "For importers & distributors",
    market: "B2B",
  },
  {
    title: "Retail-ready execution",
    text: "Barcode labels, inner packs, display boxes and export cartons are considered as part of the product—not an afterthought.",
    role: "For retailers & online sellers",
    market: "GLOBAL",
  },
];

export default function BuyerValue() {
  return (
    <section className="buyer-value-section">
      <div className="shell">
        <div className="buyer-value-heading">
          <span className="factory-direct-eyebrow">WHAT BUYERS VALUE</span>
          <h2>Built around the needs of <em>professional buyers</em></h2>
          <p>These are the practical priorities our custom stress-toy workflow is designed to support.</p>
        </div>

        <div className="buyer-value-grid">
          {buyerValues.map((item, index) => (
            <article key={item.title} className="buyer-value-card">
              <div className="buyer-stars" aria-label="Five key service priorities">★★★★★</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="buyer-value-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{item.role}</strong><small>Custom stress toy projects</small></div>
                <b>{item.market}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
