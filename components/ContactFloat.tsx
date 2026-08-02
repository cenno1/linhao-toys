import { INQUIRY_EMAIL } from "@/lib/product-utils";
import { buildWhatsAppUrl } from "@/lib/contact-links";

export default function ContactFloat() {
  return (
    <div className="contact-float">
      <a href={`mailto:${INQUIRY_EMAIL}`} aria-label="Email LINHAO">
        Email
      </a>

      <a href="/contact" className="quote">
        Get Quote
      </a>

      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp LINHAO"
      >
        WhatsApp
      </a>
    </div>
  );
}
