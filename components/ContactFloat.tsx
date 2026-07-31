import { buildWhatsAppUrl, INQUIRY_EMAIL } from "@/lib/product-utils";
import TrackedLink from "@/components/TrackedLink";

export default function ContactFloat() {
  return (
    <div className="contact-float">
      <TrackedLink href={`mailto:${INQUIRY_EMAIL}`} ariaLabel="Email LINHAO" method="email" location="floating_contact">
        Email
      </TrackedLink>

      <TrackedLink href="/contact" className="quote" method="quote" location="floating_contact">
        Get Quote
      </TrackedLink>

      <TrackedLink
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="WhatsApp LINHAO"
        method="whatsapp"
        location="floating_contact"
      >
        WhatsApp
      </TrackedLink>
    </div>
  );
}
