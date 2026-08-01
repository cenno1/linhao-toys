import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ProductShowcase from "@/components/ProductShowcase";
import { products, type ProductFilterGroup } from "@/lib/products";
import { absoluteUrl } from "@/lib/seo";

type FAQItem = { question: string; answer: string };
type InfoItem = { title: string; text: string };

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
  capabilities: InfoItem[];
  faqs: FAQItem[];
};

export default function SeoLandingPage(props: Props) {
  const listedProducts = props.productSlugs
    ? props.productSlugs
        .map((slug) => products.find((product) => product.slug === slug))
        .filter((product): product is (typeof products)[number] => Boolean(product))
    : [];
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">{props.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">{props.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{props.introduction}</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">{props.buyerNote}</p>
          {props.lastReviewed && (
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              Trend review updated {new Date(`${props.lastReviewed}T00:00:00Z`).toLocaleDateString("en-US", {
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
