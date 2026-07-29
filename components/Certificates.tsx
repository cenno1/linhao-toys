import { INQUIRY_EMAIL } from "@/lib/product-utils";
import { complianceDocs } from "@/lib/compliance-docs";

export default function Certificates() {
  return (
    <section id="compliance" className="section v5-compliance">
      <div className="shell v5-compliance-grid">
        <div>
          <span className="eyebrow">RESPONSIBLE SOURCING</span>
          <h2>Compliance documents for confident purchasing.</h2>
          <p>
            Available documentation includes EN71 testing for squeeze toys (EU). ASTM
            F963-23 and CPC copies for additional programs can be shared on request after
            product and destination market are confirmed.
          </p>
          <div className="compliance-tags">
            <span>EN71</span>
            <span>ASTM F963-23</span>
            <span>CPC</span>
            <span>Material Testing</span>
            <span>Batch Control</span>
          </div>
        </div>
        <div className="v5-docs">
          {complianceDocs.map((doc) =>
            doc.available && doc.href ? (
              <a key={doc.id} href={doc.href} target="_blank" rel="noopener noreferrer">
                <small>{doc.kind}</small>
                <b>{doc.label}</b>
                <span>{doc.detail}</span>
                <em>View PDF →</em>
              </a>
            ) : (
              <div key={doc.id} className="v5-doc-placeholder">
                <small>{doc.kind}</small>
                <b>{doc.label}</b>
                <span>{doc.detail}</span>
                <a href={`mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(`${doc.label} request`)}`}>
                  Request copy →
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
