import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import { buildWhatsAppUrl, INQUIRY_EMAIL, WHATSAPP_NUMBER } from "@/lib/product-utils";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Request a Custom Toy Quote",
  description:
    "Send product references, quantity, destination market and packaging requirements to LINHAO Toys for an OEM or wholesale quotation.",
  keywords: ["custom toy quote", "squishy toy inquiry", "OEM toy quotation", "wholesale squishy quote", "contact LINHAO Toys"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Custom Toy Quote",
    description: "Send your product direction, quantity, market, packaging and timing for an OEM or wholesale project review.",
    url: "/contact",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Request a custom toy quotation from LINHAO Toys" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Custom Toy Quote",
    description: "Send your product direction, quantity, market, packaging and timing for an OEM or wholesale project review.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const buyerDetails = [
  "Product drawing, reference image or shareable link",
  "Custom OEM, wholesale or private-label project type",
  "Estimated quantity and quantity per design",
  "Preferred size, colors and material feel",
  "Target market, packaging and requested timeline",
];

const requestSteps = [
  ["Request review", "The submitted product, quantity, market and package details are organized into one sales inquiry."],
  ["Clarification", "The sales team may ask for missing dimensions, artwork, design count, material feel or delivery details."],
  ["Quotation path", "After the specification is clear, the next step may be a stock-product quote, custom sample plan or quantity-tier proposal."],
];

export default function ContactPage() {
  const pageUrl = absoluteUrl("/contact");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${pageUrl}#contact`,
      url: pageUrl,
      name: `Contact ${SITE_NAME}`,
      description: "Direct sales inquiry page for OEM, wholesale and private-label custom toy projects.",
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      contactType: "sales",
      email: INQUIRY_EMAIL,
      telephone: `+${WHATSAPP_NUMBER}`,
      url: pageUrl,
      availableLanguage: ["English", "Chinese"],
    },
  ];

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">Contact</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            Tell us about your custom toy project.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Include your product reference, target quantity, size, destination
            market and preferred packaging for a more useful first quotation.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
              Quote request
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              Send the essentials for your first quotation.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The form sends your brief securely to the sales inbox. Add a shareable
              artwork or product-reference link now; if delivery is unavailable,
              your email app opens with the same details as a fallback.
            </p>
            <div className="mt-8">
              <ProductInquiryForm productName="General OEM / wholesale inquiry" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-400">
                Faster project review
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight">
                Include these buyer details.
              </h2>
              <ul className="mt-7 space-y-4 text-slate-300">
                {buyerDetails.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="font-black text-blue-400">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                Direct contact
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Choose email for files and detailed specifications, or WhatsApp
                for a quick initial discussion.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${INQUIRY_EMAIL}`} className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white">
                  Email sales
                </a>
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-950">
                  WhatsApp
                </a>
              </div>
              <p className="mt-4 break-all text-sm text-slate-500">{INQUIRY_EMAIL}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">After submission</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950">
            What happens after you send the inquiry.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {requestSteps.map(([title, text], index) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ContactFloat />
    </main>
  );
}
