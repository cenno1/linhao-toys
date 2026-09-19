import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

const path = "/custom-pu-squishy-case-studies";
const title = "Custom PU Squishy Case Studies | Shapes & Recovery";
const description = "Explore real custom PU squishy examples: an animal character, robot mascot and strawberry. Custom appearance and recovery speed; MOQ from 500 pieces.";
const photoRoot = "/images/cases/custom-pu";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title, description, url: path, type: "website",
    images: [{ url: `${photoRoot}/character-with-box.jpg`, alt: "Custom PU animal character with its printed box" }],
  },
  twitter: {
    card: "summary_large_image", title, description,
    images: [`${photoRoot}/character-with-box.jpg`],
  },
};

const cases = [
  {
    id: "animal-character",
    name: "Round-belly animal character",
    category: "Character design",
    image: "character-with-box.jpg",
    alt: "Custom PU animal character in an orange shirt and blue trousers, photographed beside a printed box",
    caption: "Actual custom PU character and printed box.",
    text: "A rounded animal character with sculpted facial features, an orange shirt, a white belly and blue trousers. The photographs show the finished three-dimensional form, painted details and presentation alongside its printed box.",
    focus: "For your own character, discuss the silhouette, facial expression, clothing details and color placement. Recovery speed can be specified separately from the visual design.",
  },
  {
    id: "robot-mascot",
    name: "White and green robot mascot",
    category: "Mascot design",
    image: "robot-mascot.jpg",
    alt: "Custom white PU robot mascot with a black smiling face, green accents and black boots",
    caption: "Actual custom PU robot with contrasting face and body details.",
    text: "This robot combines a rounded white body with a black face panel, green expression, antenna and accent details. Its distinct head, arms and boots show how a mascot can be translated into a squeezable PU form.",
    focus: "A custom mascot brief can define the body proportions, expression and color scheme, together with the desired speed of recovery after squeezing.",
  },
  {
    id: "strawberry",
    name: "Textured strawberry shape",
    category: "Fruit design",
    image: "strawberry.jpg",
    alt: "Custom red PU strawberry squishy with molded seed details and green leaves",
    caption: "Actual custom PU strawberry with molded surface texture.",
    text: "A red strawberry form with recessed seed details, green leaves and a short stem. The photograph shows the molded surface texture and the color separation between the fruit and leaf area.",
    focus: "For a custom fruit shape, define the outline, surface details and colors. The recovery target can be developed alongside the appearance and checked on a physical sample.",
  },
];

const faqs = [
  {
    question: "Can both the appearance and recovery speed be customized?",
    answer: "Yes. These are custom PU products, and both the appearance and the recovery speed after squeezing can be customized. Share your artwork or reference and the recovery behavior you want, then confirm the result on a sample.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "The minimum order quantity starts at 500 pieces. Send the specific design, preferred recovery behavior and quantity for a quotation.",
  },
  {
    question: "Do the photographs show actual products?",
    answer: "Yes. These photographs show actual custom PU products: one animal character photographed in two views, a robot mascot and a strawberry.",
  },
  {
    question: "How should we describe our preferred recovery speed?",
    answer: "Send a reference sample or a squeeze-and-release video, or describe the recovery behavior you want. If you have a target recovery time, include it in your brief and confirm it during sampling.",
  },
];

