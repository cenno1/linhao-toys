import SectionTitle from "./SectionTitle";

const items = [
  ["Factory Support", "Direct communication from sampling through production."],
  ["OEM & ODM", "Customization for shape, color, scent, print and packaging."],
  ["Quality Control", "Production checks and documentation support for export projects."],
  ["Fast Sampling", "Efficient sample development and revision for new designs."],
  ["Scalable Orders", "Support for test orders, repeat orders and larger campaigns."],
  ["Worldwide Service", "English communication and international shipping coordination."],
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Why LINHAO"
            title="A practical partner for custom toy projects."
            text="We focus on communication, workable solutions and stable execution so your project can move from idea to finished product with fewer surprises."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-sm font-black">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
