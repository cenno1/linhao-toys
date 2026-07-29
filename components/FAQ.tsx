import { faqItems } from "@/lib/faq";

export default function FAQ() {
  return (
    <section className="section section-soft">
      <div className="shell faq-grid">
        <div>
          <span className="eyebrow">Buyer FAQ</span>
          <h2>Answers before you send the first inquiry.</h2>
        </div>
        <div>
          {faqItems.map((item) => (
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
