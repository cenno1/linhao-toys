import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { INQUIRY_EMAIL } from "@/lib/product-utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How LINHAO Toys handles inquiry information and optional website analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <section className="privacy-page">
        <div className="shell privacy-copy">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy Policy</h1>
          <p className="privacy-updated">Last updated: August 20, 2026</p>

          <h2>Information we receive</h2>
          <p>
            When you request a quotation, we receive the details you choose to
            provide, such as your name, company, email address, target quantity,
            destination market, packaging needs and project requirements.
          </p>
          <p>
            If you allow optional analytics, Google Analytics may collect
            information about visits and interactions, including pages viewed,
            approximate location, device and browser information, and selected
            contact actions. Analytics storage remains denied until you allow it.
          </p>
          <p>
            When you send an inquiry, we attach the current form page and a
            randomly generated lead ID to help identify the request. If analytics
            is allowed, we may also attach the first landing page, referring
            website hostname and campaign parameters to connect the inquiry with
            the corresponding website event. We do not store this optional
            session-attribution data when analytics is declined.
          </p>

          <h2>How we use information</h2>
          <p>
            We use inquiry information to review projects, prepare quotations,
            answer questions and manage potential or existing business
            relationships. Analytics data helps us understand which products and
            buyer resources are useful and improve the website.
          </p>

          <h2>Service providers</h2>
          <p>
            We use service providers including Vercel for website hosting, Resend
            for inquiry email delivery and Google Analytics for optional website
            measurement. These providers process information to deliver their
            services under their own terms and privacy commitments.
          </p>

          <h2>Retention and choices</h2>
          <p>
            We keep information only for as long as reasonably needed to handle
            inquiries, maintain business records and meet applicable legal
            obligations. You can accept, decline or later change optional analytics
            using “Privacy settings” on this website.
          </p>

          <h2>Contact us</h2>
          <p>
            For privacy questions or a request concerning information you
            submitted, email <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

