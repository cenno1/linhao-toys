export const locales = ["es", "de"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedFaq = {
  question: string;
  answer: string;
};

export type LocalizedProduct = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  introduction: string;
  facts: string[];
  applications: string[];
  buyerChecklist: string[];
  faqs: LocalizedFaq[];
};

export type LocalizedMarketCopy = {
  locale: Locale;
  languageName: string;
  navigation: {
    home: string;
    wholesale: string;
    customPu: string;
    contact: string;
    language: string;
  };
  home: {
    seoTitle: string;
    description: string;
    eyebrow: string;
    title: string;
    introduction: string;
    quickAnswer: string;
    featureHeading: string;
    features: Array<{ title: string; text: string }>;
    processHeading: string;
    process: Array<{ title: string; text: string }>;
    faqHeading: string;
    faqs: LocalizedFaq[];
    ctaTitle: string;
    ctaText: string;
    ctaLabel: string;
  };
  wholesale: {
    seoTitle: string;
    description: string;
    eyebrow: string;
    title: string;
    introduction: string;
    quickAnswer: string;
    productHeading: string;
    checklistHeading: string;
    checklist: string[];
    faqHeading: string;
    faqs: LocalizedFaq[];
    ctaTitle: string;
    ctaText: string;
    ctaLabel: string;
  };
  products: LocalizedProduct[];
};

export const localizedProductSlugs = [
  "ready-stock-highland-cow-tpr-squishy",
  "christmas-pu-squishy-toy-assortment",
  "ready-stock-giant-strawberry-squishy",
] as const;

