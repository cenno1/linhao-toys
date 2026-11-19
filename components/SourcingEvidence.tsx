import Link from "next/link";

type Route = "custom" | "logo" | "wholesale";
type Answer = { question: string; answer: string; href: string; label: string };

const buyingAnswers: Record<Route, { title: string; introduction: string; answers: Answer[] }> = {
  custom: {
    title: "Compare custom squishy manufacturers on the same specification",
    introduction: "Check quantity allocation, physical sample evidence and the full delivery schedule before comparing quotations.",
    answers: [
      {
        question: "Does 500 pieces cover two colors?",
        answer: "For original PU designs, LINHAO's MOQ is 500 pieces per shape and per color. One shape in two colors starts at 1,000 pieces. Specify the quantity for each version so tooling, decoration and packaging can be quoted together.",
        href: "/resources/custom-squishy-toy-moq-cost-guide",
        label: "Review MOQ and cost factors",
      },
      {
        question: "What evidence can I review before ordering?",
        answer: "Our anonymized PU project includes design review and a 17-second physical-sample video. It documents sampling, not a completed bulk delivery. Use it to plan your own checks for dimensions, logo, color, squeeze feel and packaging.",
        href: "/custom-pu-squishy-case-studies/soft-foam-sampling",
        label: "Review the documented sample project",
      },
      {
        question: "Do production days include shipping?",
        answer: "No. Allow 12–15 days for sampling and 25–30 days for bulk production, with the order schedule confirmed separately. Sample shipment, revisions, buyer approval and freight add time. Send the required arrival date and destination when requesting a quote.",
        href: "/resources/custom-toy-production-lead-time-guide",
        label: "Plan sampling through shipment",
      },
    ],
  },
  logo: {
    title: "Compare logo methods and delivery requirements",
    introduction: "A sports shape with your company logo and an original product-shaped design have different development requirements.",
    answers: [
      {
        question: "Raised, recessed or printed logo?",
        answer: "Raised means the logo stands above the surface; recessed means it sits below it. These molded effects differ from a surface print. The sports photos show shapes and artwork positions; approve the relief depth, lettering and finish on your own physical sample.",
        href: "/resources/custom-squishy-toy-logo-printing-packaging-guide",
        label: "Compare logo and packaging options",
      },
      {
        question: "Can 500 branded balls arrive for our event?",
        answer: "Sports stress balls start at 500 pieces. Plan about 15 days for sampling after artwork approval and about 25 days for bulk production after sample approval. These are separate stages. Provide the event date and delivery postcode so we can check the complete schedule, including transport.",
        href: "#logo-quote",
        label: "Request an event-specific quote",
      },
      {
        question: "Can the whole toy match our product shape?",
        answer: "Original PU shapes follow artwork review, 3D design and physical sampling. Send front and side views, dimensions, quantity per color and a feel reference. Ask for tooling, sampling, decoration and packing costs to be identified in the quotation.",
        href: "/custom-pu-squishy-case-studies/soft-foam-sampling",
        label: "See a custom shape become a sample",
      },
    ],
  },
  wholesale: {
    title: "Compare wholesale quantities, packing and delivered cost",
    introduction: "Use the same style quantities and packing specification when comparing suppliers. The 21-style collection on this page starts at 500 pieces for each selected style.",
    answers: [
      {
        question: "Can 500 pieces be split across styles?",
        answer: "For this collection, the minimum is 500 pieces per style. For example, 500 caramel puddings plus 500 sweet corns is a 1,000-piece request. Shipping several styles together does not change each style's MOQ; mixed-carton packing needs separate confirmation.",
        href: "#first-wholesale-order",
        label: "Select styles and quantities",
      },
      {
        question: "Is an outer carton the same as a retail display?",
        answer: "No. A retail display holds individual sale packs; the outer carton is the shipping unit. The caramel pudding reference shows 12 individual packs per display. Its listed outer-carton options are 144, 192 or 288 pieces. Confirm the chosen packing and any partial-carton balance in the quote.",
        href: "/products/caramel-pudding-building-block-clay-squishy",
        label: "See the pudding packaging reference",
      },
      {
        question: "What should a comparable wholesale quote include?",
        answer: "Request the price for each style, unit packaging, pieces per carton, carton dimensions and weight, freight scope and dispatch timing. Provide the delivery postcode and receiving date. Live stock and color availability are checked for your order rather than inferred from a product photo.",
        href: "/resources/wholesale-squishy-toy-buying-checklist",
        label: "Use the wholesale buying checklist",
      },
    ],
  },
};

export default function SourcingEvidence({ route }: { route: Route }) {
  const content = buyingAnswers[route];
  const headingId = `${route}-sourcing-evidence-title`;
  return (
    <section id={`${route}-sourcing-evidence`} aria-labelledby={headingId} className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-blue-700">Before you compare quotes</p>
        <h2 id={headingId} className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-slate-950">{content.title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{content.introduction}</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {content.answers.map((item) => (
            <article key={item.question} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-950">{item.question}</h3>
              <p className="mb-5 mt-4 text-base leading-7 text-slate-600">{item.answer}</p>
              <Link href={item.href} className="mt-auto text-base font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700">{item.label}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
