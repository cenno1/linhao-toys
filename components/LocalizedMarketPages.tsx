import Image from "next/image";
import Link from "next/link";
import type {
  LocalizedMarketCopy,
  LocalizedProduct,
  Locale,
} from "@/lib/localized-catalog";

function LocalizedHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: LocalizedMarketCopy;
}) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="text-xl font-black tracking-tight text-slate-950">
          LINHAO <span className="text-blue-600">TOYS</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-bold text-slate-700" aria-label="Primary">
          <Link href={`/${locale}`} className="hover:text-blue-600">
            {copy.navigation.home}
          </Link>
          <Link href={`/${locale}/squishy-toys`} className="hover:text-blue-600">
            {copy.navigation.wholesale}
          </Link>
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
            {copy.navigation.contact}
          </Link>
        </nav>
        <nav className="flex items-center gap-3 text-xs font-black uppercase tracking-wider text-slate-500" aria-label={copy.navigation.language}>
          <Link href="/" hrefLang="en" lang="en" className="hover:text-blue-600">EN</Link>
          <Link href="/es" hrefLang="es" lang="es" className={locale === "es" ? "text-blue-600" : "hover:text-blue-600"}>ES</Link>
          <Link href="/de" hrefLang="de" lang="de" className={locale === "de" ? "text-blue-600" : "hover:text-blue-600"}>DE</Link>
        </nav>
      </div>
    </header>
  );
}

function LocalizedFooter({ locale }: { locale: Locale }) {
  const text =
    locale === "es"
      ? "Información B2B para compradores de juguetes. Las existencias, cantidades, plazos y requisitos se confirman por solicitud."
      : "B2B-Informationen für Spielzeugeinkäufer. Bestand, Mengen, Termine und Anforderungen werden je Anfrage bestätigt.";

  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 lg:px-8">
        <p className="text-xl font-black text-white">LINHAO TOYS</p>
        <p className="max-w-3xl text-sm leading-7">{text}</p>
        <div className="flex flex-wrap gap-5 text-sm font-bold">
          <Link href={`/${locale}`} className="hover:text-white">{locale === "es" ? "Inicio" : "Startseite"}</Link>
          <Link href={`/${locale}/squishy-toys`} className="hover:text-white">{locale === "es" ? "Squishies al por mayor" : "Squishies im Großhandel"}</Link>
          <Link href="/contact" className="hover:text-white">{locale === "es" ? "Contacto" : "Kontakt"}</Link>
          <Link href="/privacy" className="hover:text-white">{locale === "es" ? "Privacidad" : "Datenschutz"}</Link>
        </div>
      </div>
    </footer>
  );
}

function ProductCard({
  locale,
  product,
}: {
  locale: Locale;
  product: LocalizedProduct;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <Link href={`/${locale}/products/${product.slug}`}>
        <div className="relative aspect-square bg-slate-100">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">{product.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950">
          <Link href={`/${locale}/products/${product.slug}`} className="hover:text-blue-600">
            {product.name}
          </Link>
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
        <Link href={`/${locale}/products/${product.slug}`} className="mt-6 inline-flex font-black text-blue-600">
          {locale === "es" ? "Ver detalles para compradores →" : "Einkäuferdetails ansehen →"}
        </Link>
      </div>
    </article>
  );
}

