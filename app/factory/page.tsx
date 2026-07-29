import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Squishy Toy Factory Process",
  description:
    "See how LINHAO Toys handles material prep, molding, finishing, QC, packing and export coordination for OEM squishy production.",
  path: "/factory",
});

const workflowImages = [
  "/images/workflow/01-design-sampling.jpg",
  "/images/workflow/02-foam-mixing.jpg",
  "/images/workflow/03-molding-filling.jpg",
  "/images/workflow/04-printing-decoration.jpg",
  "/images/workflow/05-quality-inspection.jpg",
  "/images/workflow/06-packing-shipment.jpg",
];

const cards = [
  [
    "Material Preparation",
    "Materials and project specifications are prepared according to the confirmed order.",
  ],
  [
    "Molding & Forming",
    "Products are formed using the approved shape and construction.",
  ],
  [
    "Finishing & Printing",
    "Surface effects, colors, faces and logo details are applied.",
  ],
  [
    "Quality Checks",
    "Appearance, function and packaging are checked during production.",
  ],
  [
    "Packing",
    "Products are packed according to the approved retail or shipping specification.",
  ],
  [
    "Export Coordination",
    "Carton information and shipping requirements are prepared for delivery.",
  ],
];

export default function Page() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">
            Factory process
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            Production support designed for reliable repeat orders.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Our workflow keeps approved samples, specifications, packaging requirements and
            delivery expectations aligned from first artwork to export cartons.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workflowImages.map((src, index) => (
              <figure
                key={src}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={src}
                  alt={cards[index][0]}
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-black text-slate-950">{cards[index][0]}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {cards.map(([title, text], index) => (
            <article
              key={title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-8 text-2xl font-black tracking-tight text-slate-950">
                {title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Quality & export capability
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-black uppercase tracking-[0.08em] text-slate-500">
                    Area
                  </th>
                  <th className="px-4 py-3 font-black uppercase tracking-[0.08em] text-slate-500">
                    What buyers can expect
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "In-process QC",
                    "Material checks, appearance review and function testing during production",
                  ],
                  [
                    "Pre-shipment check",
                    "Packing, labeling and quantity verification against approved sample",
                  ],
                  [
                    "Documentation",
                    "Commercial invoice, packing list and carton marks coordinated for export",
                  ],
                  [
                    "Compliance support",
                    "EN71 / ASTM documentation available for documented squeeze-toy programs",
                  ],
                ].map(([area, detail]) => (
                  <tr key={area} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-bold text-slate-950">{area}</td>
                    <td className="px-4 py-3 leading-6 text-slate-600">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Learn more in our{" "}
            <Link
              href="/resources/en71-astm-cpc-squeeze-toys"
              className="font-bold text-blue-600 hover:underline"
            >
              compliance guide
            </Link>
            .
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
