import type { Metadata } from "next";
import Link from "next/link";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import SeoLandingPage from "@/components/SeoLandingPage";

const title = "Slow Rising Toys Wholesale | Custom PU Squishy Manufacturer";
const description = "Source PU slow rebound toys and slow-rising squishies from 500 pieces per shape and color. Review actual samples, custom designs and branded packaging.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/slow-rising-squishy-wholesale" },
  keywords: [
    "slow rising toys",
    "slow rebound toys",
    "slow rising squishy wholesale",
    "slow rising squishy manufacturer",
    "custom PU squishy toys",
    "PU squishy toy manufacturer",
    "slow rise squishies bulk",
  ],
  openGraph: {
    title,
    description,
    url: "/slow-rising-squishy-wholesale",
    type: "website",
    images: [
      {
        url: "/images/products/ultra-slow-rising-realistic-pu-food-squishy/textured-bun.jpg",
        alt: "Textured bread-bun PU slow-rising squishy sample",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/products/ultra-slow-rising-realistic-pu-food-squishy/textured-bun.jpg"],
  },
};

export default function Page() {
  return (
    <SeoLandingPage
      path="/slow-rising-squishy-wholesale"
      eyebrow="SLOW-RISING SQUISHY WHOLESALE"
      title="Slow rising toys for wholesale"
      introduction="Develop soft PU foam squishies that gradually return to their shape after squeezing. For buyers sourcing slow rebound toys, LINHAO offers original food, fruit, animal, mascot and keychain designs, with custom colors, logo artwork, hand feel and retail packaging."
      buyerNote="Custom PU orders start at 500 pieces per shape and per color. Allow 12–15 days for sampling and 25–30 days for bulk production after sample approval; buyer review, revisions, sample delivery and freight transit are separate."
      quoteHref="#slow-rise-quote"
      quoteLabel="Get a slow-rise toy quote"
      browseLabel="Compare PU styles"
      beforeProducts={
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 className="text-3xl font-black tracking-tight">Compare the sample before choosing a recovery target</h2>
            <div className="mt-7 grid items-start gap-8 lg:grid-cols-2">
              <figure>
                <video controls playsInline preload="none" aria-label="Actual PU food squishy sample squeeze demonstration" poster="/images/products/ultra-slow-rising-realistic-pu-food-squishy/textured-bun.jpg" className="aspect-square w-full rounded-2xl bg-slate-100 object-contain">
                  <source src="/videos/ultra-slow-rising-realistic-pu-food-squishy.mp4" type="video/mp4" />
                  <a href="/videos/ultra-slow-rising-realistic-pu-food-squishy.mp4">Watch the PU food squishy sample video</a>
                </video>
                <figcaption className="mt-3 text-sm leading-6 text-slate-600">Actual handling and recovery demonstration from the PU food series. This shows the recorded sample; the recovery target for a new design is agreed during sampling.</figcaption>
              </figure>
              <div>
                <h3 className="text-2xl font-bold">Slow rising toys and slow rebound toys</h3>
                <p className="mt-3 leading-7 text-slate-600">On this page, both terms describe PU foam squeeze toys that recover gradually. The words alone do not specify a recovery time. Send a physical reference or demonstration and tell us the softness and recovery you want.</p>
                <p className="mt-4 leading-7 text-slate-600">Review the finished, decorated sample under the same squeeze conditions and temperature. Product size, shape, foam and storage can affect the result. Confirm the test method and acceptable range before bulk production.</p>
                <Link href="/products/ultra-slow-rising-realistic-pu-food-squishy" className="mt-5 inline-block font-bold text-blue-700 underline">See the food sample photographs and specifications</Link>
                <Link href="/resources/slow-rising-squishy-recovery-time-specification-guide" className="mt-4 block font-bold text-blue-700 underline">Prepare a repeatable recovery-time check</Link>
              </div>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Minimum order", "500 pieces per shape and per color. One shape in two colors starts at 1,000 pieces."],
                ["Sampling", "12–15 days for sampling. Delivery, buyer review and revisions are separate."],
                ["Bulk production", "25–30 days after sample approval. Confirm the order schedule and freight separately."],
                ["Packing", "Specify individual bags or boxes, display trays, barcodes and outer cartons for a quote."],
              ].map(([label, text]) => <div key={label} className="rounded-2xl bg-slate-50 p-5"><dt className="font-black text-slate-950">{label}</dt><dd className="mt-3 text-sm leading-6 text-slate-600">{text}</dd></div>)}
            </dl>
            <div id="slow-rise-quote" className="mt-12 scroll-mt-24 rounded-2xl border border-slate-200 p-5 sm:p-8">
              <h2 className="text-2xl font-black">Request a custom slow-rise toy quote</h2>
              <p className="mt-3 mb-7 max-w-3xl leading-7 text-slate-600">Send artwork or a product link, quantity per shape and color, desired hand feel, packaging, destination and arrival date. Include a recovery reference if you have one.</p>
              <ProductInquiryForm productName="PU slow rising toys / slow rebound toys" />
            </div>
          </div>
        </section>
      }
      productSlugs={[
        "ultra-slow-rising-realistic-pu-food-squishy",
        "bakery-slow-rise-squishy-assortment",
        "pu-slow-rise-animal-keychain",
        "custom-pu-fruit-animal-figures",
        "custom-pu-octopus-squishy",
      ]}
      preserveProductOrder
      lastReviewed="2026-11-18"
      serviceType="Custom PU slow-rising squishy wholesale and private-label manufacturing"
      productHeading="Slow-rise formats for food, character and collectible programs."
      productDescription="Review PU food samples, bakery assortments, animal keychains and character designs as starting points for an original wholesale collection."
      capabilities={[
        { title: "Original PU Shape", text: "Convert artwork into practical food, fruit, animal, mascot or promotional forms." },
        { title: "Recovery Target", text: "Approve the squeeze feel and recovery behavior with a defined sample and test method." },
        { title: "Color & Artwork", text: "Coordinate base colors, gradients, glitter effects, faces, logos and printed details." },
        { title: "Scent Review", text: "Assess scented or unscented routes with odor, ventilation, packing and market requirements in mind." },
        { title: "Assortment Planning", text: "Plan mixed characters, colors, blind packs, display trays and quantity per design." },
        { title: "Retail Packaging", text: "Develop individual bags, boxes, hangtags, barcode labels, displays and export cartons." },
      ]}
      process={[
        { title: "Set the Target", text: "Share the shape, size, recovery reference, artwork, quantity, market and packaging format." },
        { title: "Develop the Sample", text: "Review the mold, foam feel, color, print, scent direction and package protection." },
        { title: "Approve Performance", text: "Confirm appearance, dimensions, recovery test, artwork and retail presentation." },
        { title: "Produce & Inspect", text: "Use the approved reference for production checks, packing control and export preparation." },
      ]}
      buyerChecklist={[
        "Original artwork or reference shape with target dimensions",
        "Desired squeeze feel and recovery-time reference",
        "Quantity per design, colorway or assortment",
        "Face artwork, logo, print and optional scent direction",
        "Individual package, display and barcode requirements",
        "Destination market, age grade and required launch date",
      ]}
      relatedPages={[
        { title: "Kawaii Smiley Banana Squishy", text: "Compare a cute fruit style with TPR shell and filling, individual clear boxes and a retail display. Its construction differs from the PU foam toys above.", href: "/products/kawaii-smiley-banana-squishy-toys" },
        { title: "Custom PU Squishy Manufacturer", text: "Plan custom PU shape, recovery, decoration and private-label packaging in one buyer brief.", href: "/custom-pu-squishy-manufacturer" },
        { title: "Custom Squishy Manufacturing", text: "Review mold, sampling, decoration, packaging and sample-to-bulk controls.", href: "/custom-squishy-toy-manufacturer" },
        { title: "Recovery-Time Specification Guide", text: "Learn how to define and compare slow-rise recovery using a repeatable buyer reference.", href: "/resources/slow-rising-squishy-recovery-time-specification-guide" },
        { title: "Scented vs Unscented Squishies", text: "Plan odor, ventilation, packaging and sample approval for scented product routes.", href: "/resources/scented-vs-unscented-squishy-toy-odor-control-guide" },
        { title: "Wholesale Squishy Toys", text: "Compare ready-stock products when a faster bulk supply route is more important than a new mold.", href: "/wholesale-squishy-toys" },
      ]}
      faqs={[
        { question: "What are slow rising toys and slow rebound toys?", answer: "Both expressions are used here for soft PU foam squishies that gradually regain their shape after squeezing. They do not define a fixed recovery time. Agree the feel, recovery range and sample test method for your selected design." },
        { question: "Can LINHAO make a slow-rising squishy from our character artwork?", answer: "Yes. Send the artwork, required dimensions, quantity, recovery reference, print details, packaging and destination market for feasibility review." },
        { question: "How is slow-rise recovery time specified?", answer: "Use an approved physical sample and a repeatable test method, including squeeze conditions, temperature and timing. A marketing phrase alone is not sufficient for bulk control." },
        { question: "What is the MOQ for custom PU slow-rise squishies?", answer: "MOQ is 500 pieces per shape and 500 pieces per color. One shape in two colors starts at 1,000 pieces. Send the quantity split and packaging requirements for a quotation." },
        { question: "How long do custom sampling and bulk production take?", answer: "Allow 12–15 days for PU sampling and 25–30 days for bulk production after sample approval. Buyer review, revisions, sample delivery and freight transit are separate. Confirm the schedule for the exact order and destination." },
        { question: "Can food and animal designs be supplied as mixed assortments?", answer: "An assortment can be reviewed using 500 pieces per shape and per color. Confirm the selected designs, color split, retail packs and carton allocation in the quotation; a mixed pack does not remove the minimum for each custom design and color." },
        { question: "Are scented slow-rise squishies available?", answer: "A scent option can be reviewed. The scent, material, ventilation, packaging, claims and destination-market requirements must be approved for the exact product." },
        { question: "Can you provide private-label packaging?", answer: "Yes. Options may include individual bags, branded boxes, hangtags, inserts, barcode labels, display trays and export cartons, subject to the product and quantity." },
      ]}
    />
  );
}

