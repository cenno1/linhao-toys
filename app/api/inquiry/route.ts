import { INQUIRY_EMAIL } from "@/lib/product-utils";

type InquiryPayload = {
  productName?: string;
  company?: string;
  email?: string;
  projectType?: string;
  quantity?: string;
  market?: string;
  timeline?: string;
  packaging?: string;
  referenceUrl?: string;
  requirements?: string;
  leadId?: string;
  sourcePage?: string;
  landingPage?: string;
  referrerHost?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
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
    projectType: clean(payload.projectType, 200),
    quantity: clean(payload.quantity, 100),
    market: clean(payload.market, 200),
    timeline: clean(payload.timeline, 200),
    packaging: clean(payload.packaging, 500),
    referenceUrl: clean(payload.referenceUrl, 1000),
    requirements: clean(payload.requirements, 3000),
    leadId: clean(payload.leadId, 100),
    sourcePage: clean(payload.sourcePage, 500),
    landingPage: clean(payload.landingPage, 500),
    referrerHost: clean(payload.referrerHost, 200),
    utmSource: clean(payload.utmSource, 200),
    utmMedium: clean(payload.utmMedium, 200),
    utmCampaign: clean(payload.utmCampaign, 200),
  };

  if (
    !data.productName ||
    !data.company ||
    !data.projectType ||
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
    ["Lead ID", data.leadId || "Not available"],
    ["Product / project", data.productName],
    ["Source page", data.sourcePage || "Not available"],
    ["Landing page", data.landingPage || "Not available"],
    ["Referrer", data.referrerHost || "Not available"],
    ["Campaign", data.utmCampaign || "Not available"],
    ["UTM source / medium", `${data.utmSource || "Not available"} / ${data.utmMedium || "Not available"}`],
    ["Company / brand", data.company],
    ["Buyer email", data.email],
    ["Project type", data.projectType],
    ["Estimated quantity", data.quantity],
    ["Target market", data.market],
    ["Requested timeline", data.timeline || "Not provided"],
    ["Preferred packaging", data.packaging || "Not provided"],
    ["Artwork / reference link", data.referenceUrl || "Not provided"],
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
      subject: `Website inquiry${data.leadId ? ` [${data.leadId.slice(0, 8)}]` : ""}: ${data.productName}`,
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

