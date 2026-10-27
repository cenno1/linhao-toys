import Link from "next/link";

const questions = [
  {
    question: "What can be customized?",
    answer:
      "PU projects support original food, character and animal shapes, dimensions, colors, softness or hardness, optional fragrance, decoration and packaging. The listed silicone product supports custom shapes and packaging. TPR uses existing outer-body molds; supported options include colors, logo printing, hand feel, packaging and product-specific internal accessories. Confirm the scope against the selected product and physical sample.",
  },
  {
    question: "How long does sampling take?",
    answer:
      "Custom PU sampling takes 12–15 days. Sample shipment, buyer approval and revisions are separate. Bulk production takes 25–30 days after sample approval; confirm the order schedule and freight transit separately. Silicone, TPR and other product schedules are quoted for the exact project.",
  },
  {
    question: "Can you support low MOQ projects?",
    answer:
      "Custom PU MOQ is 500 pieces per shape AND per color: one shape in two colors starts at 1,000 pieces. The listed custom silicone squishy starts at 1,000 pieces, with design and color allocation confirmed in the quotation. The specific TPR squishy with custom 3D accessories starts at 2,000 pieces; this is not a universal TPR minimum. Check the material and MOQ comparison for the matching product.",
  },
  {
    question: "How do we confirm softness, fragrance and slow recovery?",
    answer:
      "Send a hand-feel reference and approve the decorated, packed physical sample. No added fragrance does not guarantee zero material or packaging odor. Agree a recovery test method and target for the specific PU design, then check surface tack, paint wear and packaging contact. Concept renders show design direction; measured recovery or durability claims need results tied to the actual sample.",
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
          <p className="mt-4">
            <Link href="/ai-sourcing-profile" className="font-bold text-blue-600 hover:underline">
              Compare PU, silicone and TPR materials &amp; MOQs →
            </Link>
          </p>
          <p className="mt-4">
            <Link href="/resources/scented-vs-unscented-squishy-toy-odor-control-guide" className="font-bold text-blue-600 hover:underline">
              No-added-fragrance and sample odor checks →
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
