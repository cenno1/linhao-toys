import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/product-utils";

export default function CTA() {
  return (
    <section className="section">
      <div className="shell v5-cta">
        <div>
          <span>START YOUR NEXT COLLECTION</span>
          <h2>Need squishy toys, plush charms or emotional gifts?</h2>
          <p>
            Send your reference, target quantity, destination market and packaging
            idea. We will help organize the next development step.
          </p>
          <p className="mt-3 text-sm opacity-80">
            Include these four details for a more useful first quotation.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="btn btn-white" href="/contact">
            Request a Quote
          </Link>
          <a
            className="btn border border-white/40 text-white"
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
