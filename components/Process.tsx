const process = [
  ["01", "Project Review", "We review your concept, target market, size, finish and packaging needs."],
  ["02", "Sample Development", "The team develops and adjusts samples before production approval."],
  ["03", "Mass Production", "Production follows the approved sample and confirmed specifications."],
  ["04", "Inspection & Delivery", "Final checks, packing and shipping are coordinated for your order."],
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-14">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">From idea to shipment</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            A clear custom manufacturing process.
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {process.map(([num, title, text]) => (
              <div key={num} className="rounded-3xl bg-slate-50 p-6">
                <div className="text-sm font-black text-blue-600">{num}</div>
                <h3 className="mt-8 text-xl font-extrabold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
