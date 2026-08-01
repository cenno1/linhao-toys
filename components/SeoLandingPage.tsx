import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ProductShowcase from "@/components/ProductShowcase";
import { products, type ProductFilterGroup } from "@/lib/products";
import { absoluteUrl } from "@/lib/seo";

type FAQItem = { question: string; answer: string };
type InfoItem = { title: string; text: string };
type RelatedPage = { title: string; text: string; href: string };

type Props = {
  path: string;
  eyebrow: string;
  title: string;
  introduction: string;
  buyerNote: string;
  productHeading: string;
  productDescription: string;
  initialFilter?: "all" | ProductFilterGroup;
  productSlugs?: string[];
  lastReviewed?: string;
  serviceType: string;
  capabilities: InfoItem[];
  process: InfoItem[];
  buyerChecklist: string[];
  relatedPages: RelatedPage[];
  faqs: FAQItem[];
};

export default function SeoLandingPage(props: Props) {
  const listedProducts = props.productSlugs
    ? props.productSlugs
        .map((slug) => products.find((product) => product.slug === slug))
        .filter((product): product is (typeof products)[number] => Boolean(product))
    : products
        .filter((product) => !props.initialFilter || props.initialFilter === "all" || product.filterGroup === props.initialFilter)
        .slice(0, 6);
  const pageUrl = absoluteUrl(props.path);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: props.title,
      description: props.introduction,
      inLanguage: "en",
      dateModified: props.lastReviewed,
      mainEntity: listedProducts.length
        ? {
            "@type": "ItemList",
            numberOfItems: listedProducts.length,
            itemListElement: listedProducts.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: product.name,
              url: absoluteUrl(`/products/${product.slug}`),
              image: absoluteUrl(product.images.hero),
            })),
          }
        : undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: props.title,
      description: props.introduction,
      serviceType: props.serviceType,
      url: pageUrl,
      provider: { "@id": `${absoluteUrl("/")}#organization` },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Brands, retailers, importers, distributors and online sellers",
      },
      serviceOutput: props.capabilities.map(({ title }) => title),
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: props.title, item: absoluteUrl(props.path) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">{props.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">{props.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{props.introduction}</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">{props.buyerNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Request a quotation</Link>
            <Link href="#buyer-brief" className="btn border border-white/30 text-white">Prepare your brief</Link>
          </div>
          {props.lastReviewed && (
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              Content reviewed {new Date(`${props.lastReviewed}T00:00:00Z`).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </p>
          )}
        </div>
      </section>

      <ProductShowcase
        initialFilter={props.initialFilter}
        productSlugs={props.productSlugs}
        showFilters={false}
        eyebrow="RELATED PRODUCT SAMPLES"
        heading={props.productHeading}
        description={props.productDescription}
      />

      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">OEM / ODM CAPABILITIES</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950">
            What buyers can specify for their program.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {props.capabilities.map(({ title, text }) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">SOURCING PROCESS</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950">
            From buyer brief to approved production.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {props.process.map(({ title, text }, index) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
                <span className="text-sm font-black text-blue-600">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="buyer-brief" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">QUOTATION CHECKLIST</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Prepare a useful buyer brief.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              These details let the factory compare the same specification, identify missing decisions and return a more practical quotation path.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {props.buyerChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200">
                <span className="font-black text-blue-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">RELATED BUYER TOPICS</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950">
            Continue planning your sourcing project.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {props.relatedPages.map(({ title, text, href }) => (
              <article key={href} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
                <h3 className="text-xl font-black text-slate-950">
                  <Link href={href} className="hover:text-blue-600">{title}</Link>
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                <Link href={href} className="mt-5 inline-flex text-sm font-black text-blue-600 hover:underline">
                  Read or explore →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell faq-grid">
          <div><span className="eyebrow">Buyer FAQ</span><h2>Practical answers for sourcing teams.</h2></div>
          <div>
            {props.faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
