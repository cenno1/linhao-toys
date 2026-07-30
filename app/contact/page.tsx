import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloat from "@/components/ContactFloat";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import { buildWhatsAppUrl, INQUIRY_EMAIL } from "@/lib/product-utils";

export const metadata: Metadata = {
  title: "Request a Custom Toy Quote",
  description:
    "Send product references, quantity, destination market and packaging requirements to LINHAO Toys for an OEM or wholesale quotation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <Header />
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
              The form opens a prepared email on your device. You can attach
              drawings, reference images or packaging artwork before sending.
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
                <li>✓ Product drawing or reference image</li>
                <li>✓ Estimated order quantity</li>
                <li>✓ Preferred size, colors and material feel</li>
                <li>✓ Target market and delivery country</li>
                <li>✓ Packaging format and required timeline</li>
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
      <Footer />
      <ContactFloat />
    </main>
  );
}
