const questions = [
  {
    question: "What can be customized?",
    answer:
      "Shape, dimensions, softness, color, glitter effect, face artwork, logo, labels and packaging can be developed according to the project.",
  },
  {
    question: "How long does sampling take?",
    answer:
      "Simple projects may be sampled in about 3–7 days after details are confirmed. Complex structures may require additional development time.",
  },
  {
    question: "Can you support low MOQ projects?",
    answer:
      "MOQ depends on mold, material, printing and packaging requirements. We will recommend the most practical production plan after reviewing the design.",
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
