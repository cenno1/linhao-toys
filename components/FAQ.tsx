import Link from "next/link";
import { faqItems, homepageFaqItems } from "@/lib/faq";

export default function FAQ() {
  return (
    <section className="section section-soft">
      <div className="shell faq-grid">
        <div>
          <span className="eyebrow">Buyer FAQ</span>
          <h2>Answers before you send the first inquiry.</h2>
          <Link href="/faq" className="mt-5 inline-flex text-sm font-black text-blue-600 hover:underline">
            View all {faqItems.length} FAQs →
          </Link>
        </div>
        <div>
          {homepageFaqItems.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span>+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
