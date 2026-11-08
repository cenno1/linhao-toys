import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

const path = "/custom-pu-squishy-case-studies/soft-foam-sampling";
const title = "Custom Slow-Rise PU Foam Sampling Case | LINHAO Toys";
const description = "Follow an anonymized custom PU foam project from buyer brief and 3D review to sample completion, with actual squeeze footage and packaging coordination.";
const imageRoot = "/images/cases/soft-foam-sampling";
const videoPath = "/videos/soft-foam-sampling-anonymized.mp4";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title, description, url: path, type: "article",
    images: [{ url: `${imageRoot}/design-stages.webp`, alt: "Anonymized PU design and packaging references" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${imageRoot}/design-stages.webp`] },
};

const brief = [
  ["Feel", "Very soft PU foam with slow rebound. The requested recovery target was approximately 8–12 seconds."],
  ["Form and finish", "An easy-to-grip shape, approximately 7–10 cm, with a premium adult-oriented appearance, low odor and no added scent requested."],
  ["Customization", "Custom color and an embossed or debossed logo, with logo scale refined during review."],
  ["Packaging", "Individual packaging, followed by a request for secondary drawer-style gift packaging."],
  ["Documentation", "Destination-market chemical and general product-safety documents requested for review."],
];

const steps = [
  { title: "Define the material and design route", text: "LINHAO recommended PU foam after reviewing the buyer’s design reference and outlined 3D review, physical sampling and buyer evaluation before bulk production." },
  { title: "Refine the logo and color", text: "The buyer asked for a larger logo and reviewed a 3D preview. Three color options were discussed before a preferred color direction was selected." },
  { title: "Plan physical softness comparison", text: "LINHAO proposed two softness levels for hands-on comparison and shared an earlier project video as a reference. The correspondence records the proposal. Final sample count and measured recovery results require confirmation." },
  { title: "Coordinate the packaging option", text: "When the buyer requested secondary packaging, LINHAO coordinated a custom drawer-box quotation with its packaging supplier. The buyer responded positively to the quoted option." },
];

export default function SoftFoamSamplingCasePage() {
  const url = absoluteUrl(path);
  const jsonLd = [
    {
      "@context": "https://schema.org", "@type": "Article",
      "@id": `${url}#article`, headline: title, description, url,
      mainEntityOfPage: url, inLanguage: "en",
      datePublished: "2026-11-08", dateModified: "2026-11-08",
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: absoluteUrl(`${imageRoot}/design-stages.webp`),
      video: { "@id": `${url}#sample-video` },
    },
    {
      "@context": "https://schema.org", "@type": "VideoObject",
      "@id": `${url}#sample-video`,
      name: "Actual custom PU foam sample squeeze demonstration",
      description: "A 17-second sample handling excerpt at original speed. The client logo area is blurred and audio removed for privacy. Recovery timing requires a defined test method.",
      thumbnailUrl: absoluteUrl(`${imageRoot}/sample-poster.webp`),
      contentUrl: absoluteUrl(videoPath),
      uploadDate: "2026-11-08T00:00:00+08:00", duration: "PT17S",
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Custom PU cases", item: absoluteUrl("/custom-pu-squishy-case-studies") },
        { "@type": "ListItem", position: 3, name: "Soft PU foam sampling", item: url },
      ],
    },
  ];

  return (
    <main>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article className="bg-slate-50 pb-16 text-slate-900">
        <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
            <Link href="/" className="hover:underline">Home</Link><span className="mx-2">/</span>
            <Link href="/custom-pu-squishy-case-studies" className="hover:underline">Custom PU cases</Link><span className="mx-2">/</span>Soft foam sampling
          </nav>
          <p className="mt-10 text-xs font-black uppercase tracking-[0.18em] text-blue-700">From buyer brief to physical sample</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Bringing a custom PU foam concept to life.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">A soft, easy-to-grip shape. A carefully reviewed color direction. Follow the development of a custom slow-rise PU project for an overseas buyer, from design feedback to a completed sample preview.</p>
          <p className="mt-5 text-sm font-semibold text-blue-700">Custom PU foam · Logo and color development · Anonymized project</p>
          <figure className="mt-10">
            <Image src={`${imageRoot}/design-stages.webp`} alt="Anonymized gray 3D concept, pale-blue color views and drawer-box packaging reference" width={1752} height={897} sizes="(min-width: 1152px) 1088px, 100vw" priority className="h-auto w-full rounded-2xl" />
            <figcaption className="mt-3 text-sm leading-6 text-slate-500">Supplied design references, composited and anonymized using AI image editing. The packaging image illustrates the proposed presentation direction.</figcaption>
          </figure>

          <section className="mt-14 grid items-center gap-8 md:grid-cols-[1fr_340px] md:gap-14">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Actual sample video</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight">From digital concept to a physical squeeze demonstration.</h2>
              <p className="mt-5 leading-8 text-slate-600">The supplied workshop video shows the pale-blue sample being squeezed and released by hand. The product visibly deforms and recovers during handling.</p>
              <p className="mt-4 leading-8 text-slate-600">The correspondence records that the sample was ready and that the customer responded positively to the video preview.</p>
              <p className="mt-4 text-sm leading-7 text-slate-500">This 17-second excerpt plays at its original speed. The logo area is blurred and audio is removed to protect customer information. Recovery timing remains subject to a defined test method and sample approval.</p>
            </div>
            <figure className="mx-auto w-full max-w-[340px]">
              <video controls playsInline preload="metadata" poster={`${imageRoot}/sample-poster.webp`} width={720} height={1280} aria-label="Actual PU sample squeeze demonstration with client logo blurred" className="h-auto w-full rounded-2xl bg-slate-900">
                <source src={videoPath} type="video/mp4" />
                <a href={videoPath}>Download the anonymized sample video</a>
              </video>
              <figcaption className="mt-3 text-sm leading-6 text-slate-500">Actual sample handling · Client logo obscured</figcaption>
            </figure>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black tracking-tight">A specific buyer brief.</h2>
            <p className="mt-5 leading-8 text-slate-600">The buyer supplied a reference for a compact PU foam item with branded details and individual packaging.</p>
            <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
              {brief.map(([label, text]) => (
                <div key={label} className="grid gap-2 py-5 sm:grid-cols-[170px_1fr] sm:gap-6">
                  <dt className="font-bold">{label}</dt><dd className="leading-7 text-slate-600">{text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm leading-7 text-slate-500">These are buyer requirements. Final performance, dimensions and documentation require product-specific verification. The concept views show different dimensions, so final sizing is to be confirmed against the approved drawing and sample.</p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black tracking-tight">Four steps that moved the project forward.</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                  <p className="text-xs font-black tracking-widest text-blue-700">STEP {index + 1}</p>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
            <aside className="mt-7 rounded-2xl bg-blue-50 p-7">
              <h3 className="text-xl font-bold">Documented project stage</h3>
              <p className="mt-4 leading-8 text-slate-700">The customer confirmed payment for design and sampling. LINHAO subsequently reported sample completion and shared the preview that received positive buyer feedback. Physical receipt, final sample approval and bulk delivery remain later milestones to verify.</p>
            </aside>
          </section>

          <section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <h2 className="text-3xl font-black">Turn your brief into a sample plan.</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">Share your artwork, target dimensions, quantity, preferred feel, color direction, packaging requirements and destination market. LINHAO Toys can review feasibility and prepare a project-specific design and sample proposal.</p>
            <Link href="/contact" className="btn btn-primary mt-7">Discuss your PU project</Link>
          </section>
          <p className="mt-10 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">Source basis — buyer–supplier correspondence, design references and actual sample footage supplied by LINHAO Toys. Customer identity, brand, contact details, transaction information, prices and order quantities are withheld. This case documents progress through the sample-preview stage.</p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