export const localizedCatalog: Record<Locale, LocalizedMarketCopy> = {
  es: {
    locale: "es",
    languageName: "Español",
    navigation: {
      home: "Inicio",
      wholesale: "Squishies al por mayor",
      customPu: "Squishies PU personalizados",
      contact: "Solicitar cotización",
      language: "Idioma",
    },
    home: {
      seoTitle: "Fabricante de juguetes squishy personalizados | LINHAO Toys",
      description:
        "Desarrollo y suministro B2B de juguetes squishy personalizados y al por mayor: TPR, PU, series de temporada, embalaje de marca y opciones con stock sujeto a confirmación.",
      eyebrow: "SUMINISTRO B2B DE JUGUETES",
      title: "Juguetes squishy personalizados y al por mayor para compradores profesionales.",
      introduction:
        "LINHAO Toys presenta opciones de desarrollo personalizado y referencias para compras al por mayor. Envíe el diseño, la cantidad, el mercado de destino y el embalaje requerido para revisar materiales, muestras, disponibilidad y logística.",
      quickAnswer:
        "Para preparar una consulta útil, indique el producto o concepto, la cantidad estimada, el país de destino, la fecha necesaria y cualquier requisito de embalaje o documentación. Las existencias, plazos y condiciones se confirman para cada solicitud.",
      featureHeading: "¿Qué puede definir un comprador antes de solicitar una muestra?",
      features: [
        {
          title: "Material y tacto",
          text: "Defina TPR, PU u otra construcción aprobada, junto con firmeza, velocidad de recuperación, acabado y experiencia de uso.",
        },
        {
          title: "Forma y decoración",
          text: "Comparta medidas, colores, logotipo, expresión, impresión y referencias visuales para revisar la viabilidad del diseño.",
        },
        {
          title: "Embalaje de marca",
          text: "Indique bolsa, caja, expositor, etiqueta, código de barras e información del mercado antes de aprobar el empaque.",
        },
        {
          title: "Compra y envío",
          text: "Confirme cantidad, mezcla de modelos, destino y fecha de recepción para revisar producción, stock y ruta de transporte.",
        },
      ],
      processHeading: "Proceso inicial de compra y desarrollo",
      process: [
        { title: "1. Brief", text: "Envíe enlaces, imágenes, medidas, cantidad, mercado y objetivo del producto." },
        { title: "2. Revisión", text: "Se revisan construcción, opciones de personalización, embalaje y datos pendientes." },
        { title: "3. Muestra", text: "Apruebe el aspecto, el tacto, la recuperación, los detalles y el embalaje del producto real." },
        { title: "4. Cotización", text: "Confirme especificación, cantidad, inspección, documentación y transporte antes del pedido." },
      ],
      faqHeading: "Preguntas frecuentes de compradores",
      faqs: [
        {
          question: "¿Fabrican juguetes squishy personalizados?",
          answer:
            "Se pueden revisar proyectos con forma, color, decoración, logotipo y embalaje personalizados. La viabilidad y las condiciones dependen del diseño final, el material, la cantidad y el mercado.",
        },
        {
          question: "¿Todos los productos mostrados están disponibles inmediatamente?",
          answer:
            "No. Los artículos identificados como stock requieren una comprobación de cantidad y colores; los proyectos personalizados requieren revisión y muestreo.",
        },
        {
          question: "¿Qué información se necesita para una cotización?",
          answer:
            "Producto o diseño, cantidad estimada, destino, fecha requerida, embalaje y requisitos de documentación aplicables.",
        },
      ],
      ctaTitle: "Prepare una consulta clara para su próximo programa de juguetes.",
      ctaText: "Envíe el producto, cantidad, destino y fecha objetivo para recibir una revisión basada en la especificación real.",
      ctaLabel: "Solicitar revisión y cotización",
    },
    wholesale: {
      seoTitle: "Juguetes squishy al por mayor | Proveedor B2B",
      description:
        "Compare juguetes squishy al por mayor con stock sujeto a confirmación y opciones PU o TPR para tiendas, distribuidores y programas de temporada.",
      eyebrow: "SQUISHIES AL POR MAYOR",
      title: "Opciones de juguetes squishy para mayoristas, distribuidores y tiendas.",
      introduction:
        "Esta selección inicial cubre productos con stock sujeto a confirmación y una serie PU de Navidad. Cada consulta debe confirmar cantidad, colores, embalaje, cajas de transporte, fecha y requisitos del mercado.",
      quickAnswer:
        "No existe una única cantidad o plazo válido para todos los productos. Envíe los enlaces seleccionados, la cantidad por modelo, el destino y la fecha de recepción para comprobar la disponibilidad y preparar una oferta comparable.",
      productHeading: "Primera selección para compradores de habla hispana",
      checklistHeading: "Información que debe incluir la consulta",
      checklist: [
        "Enlace o nombre de cada producto",
        "Cantidad total y cantidad por modelo o color",
        "País, ciudad y código postal de destino",
        "Fecha de recepción necesaria",
        "Embalaje individual, etiqueta o código de barras",
        "Requisitos documentales del mercado de destino",
      ],
      faqHeading: "Preguntas sobre compras al por mayor",
      faqs: [
        {
          question: "¿Puedo combinar varios modelos en un envío?",
          answer:
            "Puede solicitar una revisión de carga mixta. La posibilidad depende de la disponibilidad, las cantidades, el embalaje y los datos de cada caja.",
        },
        {
          question: "¿El stock que aparece en la web está garantizado?",
          answer:
            "No. La disponibilidad cambia con los pedidos y debe volver a confirmarse antes del pago o de planificar el transporte.",
        },
        {
          question: "¿Se puede personalizar el embalaje de un producto en stock?",
          answer:
            "Algunas etiquetas o soluciones de embalaje secundario pueden revisarse, pero pueden afectar la cantidad y el tiempo. Indíquelo antes de confirmar la oferta.",
        },
      ],
      ctaTitle: "Solicite una comprobación de stock o un proyecto personalizado.",
      ctaText: "Incluya producto, cantidad, destino, embalaje y fecha objetivo.",
      ctaLabel: "Enviar consulta B2B",
    },
    products: [
      {
        slug: "ready-stock-highland-cow-tpr-squishy",
        name: "Squishy TPR de vaca Highland con stock sujeto a confirmación",
        seoTitle: "Squishy TPR de vaca Highland al por mayor",
        description:
          "Juguete squishy TPR de vaca Highland en colores marrón y naranja con caja de presentación. Solicite una comprobación de stock, embalaje y transporte.",
        image: "/images/products/ready-stock-highland-cow-tpr-squishy/hero.png",
        imageAlt: "squishies TPR de vaca Highland marrón y naranja para venta al por mayor",
        eyebrow: "ANIMAL SQUISHY TPR",
        introduction:
          "Modelo de vaca Highland para tiendas de regalos, novedades y surtidos de impulso. El producto mostrado utiliza material TPR y se presenta en dos colores con caja minorista.",
        facts: [
          "Material indicado para este producto: TPR",
          "Colores mostrados: marrón y naranja",
          "Presentación mostrada: caja individual",
          "La cantidad disponible debe confirmarse antes del pedido",
        ],
        applications: ["Tiendas de regalos", "Tiendas de novedades", "Expositores de impulso", "Surtidos de juguetes"],
        buyerChecklist: [
          "Cantidad por color y mezcla aceptable",
          "Destino y fecha de recepción",
          "Embalaje individual y datos de la caja",
          "Requisitos de etiqueta o código de barras",
        ],
        faqs: [
          {
            question: "¿Está disponible en marrón y naranja?",
            answer: "Esos son los colores mostrados. La cantidad de cada color debe comprobarse con la solicitud.",
          },
          {
            question: "¿Incluye una caja de venta?",
            answer: "La referencia mostrada utiliza una caja de presentación. Confirme el embalaje exacto y los datos de la caja en la oferta.",
          },
        ],
      },
      {
        slug: "christmas-pu-squishy-toy-assortment",
        name: "Surtido de juguetes squishy PU de Navidad",
        seoTitle: "Squishies PU de Navidad al por mayor",
        description:
          "Surtido de squishies PU navideños con diseños de muñeco de nieve, árbol, corona, lazo, casa y postres para programas estacionales.",
        image: "/images/products/christmas-pu-squishy-toy-assortment/hero.png",
        imageAlt: "surtido de juguetes squishy PU con diseños de Navidad",
        eyebrow: "SERIE ESTACIONAL DE NAVIDAD",
        introduction:
          "Colección visual para regalos, tiendas de novedades y campañas de temporada. El propietario confirmó material PU; la mezcla final, el tamaño, el tacto, el embalaje y la fecha de suministro deben aprobarse con la cotización.",
        facts: [
          "Material indicado por el propietario: PU",
          "Diseños mostrados: muñeco de nieve, árbol, corona, lazo, casa y estilos de postre",
          "Colores principales mostrados: rojo, verde y blanco",
          "La mezcla, el tamaño y el embalaje final se confirman por proyecto",
        ],
        applications: ["Regalos navideños", "Tiendas de novedades", "Surtidos estacionales", "Expositores de temporada"],
        buyerChecklist: [
          "Modelos y mezcla requerida",
          "Tamaño y tacto o recuperación deseados",
          "Cantidad por diseño",
          "Embalaje, destino y fecha de campaña",
        ],
        faqs: [
          {
            question: "¿Puedo elegir la mezcla de diseños?",
            answer: "Envíe los diseños y cantidades deseados. La mezcla se revisa según la especificación y la disponibilidad o producción.",
          },
          {
            question: "¿Todos los modelos tienen el mismo tamaño?",
            answer: "La imagen muestra varias direcciones de diseño. Confirme las medidas de cada referencia antes de aprobar el surtido.",
          },
        ],
      },
      {
        slug: "ready-stock-giant-strawberry-squishy",
        name: "Squishy gigante de fresa con stock sujeto a confirmación",
        seoTitle: "Squishy gigante de fresa al por mayor",
        description:
          "Squishy gigante de fresa para venta al por mayor, regalos y expositores. Tamaño de referencia 16 × 13 cm; confirme stock y embalaje.",
        image: "/images/products/ready-stock-giant-strawberry-squishy/hero.png",
        imageAlt: "squishy gigante de fresa para venta al por mayor",
        eyebrow: "FRUTA SQUISHY DE GRAN FORMATO",
        introduction:
          "Juguete de fresa de gran tamaño para tiendas de novedades, regalos de fiesta y exhibiciones. La medida publicada es una referencia del producto mostrado.",
        facts: [
          "Tamaño de referencia: 16 × 13 cm",
          "Forma: fresa de gran formato",
          "Uso comercial: venta minorista, regalos y surtidos de novedades",
          "El stock actual debe confirmarse antes del pedido",
        ],
        applications: ["Expositores minoristas", "Regalos para fiestas", "Tiendas de novedades", "Surtidos de frutas"],
        buyerChecklist: [
          "Cantidad requerida",
          "Confirmación del tamaño final",
          "Embalaje individual y por caja",
          "Destino y fecha de recepción",
        ],
        faqs: [
          {
            question: "¿Cuál es el tamaño del squishy de fresa?",
            answer: "El tamaño de referencia publicado es 16 × 13 cm. Confirme la medida de la oferta antes de aprobar el pedido.",
          },
          {
            question: "¿Está siempre disponible?",
            answer: "No se debe asumir. Solicite una comprobación de stock actual y de embalaje para la cantidad necesaria.",
          },
        ],
      },
    ],
  },
  de: {
    locale: "de",
    languageName: "Deutsch",
    navigation: {
      home: "Startseite",
      wholesale: "Squishies im Großhandel",
      customPu: "Individuelle PU-Squishies",
      contact: "Angebot anfragen",
      language: "Sprache",
    },
    home: {
      seoTitle: "Hersteller für individuelle Squishy-Spielzeuge | LINHAO Toys",
      description:
        "B2B-Entwicklung und Lieferung individueller Squishy-Spielzeuge und Großhandelsserien aus TPR oder PU, mit Markenverpackung und bestätigungspflichtigem Lagerbestand.",
      eyebrow: "B2B-SPIELZEUGBESCHAFFUNG",
      title: "Individuelle Squishy-Spielzeuge und Großhandelsserien für professionelle Einkäufer.",
      introduction:
        "LINHAO Toys zeigt Möglichkeiten für kundenspezifische Entwicklung und Großhandelsbeschaffung. Senden Sie Design, geschätzte Menge, Zielmarkt und Verpackungsanforderungen, damit Material, Muster, Verfügbarkeit und Versand geprüft werden können.",
      quickAnswer:
        "Für eine verwertbare Anfrage nennen Sie Produkt oder Konzept, geschätzte Menge, Zielland, benötigten Termin sowie Verpackungs- und Dokumentenanforderungen. Bestand, Lieferzeit und Bedingungen werden für jede Anfrage neu bestätigt.",
      featureHeading: "Was sollte ein Einkäufer vor der Musteranfrage festlegen?",
      features: [
        {
          title: "Material und Haptik",
          text: "Definieren Sie TPR, PU oder eine andere freigegebene Konstruktion sowie Festigkeit, Rückstellgeschwindigkeit, Oberfläche und Nutzungserlebnis.",
        },
        {
          title: "Form und Dekoration",
          text: "Teilen Sie Maße, Farben, Logo, Gesichtsausdruck, Druck und visuelle Referenzen für die Machbarkeitsprüfung.",
        },
        {
          title: "Markenverpackung",
          text: "Legen Sie Beutel, Box, Display, Etikett, Barcode und Marktinformationen vor der Verpackungsfreigabe fest.",
        },
        {
          title: "Bestellung und Versand",
          text: "Bestätigen Sie Menge, Modellmix, Zielort und Empfangstermin, damit Produktion, Bestand und Transport geprüft werden können.",
        },
      ],
      processHeading: "Erster Beschaffungs- und Entwicklungsablauf",
      process: [
        { title: "1. Briefing", text: "Senden Sie Links, Bilder, Maße, Menge, Zielmarkt und Produktziel." },
        { title: "2. Prüfung", text: "Konstruktion, Anpassungen, Verpackung und fehlende Angaben werden geprüft." },
        { title: "3. Muster", text: "Geben Sie Aussehen, Haptik, Rückstellung, Details und Verpackung am realen Muster frei." },
        { title: "4. Angebot", text: "Bestätigen Sie Spezifikation, Menge, Prüfung, Dokumente und Transport vor der Bestellung." },
      ],
      faqHeading: "Häufige Fragen von Einkäufern",
      faqs: [
        {
          question: "Können Squishy-Spielzeuge individuell entwickelt werden?",
          answer:
            "Projekte mit eigener Form, Farbe, Dekoration, Logo und Verpackung können geprüft werden. Machbarkeit und Bedingungen hängen vom finalen Design, Material, der Menge und dem Zielmarkt ab.",
        },
        {
          question: "Sind alle gezeigten Produkte sofort verfügbar?",
          answer:
            "Nein. Als Lagerware gekennzeichnete Produkte benötigen eine aktuelle Mengen- und Farbprüfung; kundenspezifische Projekte benötigen Entwicklungs- und Musterprüfung.",
        },
        {
          question: "Welche Angaben werden für ein Angebot benötigt?",
          answer:
            "Produkt oder Design, geschätzte Menge, Zielort, benötigter Termin, Verpackung und relevante Dokumentenanforderungen.",
        },
      ],
      ctaTitle: "Bereiten Sie eine klare Anfrage für Ihr nächstes Spielzeugprogramm vor.",
      ctaText: "Senden Sie Produkt, Menge, Zielort und Wunschtermin für eine Prüfung auf Basis der tatsächlichen Spezifikation.",
      ctaLabel: "Prüfung und Angebot anfragen",
    },
    wholesale: {
      seoTitle: "Squishy-Spielzeuge im Großhandel | B2B-Lieferant",
      description:
        "Vergleichen Sie Squishy-Spielzeuge für den Großhandel mit bestätigungspflichtigem Lagerbestand sowie PU- und TPR-Optionen für Händler und Saisonprogramme.",
      eyebrow: "SQUISHY-GROSSHANDEL",
      title: "Squishy-Spielzeuge für Großhändler, Distributoren und Einzelhändler.",
      introduction:
        "Diese erste Auswahl umfasst bestätigungspflichtige Lagerartikel und eine weihnachtliche PU-Serie. Jede Anfrage sollte Menge, Farben, Verpackung, Kartondaten, Termin und Marktanforderungen klären.",
      quickAnswer:
        "Es gibt keine einheitliche Mindestmenge oder Lieferzeit für alle Produkte. Senden Sie die ausgewählten Links, Menge je Modell, Zielort und Empfangstermin, damit Verfügbarkeit und vergleichbare Angebotsdaten geprüft werden können.",
      productHeading: "Erste Auswahl für deutschsprachige Einkäufer",
      checklistHeading: "Diese Angaben gehören in die Anfrage",
      checklist: [
        "Link oder Name jedes Produkts",
        "Gesamtmenge und Menge je Modell oder Farbe",
        "Zielland, Stadt und Postleitzahl",
        "Benötigter Empfangstermin",
        "Einzelverpackung, Etikett oder Barcode",
        "Dokumentenanforderungen des Zielmarkts",
      ],
      faqHeading: "Fragen zum Großhandelseinkauf",
      faqs: [
        {
          question: "Können mehrere Modelle gemeinsam versendet werden?",
          answer:
            "Eine gemischte Sendung kann geprüft werden. Die Möglichkeit hängt von Verfügbarkeit, Mengen, Verpackung und Kartondaten ab.",
        },
        {
          question: "Ist der auf der Website gezeigte Bestand garantiert?",
          answer:
            "Nein. Die Verfügbarkeit ändert sich mit Bestellungen und muss vor Zahlung oder Transportplanung erneut bestätigt werden.",
        },
        {
          question: "Kann die Verpackung eines Lagerartikels angepasst werden?",
          answer:
            "Bestimmte Etiketten oder Sekundärverpackungen können geprüft werden, können aber Menge und Zeit beeinflussen. Nennen Sie die Anforderung vor der Angebotsbestätigung.",
        },
      ],
      ctaTitle: "Fordern Sie eine Bestandsprüfung oder individuelle Entwicklung an.",
      ctaText: "Nennen Sie Produkt, Menge, Zielort, Verpackung und Wunschtermin.",
      ctaLabel: "B2B-Anfrage senden",
    },
    products: [
      {
        slug: "ready-stock-highland-cow-tpr-squishy",
        name: "Highland-Rind TPR Squishy mit bestätigungspflichtigem Bestand",
        seoTitle: "Highland-Rind TPR Squishy im Großhandel",
        description:
          "Highland-Rind TPR Squishy in Braun und Orange mit Verkaufsbox. Fordern Sie eine aktuelle Bestands-, Verpackungs- und Versandprüfung an.",
        image: "/images/products/ready-stock-highland-cow-tpr-squishy/hero.png",
        imageAlt: "braune und orange Highland-Rind TPR Squishies für den Großhandel",
        eyebrow: "TPR-TIER-SQUISHY",
        introduction:
          "Highland-Rind-Modell für Geschenk-, Neuheiten- und Impulsprogramme. Das gezeigte Produkt besteht aus TPR und wird in zwei Farben mit Verkaufsbox dargestellt.",
        facts: [
          "Für dieses Produkt angegebenes Material: TPR",
          "Gezeigte Farben: Braun und Orange",
          "Gezeigte Präsentation: Einzelverkaufsbox",
          "Die verfügbare Menge muss vor der Bestellung bestätigt werden",
        ],
        applications: ["Geschenkläden", "Neuheitengeschäfte", "Impulsdisplays", "Spielzeugsortimente"],
        buyerChecklist: [
          "Menge je Farbe und akzeptabler Mix",
          "Zielort und Empfangstermin",
          "Einzel- und Kartonverpackung",
          "Etikett- oder Barcodeanforderungen",
        ],
        faqs: [
          {
            question: "Ist das Produkt in Braun und Orange erhältlich?",
            answer: "Diese Farben werden gezeigt. Die aktuelle Menge je Farbe muss mit der Anfrage geprüft werden.",
          },
          {
            question: "Gehört eine Verkaufsbox dazu?",
            answer: "Die gezeigte Referenz verwendet eine Präsentationsbox. Bestätigen Sie die genaue Verpackung und Kartondaten im Angebot.",
          },
        ],
      },
      {
        slug: "christmas-pu-squishy-toy-assortment",
        name: "Weihnachtliches PU-Squishy-Sortiment",
        seoTitle: "Weihnachts-PU-Squishies im Großhandel",
        description:
          "Weihnachtliche PU-Squishies mit Schneemann-, Baum-, Kranz-, Schleifen-, Haus- und Dessertmotiven für saisonale Programme.",
        image: "/images/products/christmas-pu-squishy-toy-assortment/hero.png",
        imageAlt: "weihnachtliches PU-Squishy-Spielzeugsortiment",
        eyebrow: "SAISONALE WEIHNACHTSSERIE",
        introduction:
          "Visuelle Kollektion für Geschenke, Neuheitenhandel und Saisonaktionen. PU wurde vom Eigentümer als Material bestätigt; finaler Mix, Größe, Haptik, Verpackung und Liefertermin müssen im Angebot freigegeben werden.",
        facts: [
          "Vom Eigentümer angegebenes Material: PU",
          "Gezeigte Motive: Schneemann, Baum, Kranz, Schleife, Haus und Dessertformen",
          "Gezeigte Hauptfarben: Rot, Grün und Weiß",
          "Mix, Größe und finale Verpackung werden je Projekt bestätigt",
        ],
        applications: ["Weihnachtsgeschenke", "Neuheitengeschäfte", "Saisonsortimente", "Aktionsdisplays"],
        buyerChecklist: [
          "Gewünschte Motive und Mischung",
          "Größe und gewünschte Haptik oder Rückstellung",
          "Menge je Design",
          "Verpackung, Zielort und Kampagnentermin",
        ],
        faqs: [
          {
            question: "Kann der Designmix ausgewählt werden?",
            answer: "Senden Sie die gewünschten Motive und Mengen. Der Mix wird anhand von Spezifikation und Verfügbarkeit oder Produktion geprüft.",
          },
          {
            question: "Haben alle Motive dieselbe Größe?",
            answer: "Das Bild zeigt verschiedene Designrichtungen. Bestätigen Sie die Maße jeder Referenz vor der Sortimentsfreigabe.",
          },
        ],
      },
      {
        slug: "ready-stock-giant-strawberry-squishy",
        name: "Riesen-Erdbeer-Squishy mit bestätigungspflichtigem Bestand",
        seoTitle: "Riesen-Erdbeer-Squishy im Großhandel",
        description:
          "Riesen-Erdbeer-Squishy für Großhandel, Geschenke und Displays. Referenzgröße 16 × 13 cm; Bestand und Verpackung bitte bestätigen.",
        image: "/images/products/ready-stock-giant-strawberry-squishy/hero.png",
        imageAlt: "Riesen-Erdbeer-Squishy für den Großhandel",
        eyebrow: "GROSSES FRUCHT-SQUISHY",
        introduction:
          "Großformatiges Erdbeer-Spielzeug für Neuheitengeschäfte, Partygeschenke und aufmerksamkeitsstarke Displays. Das veröffentlichte Maß ist eine Referenz des gezeigten Produkts.",
        facts: [
          "Referenzgröße: 16 × 13 cm",
          "Form: großformatige Erdbeere",
          "Kommerzielle Verwendung: Einzelhandel, Geschenke und Neuheitensortimente",
          "Der aktuelle Bestand muss vor der Bestellung bestätigt werden",
        ],
        applications: ["Einzelhandelsdisplays", "Partygeschenke", "Neuheitengeschäfte", "Fruchtsortimente"],
        buyerChecklist: [
          "Benötigte Menge",
          "Bestätigung der finalen Größe",
          "Einzel- und Kartonverpackung",
          "Zielort und Empfangstermin",
        ],
        faqs: [
          {
            question: "Wie groß ist das Erdbeer-Squishy?",
            answer: "Die veröffentlichte Referenzgröße beträgt 16 × 13 cm. Bestätigen Sie das Angebotsmaß vor der Bestellfreigabe.",
          },
          {
            question: "Ist es immer auf Lager?",
            answer: "Davon sollte nicht ausgegangen werden. Fordern Sie eine aktuelle Bestands- und Verpackungsprüfung für die benötigte Menge an.",
          },
        ],
      },
    ],
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedProduct(locale: Locale, slug: string) {
  return localizedCatalog[locale].products.find((product) => product.slug === slug);
}

export function localizedAlternates(path: "home" | "wholesale" | "customPu" | "product", slug?: string) {
  const english =
    path === "home"
      ? "/"
      : path === "wholesale"
        ? "/wholesale-squishy-toys"
        : path === "customPu"
          ? "/custom-pu-squishy-manufacturer"
          : `/products/${slug}`;

  return {
    en: english,
    es:
      path === "home"
        ? "/es"
        : path === "wholesale"
          ? "/es/squishy-toys"
          : path === "customPu"
            ? "/es/custom-pu-squishy-manufacturer"
            : `/es/products/${slug}`,
    de:
      path === "home"
        ? "/de"
        : path === "wholesale"
          ? "/de/squishy-toys"
          : path === "customPu"
            ? "/de/custom-pu-squishy-manufacturer"
            : `/de/products/${slug}`,
    "x-default": english,
  };
}
