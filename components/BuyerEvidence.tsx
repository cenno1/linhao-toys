import Link from "next/link";

const documents = [
  {
    label: "EN71 test report",
    scope: "Available report for the documented squeeze-toy product and tested scope.",
    href: "/certificates/en71-squeeze-toy-linhao.pdf",
  },
  {
    label: "ASTM F963-23 test report",
    scope: "Available report for the identified glitter-squishy product and tested scope.",
    href: "/certificates/astm-f963-23-linhao.pdf",
  },
  {
    label: "Children's Product Certificate",
    scope: "Available CPC for the documented tested product identified in the certificate.",
    href: "/certificates/cpc-linhao.pdf",
  },
];

const sourceLinks = [
  {
    title: "Product evidence",
    text: "Review product photographs, customization directions, specifications and inquiry details.",
    href: "/products",
  },
  {
    title: "Buyer guidance",
    text: "Use material, sampling, MOQ, packaging and supplier-evaluation checklists.",
    href: "/resources",
  },
  {
    title: "Direct project contact",
    text: "Send the exact design, quantity, market, package and timing for product-specific review.",
    href: "/contact",
  },
];

export default function BuyerEvidence() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
          Buyer evidence center
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              Inspect the source before making a sourcing decision.
            </h2>
          </div>
          <p className="leading-7 text-slate-600">
            These files and pages provide evidence buyers can review directly. Existing reports
            apply only to the products and scope identified in each document; a new product may
            require its own testing and documentation plan.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {documents.map((document) => (
            <article key={document.href} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">Document</p>
              <h3 className="mt-4 text-xl font-black text-slate-950">{document.label}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{document.scope}</p>
              <a
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-black text-blue-600 hover:underline"
              >
                View source PDF →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {sourceLinks.map((source) => (
            <Link key={source.href} href={source.href} className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6">
              <b className="text-lg text-slate-950">{source.title}</b>
              <span className="mt-3 block text-sm leading-6 text-slate-600">{source.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
