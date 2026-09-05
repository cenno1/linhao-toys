import type { Locale, LocalizedFaq } from "@/lib/localized-catalog";

export type LocalizedPuPageCopy = {
  locale: Locale;
  seoTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  introduction: string;
  directAnswer: string;
  commercialHeading: string;
  commercialFacts: string[];
  capabilityHeading: string;
  capabilities: Array<{ title: string; text: string }>;
  processHeading: string;
  process: Array<{ title: string; text: string }>;
  checklistHeading: string;
  checklist: string[];
  examplesHeading: string;
  examples: Array<{ title: string; image: string; alt: string }>;
  faqHeading: string;
  faqs: LocalizedFaq[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export const localizedPuPages: Record<Locale, LocalizedPuPageCopy> = {
  es: {
    locale: "es",
    seoTitle: "Fabricante de squishies PU personalizados | OEM",
    description:
      "Fabricación de squishies PU personalizados desde 500 unidades, con formas originales, recuperación lenta, muestras y embalaje de marca.",
    eyebrow: "FABRICANTE DE SQUISHIES PU PERSONALIZADOS",
    title: "Squishies PU personalizados con forma propia, recuperación lenta y embalaje de marca.",
    introduction:
      "LINHAO Toys revisa proyectos PU a partir de bocetos, personajes, archivos 3D o referencias. El proceso cubre la forma, el tacto, la recuperación, el color, la decoración, la muestra y el embalaje privado antes de confirmar la producción.",
    directAnswer:
      "La cantidad mínima habitual empieza en 500 unidades. El coste actual del molde es de 680 USD. La muestra cuesta 360 USD, requiere 20 días y su coste puede acreditarse al pedido de producción. La producción habitual tarda entre 25 y 30 días después de aprobar la muestra. El transporte y el calendario final se confirman por separado.",
    commercialHeading: "Datos comerciales confirmados para proyectos PU",
    commercialFacts: [
      "MOQ habitual: desde 500 unidades",
      "Coste actual del molde: 680 USD",
      "Muestra: 360 USD y 20 días",
      "El coste de la muestra puede acreditarse al pedido de producción",
      "Producción habitual: 25–30 días después de aprobar la muestra; transporte aparte",
      "EE. UU.: ASTM F963 y CPSIA con CPC; Europa: EN 71, según producto y mercado",
    ],
    capabilityHeading: "¿Qué puede personalizar un comprador?",
    capabilities: [
      {
        title: "Forma y tamaño propios",
        text: "Revise bocetos, hojas de personaje, archivos 3D o referencias para definir una geometría PU y una ruta de molde viables.",
      },
      {
        title: "Tacto y recuperación lenta",
        text: "Apruebe la suavidad y el tiempo de recuperación mediante una muestra física y un método de comparación repetible.",
      },
      {
        title: "Color y decoración",
        text: "Defina colores base, degradados, rostros, logotipos, impresión y efectos superficiales sobre el diseño aprobado.",
      },
      {
        title: "Embalaje de marca",
        text: "Planifique bolsas, cajas, etiquetas, insertos, códigos de barras, expositores y cajas de exportación para el producto real.",
      },
      {
        title: "Surtidos y variantes",
        text: "Indique la mezcla de diseños, colores, cantidad por modelo y proporción de embalaje para series estacionales o coleccionables.",
      },
      {
        title: "Documentos por mercado",
        text: "La ruta de ASTM F963, CPSIA y CPC para EE. UU. o EN 71 para Europa se revisa para el producto, edad prevista y mercado exactos.",
      },
    ],
    processHeading: "Proceso de un proyecto PU personalizado",
    process: [
      {
        title: "1. Brief de compra",
        text: "Envíe diseño, medidas, tacto deseado, cantidad, mercado, embalaje y fecha de recepción necesaria.",
      },
      {
        title: "2. Viabilidad y molde",
        text: "Se revisan geometría, molde, material PU, decoración, protección del producto y coste aplicable.",
      },
      {
        title: "3. Muestra y aprobación",
        text: "Apruebe dimensiones, aspecto, tacto, recuperación, impresión y embalaje sobre una referencia física.",
      },
      {
        title: "4. Producción confirmada",
        text: "Producción, inspección, embalaje, documentos y envío se confirman con la especificación y el pedido finales.",
      },
    ],
    checklistHeading: "Información necesaria para una cotización precisa",
    checklist: [
      "Boceto, archivo 3D, hoja de personaje o imágenes anotadas",
      "Medidas finales y zonas finas o vulnerables de la forma",
      "Referencia del tacto y de la recuperación lenta, preferiblemente con vídeo",
      "Colores, logotipo, rostro, impresión y aroma si se requiere",
      "Cantidad total y cantidad por diseño o color",
      "Bolsa, caja, expositor, etiqueta y código de barras",
      "País de destino, edad prevista y fecha de recepción",
      "Norma o documentación solicitada por el comprador",
    ],
    examplesHeading: "Direcciones de producto PU",
    examples: [
      {
        title: "Figuras PU personalizadas de frutas y animales",
        image: "/images/products/custom-pu-fruit-animal-figures/hero.png",
        alt: "figuras squishy PU personalizadas de frutas y animales",
      },
      {
        title: "Llaveros de animales PU de recuperación lenta",
        image: "/images/products/pu-slow-rise-animal-keychain/hero.png",
        alt: "llaveros squishy PU de animales con recuperación lenta",
      },
      {
        title: "Surtido navideño de squishies PU",
        image: "/images/products/christmas-pu-squishy-toy-assortment/hero.png",
        alt: "surtido de squishies PU con diseños navideños",
      },
    ],
    faqHeading: "Preguntas de compradores de squishies PU",
    faqs: [
      {
        question: "¿Cuál es el MOQ y el coste del molde?",
        answer:
          "El MOQ habitual empieza en 500 unidades y el coste actual del molde es de 680 USD. La oferta final depende de la forma, el tamaño, la decoración y el embalaje.",
      },
      {
        question: "¿Cuánto cuesta y tarda la muestra?",
        answer:
          "La muestra cuesta 360 USD y el plazo indicado es de 20 días. El coste de la muestra puede acreditarse al pedido de producción. La producción habitual tarda entre 25 y 30 días después de aprobar la muestra; el transporte se confirma por separado.",
      },
      {
        question: "¿Se puede fabricar una forma original?",
        answer:
          "Sí, se pueden revisar bocetos, personajes, archivos 3D o referencias. La viabilidad depende de la geometría, las medidas, el molde y los detalles decorativos.",
      },
      {
        question: "¿Todos los squishies PU son de recuperación lenta?",
        answer:
          "No. La recuperación cambia según la formulación, la forma, el tamaño, el grosor, la temperatura y el método de prueba. Debe aprobarse una muestra física.",
      },
      {
        question: "¿Pueden preparar embalaje private label?",
        answer:
          "Se pueden revisar bolsas, cajas, etiquetas, insertos, códigos de barras, expositores y cajas de exportación para la especificación final.",
      },
      {
        question: "¿Qué documentos pueden prepararse?",
        answer:
          "Para el producto y mercado exactos puede revisarse ASTM F963 y CPSIA con CPC para Estados Unidos, y EN 71 para proyectos europeos relevantes.",
      },
    ],
    ctaTitle: "Envíe su diseño para revisar un proyecto PU preciso.",
    ctaText:
      "Incluya forma, medidas, cantidad, tacto, embalaje, destino y fecha objetivo para preparar una cotización comparable.",
    ctaLabel: "Solicitar cotización PU",
  },
  de: {
    locale: "de",
    seoTitle: "Hersteller für individuelle PU-Squishies | OEM",
    description:
      "Individuelle PU-Squishies ab 500 Stück mit eigener Form, Slow-Rise-Haptik, Musterfreigabe und Private-Label-Verpackung.",
    eyebrow: "HERSTELLER FÜR INDIVIDUELLE PU-SQUISHIES",
    title: "Individuelle PU-Squishies mit eigener Form, Slow-Rise-Rückstellung und Markenverpackung.",
    introduction:
      "LINHAO Toys prüft PU-Projekte anhand von Skizzen, Charaktervorlagen, 3D-Dateien oder Referenzen. Form, Haptik, Rückstellung, Farbe, Dekoration, Muster und Private-Label-Verpackung werden vor der Produktionsfreigabe abgestimmt.",
    directAnswer:
      "Die übliche Mindestbestellmenge beginnt bei 500 Stück. Die aktuellen Formkosten betragen 680 USD. Ein Muster kostet 360 USD, benötigt 20 Tage und die Mustergebühr kann auf den Produktionsauftrag angerechnet werden. Die Serienproduktion dauert üblicherweise 25–30 Tage nach Musterfreigabe. Transport und endgültiger Zeitplan werden separat bestätigt.",
    commercialHeading: "Bestätigte Eckdaten für individuelle PU-Projekte",
    commercialFacts: [
      "Übliche Mindestbestellmenge: ab 500 Stück",
      "Aktuelle Formkosten: 680 USD",
      "Muster: 360 USD und 20 Tage",
      "Die Mustergebühr kann auf den Produktionsauftrag angerechnet werden",
      "Übliche Serienproduktion: 25–30 Tage nach Musterfreigabe; Transport separat",
      "USA: ASTM F963 und CPSIA mit CPC; Europa: EN 71, je Produkt und Markt",
    ],
    capabilityHeading: "Was kann ein Einkäufer individuell festlegen?",
    capabilities: [
      {
        title: "Eigene Form und Größe",
        text: "Skizzen, Charaktervorlagen, 3D-Dateien oder Referenzen werden für eine praktikable PU-Geometrie und Formwerkzeugroute geprüft.",
      },
      {
        title: "Haptik und Slow Rise",
        text: "Weichheit und Rückstellung werden anhand eines physischen Freigabemusters und einer wiederholbaren Vergleichsmethode bestätigt.",
      },
      {
        title: "Farbe und Dekoration",
        text: "Grundfarben, Verläufe, Gesichter, Logos, Druckdetails und Oberflächeneffekte werden am freigegebenen Design definiert.",
      },
      {
        title: "Private-Label-Verpackung",
        text: "Beutel, Boxen, Anhänger, Einleger, Barcodes, Displays und Exportkartons werden passend zum realen Produkt geplant.",
      },
      {
        title: "Sortimente und Varianten",
        text: "Legen Sie Designmix, Farben, Menge je Variante und Verpackungsverhältnis für saisonale oder sammelbare Serien fest.",
      },
      {
        title: "Marktbezogene Dokumente",
        text: "ASTM F963, CPSIA und CPC für die USA oder EN 71 für Europa werden für das genaue Produkt, die Altersstufe und den Zielmarkt geprüft.",
      },
    ],
    processHeading: "Ablauf eines individuellen PU-Projekts",
    process: [
      {
        title: "1. Einkaufsbriefing",
        text: "Senden Sie Design, Maße, gewünschte Haptik, Menge, Markt, Verpackung und benötigten Empfangstermin.",
      },
      {
        title: "2. Machbarkeit und Form",
        text: "Geometrie, Formwerkzeug, PU-Aufbau, Dekoration, Produktschutz und anwendbare Kosten werden geprüft.",
      },
      {
        title: "3. Musterfreigabe",
        text: "Geben Sie Maße, Aussehen, Haptik, Rückstellung, Druck und Verpackung anhand einer physischen Referenz frei.",
      },
      {
        title: "4. Bestätigte Produktion",
        text: "Produktion, Prüfung, Verpackung, Dokumente und Versand werden mit finaler Spezifikation und Bestellung bestätigt.",
      },
    ],
    checklistHeading: "Angaben für ein präzises Angebot",
    checklist: [
      "Skizze, 3D-Datei, Charaktervorlage oder beschriftete Referenzbilder",
      "Endmaße und dünne oder empfindliche Formbereiche",
      "Referenz für Haptik und Slow-Rise-Rückstellung, möglichst als Video",
      "Farben, Logo, Gesicht, Druck und Duft, falls erforderlich",
      "Gesamtmenge und Menge je Design oder Farbe",
      "Beutel, Box, Display, Etikett und Barcode",
      "Zielland, vorgesehene Altersstufe und Empfangstermin",
      "Vom Käufer verlangte Normen oder Dokumente",
    ],
    examplesHeading: "PU-Produktbeispiele",
    examples: [
      {
        title: "Individuelle PU-Frucht- und Tierfiguren",
        image: "/images/products/custom-pu-fruit-animal-figures/hero.png",
        alt: "individuelle PU-Squishy-Figuren in Frucht- und Tierformen",
      },
      {
        title: "Slow-Rise-PU-Tieranhänger",
        image: "/images/products/pu-slow-rise-animal-keychain/hero.png",
        alt: "Slow-Rise-PU-Squishy-Tieranhänger",
      },
      {
        title: "Weihnachtliches PU-Squishy-Sortiment",
        image: "/images/products/christmas-pu-squishy-toy-assortment/hero.png",
        alt: "weihnachtliches PU-Squishy-Sortiment",
      },
    ],
    faqHeading: "Fragen von PU-Squishy-Einkäufern",
    faqs: [
      {
        question: "Wie hoch sind Mindestmenge und Formkosten?",
        answer:
          "Die übliche Mindestbestellmenge beginnt bei 500 Stück und die aktuellen Formkosten betragen 680 USD. Das finale Angebot hängt von Form, Größe, Dekoration und Verpackung ab.",
      },
      {
        question: "Was kostet ein Muster und wie lange dauert es?",
        answer:
          "Das Muster kostet 360 USD und die angegebene Musterzeit beträgt 20 Tage. Die Mustergebühr kann auf den Produktionsauftrag angerechnet werden. Die Serienproduktion dauert üblicherweise 25–30 Tage nach Musterfreigabe. Transport und endgültiger Zeitplan werden separat bestätigt.",
      },
      {
        question: "Kann eine eigene Form hergestellt werden?",
        answer:
          "Skizzen, Charaktere, 3D-Dateien oder Referenzen können geprüft werden. Die Machbarkeit hängt von Geometrie, Maßen, Formwerkzeug und Dekorationsdetails ab.",
      },
      {
        question: "Sind alle PU-Squishies Slow Rise?",
        answer:
          "Nein. Die Rückstellung hängt von Materialaufbau, Form, Größe, Wandstärke, Temperatur und Prüfmethode ab. Ein physisches Muster sollte freigegeben werden.",
      },
      {
        question: "Ist eine Private-Label-Verpackung möglich?",
        answer:
          "Beutel, Boxen, Anhänger, Einleger, Barcodes, Displays und Exportkartons können für die finale Produktspezifikation geprüft werden.",
      },
      {
        question: "Welche Dokumente können vorbereitet werden?",
        answer:
          "Für das genaue Produkt und den Zielmarkt können ASTM F963 und CPSIA mit CPC für die USA sowie EN 71 für relevante europäische Projekte geprüft werden.",
      },
    ],
    ctaTitle: "Senden Sie Ihr Design für eine präzise PU-Projektprüfung.",
    ctaText:
      "Nennen Sie Form, Maße, Menge, Haptik, Verpackung, Zielort und Wunschtermin für ein vergleichbares Angebot.",
    ctaLabel: "PU-Angebot anfragen",
  },
};
