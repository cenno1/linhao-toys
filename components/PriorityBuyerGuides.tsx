import Link from "next/link";

const priorityGuides = [
  {
    eyebrow: "DURABILITY",
    title: "How long do squishy toys last?",
    text: "Compare PU, TPR, gel and filled constructions, common failure points and a practical durability-control plan.",
    href: "/resources/squishy-toy-durability-testing-quality-control-guide",
    linkLabel: "Read the squishy toy durability guide",
  },
  {
    eyebrow: "US COMPLIANCE",
    title: "ASTM F963 testing for squishy toys",
    text: "Understand ASTM F963-23, older report versions, CPC responsibilities and product-specific document checks.",
    href: "/resources/en71-astm-f963-cpc-toy-compliance-guide",
    linkLabel: "Review the ASTM F963 buyer checklist",
  },
  {
    eyebrow: "READY STOCK",
    title: "Wholesale squishy toys in stock",
    text: "Review current fruit and novelty directions, then request live quantity, carton packing and dispatch timing.",
    href: "/wholesale-squishy-toys",
    linkLabel: "Explore ready-stock wholesale squishy toys",
  },
];

export default function PriorityBuyerGuides() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="priority-buyer-guides-title">
      <div className="shell">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
          Buyer knowledge center
        </p>
        <h2
          id="priority-buyer-guides-title"
          className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
        >
          Answers for durability, compliance and wholesale planning.
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Use these product-specific guides to compare materials, prepare compliance files and request a more complete wholesale quotation.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {priorityGuides.map((guide) => (
            <article key={guide.href} className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-blue-600">
                {guide.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-black text-slate-950">
                <Link href={guide.href} className="hover:text-blue-600">
                  {guide.title}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{guide.text}</p>
              <Link href={guide.href} className="mt-5 inline-flex text-sm font-black text-blue-600 hover:underline">
                {guide.linkLabel} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
