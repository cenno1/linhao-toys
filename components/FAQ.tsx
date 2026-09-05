import Link from "next/link";

const questions = [
  {
    question: "What can be customized?",
    answer:
      "Shape, dimensions, softness, color, glitter effect, face artwork, logo, labels and packaging can be developed according to the project.",
  },
  {
    question: "How long does sampling take?",
    answer:
      "For custom PU squishy projects, our current sampling time is 20 days. Sampling for other materials and product types is confirmed with the project brief. Custom PU bulk production typically takes 25–30 days after sample approval; shipping time is confirmed separately.",
  },
  {
    question: "Can you support low MOQ projects?",
    answer:
      "Our typical custom PU squishy MOQ starts at 500 pieces. Other products and ready-stock orders have their own quantity requirements. Final MOQ is confirmed against the design, material, decoration and packaging.",
  },
  {
    question: "Which markets do you support?",
    answer:
      "We work with international buyers and can coordinate common export documents and shipping methods. Final compliance depends on the product and destination market.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section className="section section-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="shell faq-grid">
        <div>
          <span className="eyebrow">Buyer FAQ</span>
          <h2>Answers before you send the first inquiry.</h2>
          <p className="mt-5">
            <Link href="/custom-pu-squishy-manufacturer" className="font-bold text-blue-600 hover:underline">
              Custom PU MOQ, mold fee and sampling details →
            </Link>
          </p>
        </div>
        <div>
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
