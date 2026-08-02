export const WHATSAPP_NUMBER = "8615088452259";

type WhatsAppMessageInput = {
  productName?: string;
  context?: "hero" | "product" | "general";
};

export function buildWhatsAppUrl({
  productName,
  context = "general",
}: WhatsAppMessageInput = {}): string {
  let message = "Hello LINHAO Toys, I am interested in your OEM squishy products.";

  if (context === "hero") {
    message =
      "Hello LINHAO Toys, I would like factory pricing for custom squishy OEM / wholesale.";
  } else if (context === "product" && productName) {
    message = `Hello LINHAO Toys, I would like a quote for: ${productName}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
