import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import SeoLandingPage from "@/components/SeoLandingPage";

const title = "Stress Balls with Company Logo | Custom Manufacturer";
const description = "Order sports-shaped stress balls with a raised or recessed company logo from 500 pieces. Allow about 15 days for a sample and 25 days for bulk production.";
const photoRoot = "/images/company-logo-stress-balls";
const sportsPhotos = [
  { file: "rugby-shapes", width: 667, height: 567, alt: "Oval rugby-ball shapes with logos positioned on the side panels" },
  { file: "yellow-navy", width: 960, height: 960, alt: "Yellow and navy round ball with lettering across its central panels" },
  { file: "green-blue", width: 960, height: 960, alt: "Green and blue round ball showing a second panel colour combination" },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/custom-stress-ball-manufacturer" },
  keywords: [
    "custom stress ball manufacturer",
    "stress balls with company logo",
    "logo stress relievers",
    "custom squeeze toy supplier",
    "OEM stress balls",
    "promotional stress ball manufacturer",
    "private label squeeze toys",
  ],
  openGraph: {
    title,
    description,
    url: "/custom-stress-ball-manufacturer",
    type: "website",
    images: [{ url: photoRoot + "/rugby-shapes.webp", alt: sportsPhotos[0].alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [photoRoot + "/rugby-shapes.webp"],
  },
};

export default function Page() {
  return (
    <SeoLandingPage
      path="/custom-stress-ball-manufacturer"
      eyebrow="CUSTOM STRESS BALL MANUFACTURER"
      title="Stress balls with company logo"
      introduction="Choose a sports-ball shape for your next event or send us a reference for a stress ball shaped like your own product. For sports designs, we can mould your logo so it rises above the surface or sits below it."
      buyerNote="Branded sports stress balls start at 500 pieces. Allow about 15 days for a sample after artwork approval and about 25 days for bulk production after sample approval. Tell us your delivery postcode and event date so we can quote transit separately."
      quoteHref="#logo-quote"
      quoteLabel="Get a company logo quote"
      beforeProducts={
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 className="text-3xl font-black tracking-tight">Logo stress relievers in sports shapes</h2>
            <p className="mt-3 max-w-3xl leading-7">The photos show where a mark can sit on an oval or round ball. For a raised or recessed finish, send the logo at its intended size so we can check the lettering, line thickness and position against the panel seams.</p>
            <div className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-3">
              {sportsPhotos.map((photo, index) => (
                <Image key={photo.file} src={photoRoot + "/" + photo.file + ".webp"} alt={photo.alt}
                  width={photo.width} height={photo.height} sizes="(min-width: 640px) 32vw, 50vw"
                  className={`h-40 w-full object-contain sm:h-52 ${index === 0 ? "col-span-2 sm:col-span-1" : ""}`} />
              ))}
            </div>
            <div className="mt-12 grid items-center gap-6 rounded-2xl bg-slate-50 p-5 sm:grid-cols-[12rem_1fr] sm:p-7">
              <Image src="/images/cases/soft-foam-sampling/sample-poster.webp" alt="Physical PU foam sample being squeezed by hand" width={720} height={1280} className="mx-auto h-44 w-auto rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold">A stress ball shaped like your product</h2>
                <p className="mt-2 leading-7">Send front and side views, the target dimensions and how soft the piece should feel. We use these to review the shape and quote tooling and sampling. See how one custom PU shape progressed from a 3D design to a physical squeeze sample.</p>
                <Link href="/custom-pu-squishy-case-studies/soft-foam-sampling" className="mt-3 inline-block font-bold text-blue-700 underline">View the design and watch the sample test</Link>
              </div>
            </div>
            <div id="logo-quote" className="mt-12 max-w-3xl scroll-mt-24">
              <h2 className="text-2xl font-bold">Request a quote for your company logo</h2>
              <p className="my-4 leading-7">Include your quantity, a link to the logo artwork and the date the goods need to arrive. Tell us the ball shape, whether the logo should be raised or recessed, and your delivery country and postcode.</p>
              <ProductInquiryForm productName="Company logo stress balls" />
            </div>
          </div>
        </section>
      }
      productSlugs={["custom-eva-geometric-cutout-squeeze-ball", "adult-desk-sensory-squishy", "squeaky-tongue-popping-animal-squishy", "custom-jumbo-ghost-squishy"]}
      lastReviewed="2026-11-17"
      serviceType="Custom stress ball and squeeze toy OEM manufacturing"
      productHeading="Stress-ball and squeeze-toy directions for buyer review."
      productDescription="Use these product directions to define the target hand feel, shape, branding route and retail or promotional presentation for your own program."
      capabilities={[
        { title: "Shape Development", text: "Adapt a logo, mascot, product shape or simple geometric form for practical sampling and production." },
        { title: "Squeeze Target", text: "Review the intended resistance, recovery and hand coverage with physical samples rather than vague softness terms." },
        { title: "Branding & Artwork", text: "Plan printed logos, character details, color systems and approved artwork placement around the final shape." },
        { title: "Program Packaging", text: "Coordinate individual bags, backing cards, retail boxes, display trays or event-ready presentation." },
        { title: "Assortment Planning", text: "Compare one hero design with colorways, mascot variants or mixed promotional assortments." },
        { title: "Market Review", text: "Discuss intended user, destination, age grade and product-specific documentation before production." },
      ]}
      process={[
        { title: "Share the Campaign Brief", text: "Provide artwork, intended use, target quantity, destination and packaging direction." },
        { title: "Confirm Feasibility", text: "Review shape, material route, print area, squeeze target and quotation tiers on one specification." },
        { title: "Approve the Sample", text: "Check dimensions, color, decoration, hand feel and packed presentation before bulk production." },
        { title: "Produce & Pack", text: "Use the approved reference for production checks, packing details and export coordination." },
      ]}
      buyerChecklist={[
        "Logo, mascot artwork or a clear shape reference",
        "Target dimensions and intended squeeze resistance",
        "Promotional, retail, gifting or desk-use scenario",
        "Total quantity and quantity per color or design",
        "Print, color, barcode and packaging requirements",
        "Destination market, age grade and requested launch timing",
      ]}
      relatedPages={[
        { title: "Custom Squishy Manufacturing", text: "Explore broader OEM squishy development from artwork through packaging and production control.", href: "/custom-squishy-toy-manufacturer" },
        { title: "MOQ & Cost Planning", text: "Compare realistic quantity tiers using one confirmed product and packaging specification.", href: "/resources/custom-squishy-toy-moq-cost-guide" },
        { title: "Supplier Evaluation Guide", text: "Use a practical checklist to compare sampling, production control and documentation readiness.", href: "/resources/how-to-choose-squishy-toy-manufacturer" },
        { title: "Request a Quote", text: "Send your artwork, quantity and destination for a feasibility review.", href: "/contact" },
      ]}
      faqs={[
        { question: "Can you make a stress ball from our logo or mascot?", answer: "A logo, mascot or reference image can be reviewed for a practical shape, artwork and sampling path. Final feasibility depends on detail level, dimensions, material and intended use." },
        { question: "Can the firmness of a custom squeeze toy be specified?", answer: "The intended resistance and recovery can be reviewed during sampling. Approve a physical sample because terms such as soft, firm or slow-rise are not complete production specifications." },
        { question: "How many sports stress balls can I order with my company logo?", answer: "The minimum order for branded sports stress balls is 500 pieces. Send the quantity you need, the colours and your artwork for a quote." },
        { question: "How long do sampling and bulk production take?", answer: "For this sports-ball programme, allow about 15 days for a sample after artwork approval and about 25 days for production after sample approval. Delivery time depends on the destination and shipping method." },
        { question: "Can custom stress balls be supplied in retail packaging?", answer: "Yes. Individual bags, backing cards, boxes, display formats, labels and barcodes can be included in the project brief and sampled with the product." },
      ]}
    />
  );
}

