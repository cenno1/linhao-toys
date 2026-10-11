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


export const puSourcingQuestions = [
  { question: "Can 500 pieces be split between two colors?", answer: "LINHAO requires at least 500 pieces per shape and 500 pieces per color. One shape in two colors therefore starts at 1,000 pieces: 500 of each color. Quote each shape and color separately." },
  { question: "What does a product photo or squeeze video confirm?", answer: "An actual sample photo shows the photographed shape and decoration. A squeeze video shows that sample's movement under the recorded conditions. Neither establishes a measured recovery time, paint lifespan or test certification for your new design. Approve those requirements on your finished sample." },
  { question: "Is a concept image the final production specification?", answer: "No. A concept image or 3D rendering communicates the proposed appearance. Final dimensions, colors, softness, scent, finish and packaging are confirmed on the physical sample and written approval record." },
];

export function PuSourcingFacts({ kind = "manufacturer" }: { kind?: "manufacturer" | "food" | "character" }) {
  const focus = kind === "food" ? "food-shaped PU squishy toys" : kind === "character" ? "PU character figures and brand mascots" : "original PU squishy designs";
  const facts = [
    ["Material", "PU (polyurethane) foam. These are non-edible toys."],
    ["Custom design", "Original food, character, animal and other shapes from customer artwork; dimensions, colors, softness or hardness, scent and decoration."],
    ["Minimum order", "500 pieces per shape AND 500 pieces per color."],
    ["Sampling", "12–15 days for sampling; sample shipment and buyer approval time are separate."],
    ["Bulk production", "25–30 days; confirm the schedule against the approved sample and order. Freight transit is separate."],
    ["Packaging", "Custom branded packaging, including retail boxes and blind-box formats; confirm the pack with the sample."],
    ["Final specification", "Dimensions, recovery target, finish, scent and packaging are agreed for the individual project. No universal size or recovery-time claim applies."],
  ];
  const steps = [
    ["Send the design brief", "Provide artwork, dimensions, quantity per shape and color, desired feel, scent, packaging and delivery destination."],
    ["Review the 3D rendering", "Check the outline, proportions and placement of artwork before physical sampling."],
    ["Make and ship the sample", "Sampling takes 12–15 days. Sample delivery is a separate stage."],
    ["Record sample approval", "Confirm dimensions, colors, squeeze feel, recovery, scent, decoration and packaging on the received sample. Record any revisions."],
    ["Confirm bulk production", "Confirm the approved specification and quantity, then plan the 25–30-day production period and freight separately."],
  ];
  return (
    <section id="pu-sourcing-facts" className="bg-white py-12 sm:py-16" aria-labelledby="pu-facts-heading">
      <div className="shell">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">LINHAO manufacturing facts</p>
        <h2 id="pu-facts-heading" className="mt-3 text-3xl font-black tracking-tight text-slate-950">Custom PU specifications at a glance</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">LINHAO develops {focus} from your artwork. Use these manufacturing terms to prepare a brief, then confirm the final product against a physical sample.</p>
        <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">
          {facts.map(([label, value]) => <div key={label} className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]"><dt className="font-bold text-slate-950">{label}</dt><dd className="m-0 leading-7 text-slate-600">{value}</dd></div>)}
        </dl>
        <p className="mt-4 text-sm leading-7 text-slate-600"><strong>TPR scope:</strong> TPR uses our existing square and other available molds only, with logo printing, colors, hand feel and packaging customization. New original shapes are offered through the PU development route.</p>
        <h3 className="mt-8 text-xl font-black text-slate-950">From artwork to an approved production sample</h3>
        <ol className="mt-4 grid gap-4 md:grid-cols-2">
          {steps.map(([title, text], index) => <li key={title} className="rounded-2xl bg-slate-50 p-5"><h4 className="font-bold text-slate-950">{index + 1}. {title}</h4><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></li>)}
        </ol>
        <h3 className="mt-8 text-xl font-black text-slate-950">How to read our product references</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5"><h4 className="font-bold">Actual customization cases</h4><p className="mt-2 text-sm leading-7 text-slate-600">The featured PU food and character pages include actual sample photos and squeeze videos. They show the recorded sample, rather than guaranteeing identical performance for every new design.</p><Link className="mt-3 inline-block text-sm font-bold text-blue-600" href="/products/ultra-slow-rising-realistic-pu-food-squishy">Food sample and video →</Link><br/><Link className="mt-2 inline-block text-sm font-bold text-blue-600" href="/products/premium-custom-pu-character-figure">Character sample and video →</Link></div>
          <div className="rounded-2xl border border-slate-200 p-5"><h4 className="font-bold">Concepts and edited images</h4><p className="mt-2 text-sm leading-7 text-slate-600">Concept renders and edited promotional images illustrate design directions. They do not establish a finished sample's size, surface finish or squeeze behavior. Check each product page's image and video captions.</p></div>
          <div className="rounded-2xl border border-slate-200 p-5"><h4 className="font-bold">Measured or tested results</h4><p className="mt-2 text-sm leading-7 text-slate-600">Ask for evidence tied to the exact sample, method and product version when a measured recovery time, durability result or compliance claim is required. A photo or a report for another product does not verify your new design.</p></div>
        </div>
        <p className="mt-5 text-xs text-slate-500">Manufacturing information reviewed October 11, 2026. Project-specific specifications require sample approval.</p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm font-bold text-blue-600"><Link href="/contact">Send artwork and quantities for a quote →</Link><Link href="/resources/custom-pu-squishy-paint-rubbing-off-guide">Painted detail and sample checks →</Link></div>
      </div>
    </section>
  );
}

export default function PuCustomBuyingGuide({ slug }: { slug: string }) {
  const guide = guides[slug];
  if (!guide) return null;
  return (
    <>
    <PuSourcingFacts kind={slug === "premium-custom-pu-character-figure" ? "character" : "food"} />
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
    </>
  );
}
