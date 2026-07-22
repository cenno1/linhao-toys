import SectionTitle from "./SectionTitle";

const products = [
  ["Glitter Series", "Glitter Bun Squishies", "Sparkling finishes, soft-touch textures and collectible colorways.", "01"],
  ["Character Series", "Animal & Kawaii Squishies", "Cute original characters developed for gifts, retail and promotions.", "02"],
  ["Brand Projects", "Licensed & IP Products", "Production support for branded characters and approved visual assets.", "03"],
  ["Full Customization", "OEM Custom Squishies", "From your sketch or reference to mold, sample, printing and packaging.", "04"],
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Featured capabilities"
          title="Products built around your market."
          text="Choose an existing product direction or develop a fully custom item with our team."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {products.map(([category, title, text, mark]) => (
            <article key={title} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-xl">
              <div className="absolute right-6 top-5 text-6xl font-black text-slate-200 group-hover:text-blue-100">{mark}</div>
              <p className="relative text-sm font-bold text-blue-600">{category}</p>
              <h3 className="relative mt-10 text-2xl font-black tracking-tight text-slate-950">{title}</h3>
              <p className="relative mt-3 max-w-lg leading-7 text-slate-600">{text}</p>
              <a href="/contact" className="relative mt-7 inline-flex font-bold text-slate-950 group-hover:text-blue-600">Discuss this product →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
