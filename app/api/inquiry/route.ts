import { INQUIRY_EMAIL } from "@/lib/product-utils";

type InquiryPayload = {
  productName?: string;
  company?: string;
  email?: string;
  quantity?: string;
  market?: string;
  packaging?: string;
  requirements?: string;
  website?: string;
};

const clean = (value: unknown, max = 1000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL;
  const toEmail = process.env.INQUIRY_TO_EMAIL || INQUIRY_EMAIL;

  if (!apiKey || !fromEmail) {
    return Response.json(
      { error: "Email delivery is not configured." },
      { status: 503 },
    );
  }

  let payload: InquiryPayload;
  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden honeypot field: bots commonly fill it, real visitors do not.
  if (clean(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const data = {
    productName: clean(payload.productName, 200),
    company: clean(payload.company, 200),
    email: clean(payload.email, 320),
    quantity: clean(payload.quantity, 100),
    market: clean(payload.market, 200),
    packaging: clean(payload.packaging, 500),
    requirements: clean(payload.requirements, 3000),
  };

  if (
    !data.productName ||
    !data.company ||
    !data.quantity ||
    !data.market ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    return Response.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  const rows = [
    ["Product / project", data.productName],
    ["Company / brand", data.company],
    ["Buyer email", data.email],
    ["Estimated quantity", data.quantity],
    ["Target market", data.market],
    ["Preferred packaging", data.packaging || "Not provided"],
    ["Additional requirements", data.requirements || "Not provided"],
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: data.email,
      subject: `Website inquiry: ${data.productName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:720px;margin:auto">
          <h1 style="color:#0b1d43">New LINHAO website inquiry</h1>
          ${rows
            .map(
              ([label, value]) =>
                `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
            )
            .join("")}
        </div>
      `,
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: "Email delivery failed. Please use the email option." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
