import { INQUIRY_EMAIL } from "@/lib/product-utils";

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
        href="https://wa.me/8615088452259?text=Hello%20LINHAO%20Toys,%20I%20am%20interested%20in%20your%20products."
        target="_blank"
        aria-label="WhatsApp LINHAO"
      >
        WhatsApp
      </a>
    </div>
  );
}