export default function CustomPuCasesPage() {
  const url = absoluteUrl(path);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name: title, description, url,
      inLanguage: "en",
      dateModified: "2026-09-19",
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: cases.map((item) => absoluteUrl(`${photoRoot}/${item.image}`)),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: cases.length,
        itemListElement: cases.map((item, index) => ({
          "@type": "ListItem", position: index + 1, name: item.name, url: `${url}#${item.id}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Custom PU Squishy Case Studies", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question", name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <main>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>Custom PU cases
          </nav>
          <p className="mt-9 text-sm font-black uppercase tracking-[0.18em] text-blue-400">Real products · Custom PU</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Custom PU squishy case studies.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Three custom designs, photographed as made. Explore a character, a robot mascot and a strawberry, with appearance and recovery speed customized to the project.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Discuss your custom design</Link>
            <a href="#cases" className="btn border border-white/30 text-white">Explore the cases</a>
          </div>
          <dl className="mt-12 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">
            <div><dt className="text-sm text-slate-400">Material</dt><dd className="mt-2 text-xl font-bold">PU</dd></div>
            <div><dt className="text-sm text-slate-400">Customization</dt><dd className="mt-2 text-xl font-bold">Appearance &amp; recovery speed</dd></div>
            <div><dt className="text-sm text-slate-400">Minimum order</dt><dd className="mt-2 text-xl font-bold">From 500 pieces</dd></div>
          </dl>
        </div>
      </section>

      <section id="cases" className="bg-[#f8fafc] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-10 px-5 sm:px-6 lg:px-8">
          {cases.map((item, index) => (
            <article id={item.id} key={item.id} className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <div className="grid lg:grid-cols-2">
                <figure className="bg-slate-100 p-5 sm:p-8">
                  <Image src={`${photoRoot}/${item.image}`} alt={item.alt} width={1200} height={1600} sizes="(min-width: 1024px) 560px, 100vw" className="mx-auto h-auto max-h-[620px] w-full rounded-2xl object-contain" priority={index === 0} />
                  <figcaption className="mt-4 text-sm leading-6 text-slate-600">{item.caption}</figcaption>
                </figure>
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Case {String(index + 1).padStart(2, "0")} · {item.category}</p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{item.name}</h2>
                  <p className="mt-6 leading-8 text-slate-600">{item.text}</p>
                  <h3 className="mt-8 text-lg font-black text-slate-950">Customization direction</h3>
                  <p className="mt-3 leading-8 text-slate-600">{item.focus}</p>
                  <Link href="/contact" className="mt-8 font-bold text-blue-700 hover:underline">Send your design for review →</Link>
                </div>
              </div>
              {index === 0 && (
                <div className="grid gap-7 border-t border-slate-200 p-6 sm:grid-cols-[220px_1fr] sm:items-center sm:p-8">
                  <Image src={`${photoRoot}/character-detail.jpg`} alt="Close-up of the same custom PU animal character showing its face, orange shirt, round belly and blue trousers" width={1200} height={1600} sizes="220px" className="mx-auto h-auto w-full max-w-[220px] rounded-2xl" />
                  <div><h3 className="text-xl font-black text-slate-950">A closer look at the same character</h3><p className="mt-3 max-w-2xl leading-8 text-slate-600">The second view shows the face, clothing edges and rounded belly in more detail. Use close-up references like this to explain which appearance details matter in your own design.</p></div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Start your own project</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Define the look. Then define the recovery.</h2>
            <p className="mt-5 leading-8 text-slate-600">Share a sketch, artwork or reference photo and describe how the PU product should recover after squeezing. Confirm the appearance and recovery behavior together on a physical sample.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>Artwork or reference, intended shape, dimensions and colors</li>
              <li>Preferred recovery speed, with a sample or video if available</li>
              <li>Quantity for each design and any packaging requirements</li>
              <li>Destination and target delivery date for quotation review</li>
            </ul>
          </div>
          <aside className="rounded-[2rem] bg-blue-50 p-7 sm:p-9">
            <h2 className="text-2xl font-black text-slate-950">Minimum order quantities</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Custom PU orders start at <strong>500 pieces</strong>.</p>
            <p className="mt-4 leading-7 text-slate-600">Send your reference, preferred recovery behavior and requested quantity so we can prepare a quotation for your design.</p>
            <Link href="/contact" className="btn btn-primary mt-7">Request a custom PU quote</Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Custom PU questions</h2>
          <div className="mt-7 space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer font-bold text-slate-950">{question}</summary>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-5 text-sm font-bold text-blue-700">
            <Link href="/custom-pu-squishy-manufacturer" className="hover:underline">Custom PU manufacturing →</Link>
            <Link href="/oem" className="hover:underline">OEM development process →</Link>
            <Link href="/resources/slow-rising-squishy-recovery-time-specification-guide" className="hover:underline">Recovery specification guide →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
