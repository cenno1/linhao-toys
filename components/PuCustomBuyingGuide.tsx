import Link from "next/link";

const guides: Record<string, { heading: string; intro: string; steps: { title: string; text: string }[]; related: string; relatedLabel: string }> = {
  "ultra-slow-rising-realistic-pu-food-squishy": {
    heading: "Custom food squishy manufacturing for your PU collection",
    intro: "Develop original food-shaped PU squishy toys from your references. The photographed samples and squeeze video show the surface details and recovery of these styles; these are actual customization cases. Your own design, hardness or softness, scent and finish are confirmed through sampling.",
    steps: [
      { title: "1. Define the food design", text: "Send food references or artwork, target dimensions, colors and quantity per style. Identify the textures and decorative details that matter most to your collection." },
      { title: "2. Approve feel and finish", text: "Compare a physical sample for softness, recovery speed, moist-feeling touch and painted details during squeezing. Agree on the sample before bulk production; the texture is a tactile effect, not edible food." },
      { title: "3. Confirm the retail program", text: "MOQ is 500 pieces per shape and 500 pieces per color. Confirm quantity per design, packaging artwork, barcode and destination requirements in the quotation. We prepare a 3D rendering from your artwork, make samples in 12–15 days and ship them for approval. Bulk production takes 25–30 days; delivery time is separate." },
    ],
    related: "/products/premium-custom-pu-character-figure",
    relatedLabel: "Compare custom PU character figures",
  },
  "premium-custom-pu-character-figure": {
    heading: "Custom character squishy manufacturing from your artwork",
    intro: "Create an original PU character or brand mascot with defined facial features, clothing lines and painted accents. The photo and video show a completed reference design; your character is developed against an approved sample.",
    steps: [
      { title: "1. Share your character brief", text: "Provide artwork you own or are authorized to use, front/side/back references, dimensions, colors and quantity per design. Mark the facial, clothing and accessory details to preserve." },
      { title: "2. Review the painted sample", text: "Check the sculpted outline, face alignment, color boundaries and small decorative details. Compare softness and recovery, and review the painted finish while squeezing before approving production." },
      { title: "3. Plan private-label packaging", text: "MOQ is 500 pieces per shape and 500 pieces per color. Discuss retail boxes, blind-box concepts, labels and assortment requirements. We prepare a 3D rendering from your artwork, make samples in 12–15 days and ship them for approval. Bulk production takes 25–30 days; delivery time is separate." },
    ],
    related: "/products/ultra-slow-rising-realistic-pu-food-squishy",
    relatedLabel: "Compare realistic PU food squishy toys",
  },
};

export default function PuCustomBuyingGuide({ slug }: { slug: string }) {
  const guide = guides[slug];
  if (!guide) return null;
  return (
    <section className="bg-blue-50/60 py-16 sm:py-20">
      <div className="shell">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Custom PU sourcing</span>
        <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-slate-950">{guide.heading}</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{guide.intro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {guide.steps.map((step) => (
            <article key={step.title} className="rounded-3xl border border-blue-100 bg-white p-6">
              <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-blue-600">
          <Link href="/custom-squishy-toy-manufacturer" className="hover:underline">Custom squishy manufacturer & quotation process →</Link>
          <Link href={guide.related} className="hover:underline">{guide.relatedLabel} →</Link>
          <Link href="/resources/custom-squishy-toy-logo-printing-packaging-guide" className="hover:underline">Logo & packaging guide →</Link>
          <Link href="#inquiry" className="hover:underline">Send your design for a custom quote →</Link>
        </div>
      </div>
    </section>
  );
}
