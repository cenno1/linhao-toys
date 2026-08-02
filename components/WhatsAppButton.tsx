import { buildWhatsAppUrl } from "@/lib/contact-links";

type WhatsAppButtonProps = {
  productName?: string;
  context?: "hero" | "product" | "general";
  className?: string;
};

const labels = {
  hero: "→ WhatsApp for factory pricing",
  product: "→ Quote this product on WhatsApp",
  general: "WhatsApp",
} as const;

export default function WhatsAppButton({
  productName,
  context = "general",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl({ productName, context })}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${context === "hero" ? "btn-whatsapp-hero btn-lg" : ""} ${context === "product" ? "btn-whatsapp-product" : ""} ${className}`.trim()}
    >
      {labels[context]}
    </a>
  );
}