function FaqList({
  heading,
  faqs,
}: {
  heading: string;
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
      <h2 className="text-3xl font-black tracking-tight text-slate-950">{heading}</h2>
      <div className="mt-8 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <summary className="cursor-pointer list-none font-black text-slate-950">
              {faq.question}<span className="float-right text-blue-600">+</span>
            </summary>
            <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function LocalizedCta({
  title,
  text,
  label,
}: {
  title: string;
  text: string;
  label: string;
}) {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">{text}</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-blue-700 shadow-lg">
          {label}
        </Link>
      </div>
    </section>
  );
}

export function LocalizedHomePage({
  locale,
  copy,
}: {
  locale: Locale;
  copy: LocalizedMarketCopy;
}) {
  const page = copy.home;

  return (
    <main lang={locale}>
      <LocalizedHeader locale={locale} copy={copy} />
      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">{page.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.055em] sm:text-7xl">{page.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{page.introduction}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={`/${locale}/squishy-toys`} className="rounded-full bg-blue-600 px-7 py-4 font-black text-white hover:bg-blue-500">
              {copy.navigation.wholesale}
            </Link>
            <Link href="/contact" className="rounded-full border border-slate-600 px-7 py-4 font-black text-white hover:border-white">
              {copy.navigation.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <p className="rounded-3xl border border-blue-100 bg-white p-7 text-lg font-bold leading-8 text-slate-800 shadow-sm">
            {page.quickAnswer}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{page.featureHeading}</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {page.features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{page.processHeading}</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step) => (
              <article key={step.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-blue-600">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            {locale === "es" ? "Productos seleccionados" : "Ausgewählte Produkte"}
          </h2>
          <div className="mt-9 grid gap-7 md:grid-cols-3">
            {copy.products.map((product) => (
              <ProductCard key={product.slug} locale={locale} product={product} />
            ))}
          </div>
        </div>
      </section>

      <FaqList heading={page.faqHeading} faqs={page.faqs} />
      <LocalizedCta title={page.ctaTitle} text={page.ctaText} label={page.ctaLabel} />
      <LocalizedFooter locale={locale} />
    </main>
  );
}

export function LocalizedWholesalePage({
  locale,
  copy,
}: {
  locale: Locale;
  copy: LocalizedMarketCopy;
}) {
  const page = copy.wholesale;

  return (
    <main lang={locale}>
      <LocalizedHeader locale={locale} copy={copy} />
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">{page.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.05em] sm:text-6xl">{page.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{page.introduction}</p>
        </div>
      </section>
      <section className="bg-blue-50 py-10">
        <p className="mx-auto max-w-5xl px-5 text-lg font-bold leading-8 text-slate-800 sm:px-6">{page.quickAnswer}</p>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{page.productHeading}</h2>
          <div className="mt-9 grid gap-7 md:grid-cols-3">
            {copy.products.map((product) => (
              <ProductCard key={product.slug} locale={locale} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <h2 className="text-3xl font-black text-slate-950">{page.checklistHeading}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.checklist.map((item) => (
              <li key={item} className="rounded-2xl bg-white p-5 font-bold leading-7 text-slate-700 shadow-sm">
                <span className="mr-3 text-blue-600">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaqList heading={page.faqHeading} faqs={page.faqs} />
      <LocalizedCta title={page.ctaTitle} text={page.ctaText} label={page.ctaLabel} />
      <LocalizedFooter locale={locale} />
    </main>
  );
}

export function LocalizedProductPage({
  locale,
  copy,
  product,
}: {
  locale: Locale;
  copy: LocalizedMarketCopy;
  product: LocalizedProduct;
}) {
  return (
    <main lang={locale}>
      <LocalizedHeader locale={locale} copy={copy} />
      <article>
        <header className="bg-slate-950 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">{product.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">{product.name}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">{product.introduction}</p>
              <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-4 font-black text-white">
                {copy.navigation.contact}
              </Link>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                {locale === "es" ? "Datos confirmados de esta referencia" : "Bestätigte Angaben zu dieser Referenz"}
              </h2>
              <ul className="mt-7 space-y-4">
                {product.facts.map((fact) => (
                  <li key={fact} className="rounded-2xl bg-slate-50 p-5 font-bold leading-7 text-slate-700">
                    <span className="mr-3 text-blue-600">✓</span>{fact}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                {locale === "es" ? "Aplicaciones comerciales" : "Kommerzielle Einsatzbereiche"}
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {product.applications.map((application) => (
                  <span key={application} className="rounded-full border border-blue-200 bg-blue-50 px-5 py-3 font-bold text-blue-800">
                    {application}
                  </span>
                ))}
              </div>
              <h2 className="mt-12 text-3xl font-black text-slate-950">
                {locale === "es" ? "Información para la consulta" : "Angaben für die Anfrage"}
              </h2>
              <ul className="mt-7 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                {product.buyerChecklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </article>
      <FaqList heading={locale === "es" ? "Preguntas del comprador" : "Fragen von Einkäufern"} faqs={product.faqs} />
      <LocalizedCta
        title={locale === "es" ? "Solicite una oferta para esta referencia." : "Fordern Sie ein Angebot für diese Referenz an."}
        text={locale === "es" ? "Indique cantidad, destino, embalaje y fecha necesaria." : "Nennen Sie Menge, Zielort, Verpackung und benötigten Termin."}
        label={copy.navigation.contact}
      />
      <LocalizedFooter locale={locale} />
    </main>
  );
}
