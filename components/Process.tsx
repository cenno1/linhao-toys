const process = [
  ["01", "Design & Sampling", "Professional product design, artwork review and prototype development before production."],
  ["02", "Material Preparation", "Careful material selection and preparation to support safe and consistent products."],
  ["03", "Squishy Production", "Experienced production teams for custom squishy toys, stress toys and creative products."],
  ["04", "Assembly & Finishing", "Custom colors, printing, accessories and finishing details based on your requirements."],
  ["05", "Quality Inspection", "Strict quality control checks before shipment to ensure stable product quality."],
  ["06", "Packing & Shipment", "Professional packaging solutions and worldwide shipping support for global buyers."],
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-14">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">
            Manufacturing Workflow
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            From concept to mass production, one reliable OEM partner.
          </h2>
          <p className="mt-5 max-w-3xl text-slate-600">
            LINHAO supports global brands with complete custom toy development,
            production and delivery solutions.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(([n, t, d]) => (
              <article key={n} className="rounded-3xl border border-slate-200 p-6">
                <span className="text-sm font-black text-blue-600">{n}</span>
                <h3 className="mt-4 text-xl font-bold text-slate-950">{t}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
