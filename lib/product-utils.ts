import { products, type Product, type ProductFilterGroup } from "./products";

export const PRODUCT_MOQ = 100;

const READY_STOCK_SLUGS = new Set([
  "ready-stock-highland-cow-tpr-squishy",
  "ready-stock-mango-squishy",
  "ready-stock-giant-peach-squishy",
  "ready-stock-cheese-cube-squishy",
  "ready-stock-giant-strawberry-squishy",
  "ready-stock-giant-banana-squishy",
  "ready-stock-dragon-fruit-squishy",
  "ready-stock-halloween-butter-bar-squishy",
]);

export const FULL_GALLERY_SLUGS = new Set([
  "dessert-cake-pu-squishy-keychain-assortment",
  "fruit-building-block-squishy-assortment",
  "custom-bunny-plush-keychain",
  "custom-teddy-bear-plush-keychain",
  "halloween-pumpkin-candy-corn-squishy",
  "ready-stock-highland-cow-tpr-squishy",
  "glitter-bao-bun",
  "glitter-basket-blue",
  "butter-stick",
  "mini-animal-mix",
  "custom-pu-fruit-animal-figures",
]);

export type ProductGalleryItem = {
  id: string;
  src: string;
  label: string;
};

type ProductBuyingProfile = {
  specifications: ProductSpecification[];
  customization: string[];
  useCases: string[];
  buyerBrief: string[];
  packagingAnswer: string;
};

const productBuyingProfiles: Partial<Record<string, ProductBuyingProfile>> = {
  "christmas-pu-squishy-toy-assortment": {
    specifications: [
      { label: "Material", value: "PU material stated by the owner; final material and finish confirmed against the approved sample" },
      { label: "Designs shown", value: "Snowman, Christmas tree cake, wreath, bow cake, house and paw-style holiday directions" },
      { label: "Assortment", value: "Final design mix, colors and quantity ratio confirmed with the quotation" },
      { label: "Feel and rebound", value: "Softness and recovery target confirmed on the approved sample" },
      { label: "Packaging", value: "Individual protection, gift packing or display presentation confirmed with the quotation" },
    ],
    customization: [
      "Christmas character and dessert design mix",
      "Red, green, white and buyer-specified colorways",
      "Surface decoration and printed details",
      "Size, softness and rebound target",
      "Assortment ratio and seasonal display packing",
      "Private-label card, bag or gift box",
    ],
    useCases: [
      "Christmas gift and novelty programs",
      "Seasonal retail displays",
      "Holiday party-favor assortments",
      "Gift shops and online seasonal sellers",
    ],
    buyerBrief: [
      "Required quantity and destination market",
      "Selected Christmas designs and mix ratio",
      "Target size and squeeze reference",
      "Packing, labels and display requirements",
      "Requested delivery window",
    ],
    packagingAnswer:
      "The supplied image shows a mixed Christmas sample presentation. Confirm individual protection, gift box, display tray, labels and outer-carton requirements with the quotation.",
  },

  "sesame-braided-bread-pu-squishy": {
    specifications: [
      { label: "Material", value: "PU material stated by the owner; final material and coating confirmed against the approved sample" },
      { label: "Design", value: "Braided toasted bread form with black and white sesame-style decoration" },
      { label: "Reference size", value: "10 × 5.5 × 5.5 cm shown in the supplied image; production tolerance confirmed with the sample" },
      { label: "Presentation shown", value: "Paper baking tray shown; final unit protection and retail packing confirmed with the quotation" },
      { label: "Feel and rebound", value: "Softness and recovery target confirmed on the approved sample" },
    ],
    customization: [
      "Bread shape and braided surface detail",
      "Toast color shading and sesame-style decoration",
      "Target dimensions and squeeze feel",
      "Paper tray, protective bag or retail box",
      "Logo label and barcode",
      "Mixed bakery-series assortment",
    ],
    useCases: [
      "Bakery-themed novelty assortments",
      "Food sensory toy programs",
      "Gift shops and impulse retail",
      "Online novelty sellers",
    ],
    buyerBrief: [
      "Required quantity and destination market",
      "Target size and softness reference",
      "Color and surface-decoration confirmation",
      "Unit packing and labeling requirements",
      "Requested timing",
    ],
    packagingAnswer:
      "A paper baking tray is visible in the supplied image. Confirm protective bag, tray print, retail box, label and outer-carton requirements with the quotation.",
  },

  "dessert-cake-pu-squishy-keychain-assortment": {
    specifications: [
      { label: "Material", value: "PU material stated by the owner; final material and coating confirmed against the approved sample" },
      { label: "Designs shown", value: "Chocolate pudding, pink strawberry cake, brown sweet biscuit and blue strawberry roll-cake directions" },
      { label: "Accessories shown", value: "Clear zip-style cover with keyring, bell or flower-shaped charm details; final hardware confirmed with the quotation" },
      { label: "Assortment", value: "Final design mix, colors and quantity ratio confirmed with the quotation" },
      { label: "Feel and rebound", value: "Size, softness and recovery target confirmed on the approved sample" },
    ],
    customization: [
      "Dessert design and color assortment",
      "Cream, fruit and drizzle decoration",
      "Keyring, bell and charm hardware",
      "Clear protective cover color and stitching",
      "Size, softness and rebound target",
      "Private-label card, bag or retail box",
    ],
    useCases: [
      "Food-themed bag charms and keychains",
      "Dessert novelty assortments",
      "Gift shops and accessory retailers",
      "Online impulse and collectible programs",
    ],
    buyerBrief: [
      "Required quantity and destination market",
      "Selected dessert designs and mix ratio",
      "Keyring, bell and charm requirements",
      "Target size and squeeze reference",
      "Packing, labels and requested timing",
    ],
    packagingAnswer:
      "The supplied photos show clear zip-style protective covers and accessory hardware. Confirm cover construction, backing card, labels, retail box and outer-carton requirements with the quotation.",
  },

  "chocolate-drizzle-cream-cake-pu-squishy": {
    specifications: [
      { label: "Material", value: "PU material stated by the owner; final material and coating confirmed against the approved sample" },
      { label: "Design", value: "Square cream-cake direction with pink textured cream, chocolate-colored drizzle and colorful decorations" },
      { label: "Decoration", value: "Final cream texture, drizzle pattern and decorative mix confirmed against the approved sample" },
      { label: "Feel and rebound", value: "Size, softness and recovery target confirmed on the approved sample" },
      { label: "Packaging", value: "Individual protection and retail presentation confirmed with the quotation" },
    ],
    customization: [
      "Cake shape and cream texture",
      "Drizzle color and pattern",
      "Decorative piece color mix",
      "Size, softness and rebound target",
      "Protective bag, card or retail box",
      "Private-label artwork and barcode",
    ],
    useCases: [
      "Bakery-themed novelty assortments",
      "Food sensory toy programs",
      "Gift shops and impulse displays",
      "Online novelty sellers",
    ],
    buyerBrief: [
      "Required quantity and destination market",
      "Target size and squeeze reference",
      "Cream, drizzle and decoration requirements",
      "Packing and label requirements",
      "Requested timing",
    ],
    packagingAnswer:
      "Confirm individual protective packing, backing card or retail-box presentation, labels and outer-carton requirements with the quotation.",
  },


  "aurora-glitter-strawberry-slow-rise-squishy": {
    specifications: [
      { label: "Design direction", value: "Translucent strawberry form with aurora glitter flakes" },
      { label: "Color assortment", value: "Four-color assortment stated; final colors and ratio confirmed with the quotation" },
      { label: "Fill direction", value: "Maltose-style fill stated by the owner; exact composition confirmed against the sample" },
      { label: "Rebound", value: "Slow-rise direction; recovery target confirmed on the approved sample" },
      { label: "Packaging", value: "Individual protective packing or buyer-specified retail presentation confirmed with the quotation" },
    ],
    customization: [
      "Four-color assortment and color ratio",
      "Aurora glitter-flake appearance",
      "Strawberry shape and stem details",
      "Softness and slow-rise rebound target",
      "Individual or mixed-SKU packing",
      "Private-label card, bag or retail box",
    ],
    useCases: [
      "Fruit-themed sensory assortments",
      "Novelty and gift retail",
      "Color-mix impulse displays",
      "Stress-relief toy programs",
    ],
    buyerBrief: [
      "Required quantity and destination market",
      "Four-color selection and ratio",
      "Target size and rebound reference",
      "Glitter appearance and fill confirmation",
      "Packaging, labels and requested timing",
    ],
    packagingAnswer:
      "The supplied image shows loose product samples. Confirm individual protective packing, labels, display or retail-box requirements with the quotation.",
  },

  "fruit-building-block-squishy-assortment": {
    specifications: [
      { label: "Designs shown", value: "Potato, strawberry, cheese cube and wedge, plus a white ball with colored building-block pieces" },
      { label: "Sound and feel", value: "Supplied visuals show a crunchy sound and soft squeeze direction; confirm the exact internal construction, sound response and hand feel on the approved sample" },
      { label: "Packing shown", value: "Clear potato unit box and countertop display presentation shown; final unit and outer-carton configuration confirmed with the quotation" },
    ],
    customization: [
      "Food shape and assortment mix",
      "Surface color, texture and decorative details",
      "Target firmness and crunchy sound direction",
      "Unit box, assortment pack or display presentation",
      "Artwork, label and barcode requirements",
    ],
    useCases: ["Novelty toy retail", "Sensory and desk-toy ranges", "Gift and impulse displays", "Food-themed assortments"],
    buyerBrief: ["Required quantity", "Preferred designs and ratio", "Target size and squeeze feel", "Sound requirement", "Destination country", "Required packaging", "Requested receiving date"],
    packagingAnswer: "The replacement visuals show a clear potato unit box and a countertop display tray. Confirm the selected design mix, printed artwork, unit pack, display quantity, label or barcode requirement and outer-carton configuration with the quotation.",
  },
  "custom-bunny-plush-keychain": {
    specifications: [
      { label: "Product type", value: "Bunny plush keychain and bag charm with two character and outfit directions shown" },
      { label: "Material", value: "Confirm the outer fabric, pile, filling and hand feel during sampling or quotation" },
      { label: "Attachment", value: "Keyring, clip, chain or loop configuration is confirmed for the selected design and intended use" },
    ],
    customization: [
      "Rabbit proportions, ear shape and expression",
      "Fabric color, pile and filling",
      "Facial embroidery and outfit details",
      "Keyring, clip, chain or loop hardware",
      "Woven label, hang card, bag or gift-box packaging",
    ],
    useCases: ["Fashion bag accessories", "Gift and seasonal collections", "Collectible plush ranges", "Promotional merchandise"],
    buyerBrief: ["Required quantity", "Rabbit artwork or preferred reference", "Target size", "Fabric and color direction", "Hardware choice", "Destination country", "Required packaging", "Requested receiving date"],
    packagingAnswer: "No final retail packaging specification is confirmed from the supplied photos. Confirm the unit pack, branded card or box, barcode or label requirement and outer-carton configuration with the quotation.",
  },
  "custom-teddy-bear-plush-keychain": {
    specifications: [
      { label: "Product type", value: "Plush teddy bear keychain and bag charm with outfit and attachment variations shown" },
      { label: "Material", value: "Confirm the outer fabric, filling and hand feel during sampling or quotation" },
      { label: "Hardware", value: "Clip, ring, strap and label configuration are confirmed for the selected design" },
    ],
    customization: [
      "Bear color, face and expression",
      "Seasonal or everyday outfit direction",
      "Embroidery, buyer logo and woven label",
      "Clip, keyring or wrist-strap hardware",
      "Retail card, bag or gift-box packaging",
    ],
    useCases: ["Fashion bag accessories", "Gift and seasonal collections", "Collectible plush programs", "Promotional merchandise"],
    buyerBrief: ["Required quantity", "Preferred bear and outfit design", "Target size", "Hardware choice", "Destination country", "Required packaging", "Requested receiving date"],
    packagingAnswer: "No final retail packaging specification is confirmed from the supplied photos. Confirm the unit pack, branded card or box, barcode or label requirement and outer-carton configuration with the quotation.",
  },
  "sea-salt-blue-coconut-oil-squishy-ball": {
    specifications: [
      { label: "Design shown", value: "Round handmade squishy ball with a sea-salt-blue focus and pastel color references" },
      { label: "Material", value: "Moldable coconut-oil squishy construction stated for this product; confirm exact composition with the quotation" },
      { label: "Hand feel", value: "Confirm the preferred firmness, moldability and recovery behavior before ordering" },
    ],
    customization: [
      "Sea-salt blue and pastel color directions shown",
      "Confirm target size and hand feel",
      "Confirm individual or assortment packing",
      "Confirm order quantity and supply timing",
    ],
    useCases: ["Sensory toy assortments", "Desk stress-relief ranges", "Novelty gift retail", "Color-coordinated sets"],
    buyerBrief: ["Required quantity", "Preferred color mix", "Target size and hand feel", "Destination country", "Required packing", "Requested receiving date"],
    packagingAnswer: "No retail packaging is shown in the supplied product photo. Confirm the individual pack, color ratio, label requirement and outer-carton configuration with the quotation.",
  },
  "halloween-pumpkin-candy-corn-squishy": {
    specifications: [
      { label: "Designs shown", value: "Orange pumpkin and orange-yellow-white candy corn squeeze-toy designs" },
      { label: "Material", value: "Confirm the exact squeeze-toy material and recovery feel with the quotation" },
      { label: "Packing", value: "Unit and assortment packing are confirmed after the required design mix and quantity are reviewed" },
    ],
    customization: [
      "Two seasonal designs shown",
      "Confirm the available pumpkin and candy-corn mix",
      "Confirm individual or assortment packing",
      "Confirm order quantity and supply timing",
    ],
    useCases: ["Halloween retail displays", "Holiday gift assortments", "Novelty stores", "Seasonal stress-relief ranges"],
    buyerBrief: ["Required quantity", "Preferred design ratio", "Destination country", "Required packing", "Requested receiving date"],
    packagingAnswer: "No specific retail pack is shown in the supplied photos. Confirm the individual pack, assortment ratio, display option and outer-carton configuration with the quotation.",
  },
  "monster-munch-squishy-display-box": {
    specifications: [
      { label: "Design shown", value: "Green one-eyed Monster Munch squeeze-toy character" },
      { label: "Display box shown", value: "12 × 12 × 12 cm reference dimensions printed on the supplied image" },
      { label: "Material", value: "Confirm the exact squeeze-toy material and recovery feel with the quotation" },
    ],
    customization: [
      "Monster character and green colorway shown",
      "Clear retail display-box presentation shown",
      "Confirm current item and packing configuration",
      "Confirm order quantity and supply timing",
    ],
    useCases: ["Halloween assortments", "Christmas gift ranges", "Novelty stores", "Stress-relief toy displays"],
    buyerBrief: ["Required quantity", "Destination country", "Required packing", "Barcode or label requirement", "Requested receiving date"],
    packagingAnswer: "The supplied image shows one toy in a clear retail display box marked 12 × 12 × 12 cm. Confirm the final unit pack, printed artwork, outer-carton quantity and dimensions with the quotation.",
  },
  "tpr-slow-rising-dice-squishy-color-box": {
    specifications: [
      { label: "Material", value: "TPR squeeze-toy construction stated for this item" },
      { label: "Product form", value: "Slow-rising dice-shaped squishy shown" },
      { label: "Packing shown", value: "Printed color-box presentation; exact unit and carton packing confirmed with quotation" },
    ],
    customization: [
      "TPR slow-rising dice form shown",
      "Printed color-box presentation shown",
      "Confirm current colors and packing configuration",
      "Confirm order quantity and supply timing",
    ],
    useCases: ["Novelty retail", "Gift shops", "Impulse displays", "Wholesale toy assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred color", "Required packing", "Requested receiving date"],
    packagingAnswer: "The photo shows a printed color-box presentation. Confirm the exact unit pack, display configuration, outer-carton quantity and current availability with the quotation.",
  },
  "ready-stock-highland-cow-tpr-squishy": {
    specifications: [
      { label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" },
      { label: "Material", value: "TPR squeeze-toy construction" },
      { label: "Available colorways", value: "Brown and orange shown; confirm the current color allocation with the stock check" },
      { label: "Packing route", value: "Retail presentation box shown; unit packing and outer-carton details confirmed with live inventory" },
    ],
    customization: [
      "Live stock and colorway check",
      "Available retail-box presentation",
      "Carton quantity and dimensions",
      "Dispatch and shipping coordination",
    ],
    useCases: ["Novelty retail", "Gift shops", "Impulse displays", "Bulk animal-toy assortments"],
    buyerBrief: ["Required quantity", "Preferred color allocation", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "The current retail presentation, unit packing, carton quantity, carton dimensions and dispatch timing are confirmed against live stock before the wholesale order is accepted.",
  },
  "dumpling-squishy-blind-box": {
    specifications: [
      { label: "Material route", value: "PU slow-rise or another approved squeeze construction confirmed during sampling" },
      { label: "Assortment format", value: "Original dumpling or bao characters with buyer-approved color and expression ratios" },
      { label: "Packaging route", value: "Blind box, blind bag, display carton or private-label retail box" },
    ],
    customization: [
      "Original dumpling, bao or food-character shapes",
      "Expressions, accessories and secret-edition directions",
      "Colorway and assortment-ratio planning",
      "Softness, recovery and optional scent review",
      "Blind box, display carton and barcode artwork",
      "Private-label inserts, warning labels and export cartons",
    ],
    useCases: ["Blind-box collections", "Impulse retail", "Social-commerce launches", "Gift and vending assortments"],
    buyerBrief: ["Number of characters and colorways", "Target size and squeeze feel", "Total quantity and quantity per design", "Blind-box rarity or assortment plan", "Destination market and packaging format"],
    packagingAnswer: "Blind boxes, blind bags and counter-display cartons can be reviewed together with the character count, assortment ratio, barcode and destination-market labeling.",
  },
  "transparent-gel-cube-squishy": {
    specifications: [
      { label: "Material route", value: "Clear elastomer or gel-style construction selected after firmness and market review" },
      { label: "Visual options", value: "Transparent color, glitter, suspended inclusions or clean crystal appearance" },
      { label: "Packaging route", value: "Protective bag, tray, retail box or gift-set presentation" },
    ],
    customization: [
      "Cube dimensions and corner radius",
      "Firmness, squeeze resistance and rebound behavior",
      "Transparent colors and visual inclusions",
      "Surface finish and dust-control review",
      "Protective inner tray or individual bag",
      "Retail box, barcode and private-label artwork",
    ],
    useCases: ["Desk sensory ranges", "Lifestyle gift sets", "Color assortments", "Online marketplace multipacks"],
    buyerBrief: ["Target dimensions", "Preferred resistance or reference sample", "Color and inclusion directions", "Quantity per color", "Packaging and destination market"],
    packagingAnswer: "Because clear and soft surfaces can show marks or collect dust, the protective bag, tray and outer box should be confirmed during sampling rather than after the product is approved.",
  },
  "capybara-squishy-assortment": {
    specifications: [
      { label: "Material route", value: "PU slow-rise or approved squeeze material selected for the required feel and finish" },
      { label: "Assortment format", value: "Original poses, accessories, expressions and buyer-owned artwork directions" },
      { label: "Packaging route", value: "Open-box retail, blind assortment, display carton or gift set" },
    ],
    customization: [
      "Original capybara poses and proportions",
      "Accessories, expressions and seasonal themes",
      "Color series and assortment ratios",
      "Softness, recovery and surface finish",
      "Face printing, logo and hangtag options",
      "Blind packaging, display cartons and gift boxes",
    ],
    useCases: ["Character collectibles", "Seasonal retail drops", "Gift-shop assortments", "Blind-box and impulse programs"],
    buyerBrief: ["Original artwork or mood board", "Number of poses and accessories", "Target size and feel", "Quantity per design", "Packaging, labels and destination market"],
    packagingAnswer: "Open retail boxes, blind assortments and display cartons are available development directions. Final structure depends on the number of poses, assortment ratio and product dimensions.",
  },
  "soft-sticky-squishy-assortment": {
    specifications: [
      { label: "Material route", value: "Soft TPR/TPE-style or approved sticky-touch construction subject to market-specific review" },
      { label: "Surface control", value: "Tackiness, dust protection, print adhesion and storage behavior reviewed at sampling" },
      { label: "Packaging route", value: "Sealed protective bag with optional retail card, box or multipack" },
    ],
    customization: [
      "Original fruit, animal and abstract shapes",
      "Softness, stretch and surface-tack level",
      "Solid, transparent or gradient color effects",
      "Face artwork and compatible print method",
      "Individual dust-control protective packaging",
      "Private-label card, box and multipack presentation",
    ],
    useCases: ["Trend-led sensory collections", "Fruit and animal assortments", "Impulse gifts", "Private-label multipacks"],
    buyerBrief: ["Shape artwork and approximate size", "Required softness and surface feel", "Color and print directions", "Quantity per design", "Protective packaging and destination market"],
    packagingAnswer: "Individual sealed protection is normally reviewed for sticky-touch products to control dust and surface contact. Retail cards, boxes and multipacks can be built around that inner protection.",
  },
  "custom-tpr-popsicle-butter-cube-squishy": {
    specifications: [
      { label: "Material route", value: "TPR or another approved soft-elastic construction selected for the target squeeze and finish" },
      { label: "Assortment format", value: "Popsicle, butter cube, ice-cream and other original food-inspired novelty shapes" },
      { label: "Color route", value: "Solid, transparent, glitter, gradient or marbled effects reviewed with the production sample" },
      { label: "Packaging route", value: "Individual protective bag, retail card, display box or mixed-SKU multipack" },
    ],
    customization: [
      "Original popsicle, cube, ice-cream and novelty-food shape development",
      "Target softness, rebound and surface-finish direction",
      "Transparent, glitter, swirl or gradient color effects",
      "Compatible logo, message card and private-label artwork",
      "Single-SKU or mixed-shape assortment ratios",
      "Protective bag, counter display and retail multipack packaging",
    ],
    useCases: ["Impulse retail", "Colorful sensory assortments", "Party and gift programs", "Private-label fidget-toy collections"],
    buyerBrief: ["Selected shapes and approximate size", "Target softness and finish", "Color effect and logo artwork", "Quantity per shape", "Packaging, destination market and requested timeline"],
    packagingAnswer: "The assortment can be quoted as individual protected pieces, mixed retail packs or display cartons. Confirm the final shape count, color mix and package size with the pre-production sample before bulk production.",
  },
  "bakery-slow-rise-squishy-assortment": {
    specifications: [
      { label: "Material route", value: "PU slow-rise foam or approved recovery construction confirmed with the reference sample" },
      { label: "Assortment format", value: "Bread, pastry, waffle, cake or dessert shapes with buyer-approved colorways" },
      { label: "Packaging route", value: "Individual bag, printed box, bakery-style display or gift multipack" },
    ],
    customization: [
      "Bread, pastry and dessert shape development",
      "Recovery speed, softness and optional scent",
      "Baked color gradients and face artwork",
      "Single-SKU or mixed bakery assortment",
      "Individual bag, printed box or display tray",
      "Brand labels, inserts, barcodes and export cartons",
    ],
    useCases: ["Food-themed gift retail", "Bakery and café merchandise", "Marketplace multipacks", "Seasonal and promotional sets"],
    buyerBrief: ["Selected bakery shapes", "Target size and recovery speed", "Scent and artwork requirements", "Quantity per shape", "Retail packaging and destination market"],
    packagingAnswer: "The product can be planned as individual packaged pieces, mixed bakery multipacks or counter displays. Scent, shape count and packaging minimums should be quoted together.",
  },
  "adult-desk-sensory-squishy": {
    specifications: [
      { label: "Material route", value: "Silicone, TPR-style or another approved construction selected for resistance and finish" },
      { label: "Design direction", value: "Quiet, minimal forms and lifestyle color palettes without medical claims" },
      { label: "Packaging route", value: "Protective pouch, premium gift box or corporate-branded set" },
    ],
    customization: [
      "Minimal pebble, geometric or original desk forms",
      "Squeeze resistance and rebound behavior",
      "Neutral, seasonal or corporate color palettes",
      "Matte, smooth or compatible tactile finish",
      "Logo, message card and corporate branding",
      "Protective pouch, gift box and set packaging",
    ],
    useCases: ["Corporate gifting", "Lifestyle desk accessories", "Adult sensory collections", "Premium promotional sets"],
    buyerBrief: ["Target user and sales channel", "Preferred shape and dimensions", "Resistance or reference feel", "Brand colors and logo placement", "Gift packaging, quantity and destination market"],
    packagingAnswer: "Protective pouches, premium boxes and corporate gift sets can be developed. Claims and wording should remain lifestyle-focused unless the buyer has appropriate substantiation for another use.",
  },
  "custom-eva-geometric-cutout-squeeze-ball": {
    specifications: [
      { label: "Material route", value: "EVA foam construction selected for the target resilience, color and surface finish" },
      { label: "Typical size", value: "Buyer-specified diameter; final size and weight confirmed with the approved sample" },
      { label: "Packaging route", value: "Individual bag, header card, multipack or promotional-gift presentation" },
    ],
    customization: [
      "Buyer-specified ball diameter and colorway assortment",
      "Original rounded-triangle cutout and diagonal-slot pattern direction",
      "Compatible logo panel, message or event printing",
      "Squeeze resilience and surface-finish review",
      "Individual bag, carded pack or multipack packaging",
      "Mixed-color display pack and private-label artwork",
    ],
    useCases: ["School and party favors", "Promotional giveaways", "Colorful sensory-toy assortments", "Retail gift programs"],
    buyerBrief: ["Target diameter and reference feel", "Color count and logo or print artwork", "Quantity per color", "Individual or multipack packaging", "Destination market and requested timeline"],
    packagingAnswer: "Individual bags, header cards and mixed-color displays can be developed. The packaging dimensions and any print area should be confirmed with the selected ball size before bulk quotation.",
  },
  "custom-jumbo-ghost-squishy": {
    specifications: [
      { label: "Material route", value: "PU slow-rise foam or another buyer-approved construction selected with the production sample" },
      { label: "Typical size", value: "Jumbo format; final dimensions, weight and rebound feel are confirmed after artwork and sampling" },
      { label: "Artwork route", value: "Original ghost silhouette, facial artwork, color palette and compatible logo placement" },
      { label: "Packaging route", value: "Individual bag, color box, party-favor set or seasonal retail display carton" },
    ],
    customization: [
      "Original ghost silhouette, arm shape and base profile",
      "Buyer-approved facial artwork, colors and seasonal accent details",
      "Custom size, density and slow-rise recovery target",
      "Logo, message card and private-label packaging",
      "Single color, mixed-color or seasonal assortment planning",
      "Retail carton, gift box and party-favor presentation",
    ],
    useCases: ["Halloween retail campaigns", "Party favors", "Seasonal gift programs", "Branded promotional giveaways"],
    buyerBrief: ["Original artwork direction and target user", "Preferred size and squeeze or recovery feel", "Colorway and logo placement", "Quantity per color or assortment", "Packaging, destination market and requested timeline"],
    packagingAnswer: "Individual bags, themed retail boxes, party-favor sets and display cartons can be planned around the approved jumbo size. Confirm final artwork and carton dimensions with the pre-production sample before bulk quotation.",
  },
  "ready-stock-mango-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "11.5 × 6 cm" }, { label: "Order route", value: "Bulk wholesale by available color and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Novelty retail", "Gift shops", "Party packs", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Current individual packing and outer-carton details are confirmed with the live stock check. Request a quantity-based quotation before payment.",
  },
  "ready-stock-giant-peach-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "17 × 15 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Novelty retail", "Seasonal displays", "Gift shops", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "The live stock check confirms available pieces, inner packing and carton details before the wholesale order is accepted.",
  },
  "ready-stock-cheese-cube-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "12 × 12 × 12 cm" }, { label: "Packing route", value: "Retail presentation box with wholesale carton packing" }],
    customization: ["Live stock check", "Available retail presentation", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Countertop retail", "Novelty gift packs", "Impulse displays", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "This item is supplied in its available retail presentation. Ask for current carton quantity, carton dimensions and dispatch timing.",
  },
  "ready-stock-giant-strawberry-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "16 × 13 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Novelty retail", "Party gifts", "Gift shops", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Available stock, carton packing and dispatch options are confirmed with the quantity inquiry.",
  },
  "ready-stock-giant-banana-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "35 × 7.5 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Carton quantity", "Individual packing availability", "Dispatch and shipping coordination"],
    useCases: ["Display-focused retail", "Party prizes", "Novelty gift shops", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Because this is an oversized item, current carton quantity and shipping options should be confirmed with the live stock quotation.",
  },
  "ready-stock-dragon-fruit-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Reference size", value: "18.2 × 12 cm" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available colors", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Colorful novelty retail", "Gift assortments", "Party packs", "Bulk wholesale assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "Request a live stock confirmation for available quantity, carton packing and dispatch timing before ordering.",
  },
  "ready-stock-halloween-butter-bar-squishy": {
    specifications: [{ label: "Availability", value: "Ready stock; live quantity confirmed before order acceptance" }, { label: "Season", value: "Halloween retail and party-favor assortment" }, { label: "Order route", value: "Bulk wholesale by available stock and carton quantity" }],
    customization: ["Live stock check", "Available unit-packing review", "Carton quantity", "Dispatch and shipping coordination"],
    useCases: ["Halloween retail", "Party favors", "Seasonal gift shops", "Bulk novelty assortments"],
    buyerBrief: ["Required quantity", "Destination country", "Preferred delivery method", "Required receiving date"],
    packagingAnswer: "The available unit packing and outer-carton details are confirmed with the live stock check. Request a quantity-based quotation before payment.",
  },
};

export type ProductInquiryFormData = {
  company: string;
  email: string;
  projectType: string;
  quantity: string;
  market: string;
  timeline: string;
  packaging: string;
  referenceUrl: string;
  requirements: string;
};

export function getHeroProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductGallery(product: Product): ProductGalleryItem[] {
  const gallery: ProductGalleryItem[] = [
    { id: "hero", src: product.images.hero, label: "Product view" },
  ];

  if (FULL_GALLERY_SLUGS.has(product.slug)) {
    if (product.images.detail) {
      gallery.push({
        id: "detail",
        src: product.images.detail,
        label: "Close-up detail",
      });
    }
    if (product.images.packaging) {
      gallery.push({
        id: "packaging",
        src: product.images.packaging,
        label: "Retail packaging",
      });
    }
    if (product.images.oemCase) {
      gallery.push({
        id: "oemCase",
        src: product.images.oemCase,
        label: "OEM customization reference",
      });
    }
  }

  return gallery;
}

export function getCustomizationOptions(product: Product): string[] {
  const options: Record<ProductFilterGroup, string[]> = {
    squishy: [
      "Custom 3D shape from buyer artwork",
      "Fruit, animal, mascot or character forms",
      "Dimensions & slow-rise softness",
      "Color & glitter fill",
      "Face artwork & pad print",
      "Scent option",
      "Hangtag & barcode label",
      "Retail box / PDQ packaging",
    ],
    plush: [
      "Character & expression design",
      "Fabric color & texture",
      "Embroidery & labeling",
      "Size family (S / M / L)",
      "Gift box & hangtag branding",
      "Display tray / inner pack",
    ],
    "bag-charms": [
      "Flower / charm style",
      "Colorway series",
      "Keyring & chain hardware",
      "Logo tag & card backing",
      "Blister / retail card packaging",
      "Assortment mix",
    ],
    "diy-crafts": [
      "Character, motif or landscape artwork",
      "Material and color palette",
      "Beginner or advanced difficulty",
      "Tools and accessory configuration",
      "Multilingual instruction card",
      "Private-label retail packaging",
    ],
    "emotional-gifts": [
      "Character & mood expression",
      "Material & color",
      "Packaging & gift box",
      "Message card / branding",
      "Size & accessory options",
      "Promotional labeling",
    ],
    oem: [
      "Product mix (squishy + plush + accessory)",
      "Private label branding",
      "Retail gift set layout",
      "Inner pack & display design",
      "Market-specific labeling",
      "Full turnkey packaging",
    ],
  };

  return productBuyingProfiles[product.slug]?.customization ?? options[product.filterGroup];
}

export type ProductSpecification = {
  label: string;
  value: string;
};

export function getProductSpecifications(product: Product): ProductSpecification[] {
  const profile = productBuyingProfiles[product.slug];
  const isReadyStock = READY_STOCK_SLUGS.has(product.slug);

  if (product.detailsOnRequest) {
    return [
      { label: "Product", value: product.name },
      ...(profile?.specifications ?? []),
      { label: "Order quantity", value: "Confirmed with requested quantity and packing" },
      { label: "Supply timing", value: "Confirmed after availability, packing and destination review" },
    ];
  }

  if (isReadyStock) {
    return [
      { label: "Product", value: product.name },
      ...(profile?.specifications ?? []),
      {
        label: "Wholesale supply",
        value: "Ready-stock item supplied according to live inventory and carton availability",
      },
      {
        label: "Stock confirmation",
        value: "Current quantity, packing and dispatch schedule are confirmed with each inquiry",
      },
    ];
  }
  const groupDetails: Record<ProductFilterGroup, ProductSpecification[]> = {
    squishy: [
      { label: "Product type", value: "Soft squeeze / sensory toy" },
      { label: "Customization", value: "Shape, size, color, print and packaging" },
      { label: "Typical buyers", value: "Retailers, distributors, brands and online sellers" },
    ],
    plush: [
      { label: "Product type", value: "Custom plush collectible" },
      { label: "Customization", value: "Character, fabric, embroidery, size and packaging" },
      { label: "Typical buyers", value: "Gift brands, retailers and collectible programs" },
    ],
    "bag-charms": [
      { label: "Product type", value: "Plush bag charm / keychain" },
      { label: "Customization", value: "Shape, fabric, hardware, label and retail card" },
      { label: "Typical buyers", value: "Accessory brands, gift shops and online sellers" },
    ],
    "diy-crafts": [
      { label: "Product type", value: "DIY needle felting, crochet or embroidery kit" },
      { label: "Customization", value: "Design, materials, tools, instructions and packaging" },
      { label: "Typical buyers", value: "Craft retailers, gift brands, workshops and online sellers" },
    ],
    "emotional-gifts": [
      { label: "Product type", value: "Character and emotional-value gift" },
      { label: "Customization", value: "Expression, color, accessory, message and packaging" },
      { label: "Typical buyers", value: "Gift retailers, lifestyle brands and distributors" },
    ],
    oem: [
      { label: "Product type", value: "Turnkey private-label gift set" },
      { label: "Customization", value: "Product mix, branding, inserts and packaging" },
      { label: "Typical buyers", value: "Brand owners, retailers and promotional buyers" },
    ],
  };

  return [
    { label: "Product", value: product.name },
    ...(profile?.specifications ?? []),
    ...groupDetails[product.filterGroup],
    { label: "Indicative MOQ", value: `From ${PRODUCT_MOQ} pcs; confirmed by specification` },
    { label: "Sampling", value: "Typically 3–7 days after specifications are confirmed" },
  ];
}

export function getProductUseCases(product: Product): string[] {
  const useCases: Record<ProductFilterGroup, string[]> = {
    squishy: ["Impulse retail", "Sensory assortments", "Blind bags", "Party and promotional packs"],
    plush: ["Collectible series", "Gift retail", "Desk companions", "Mascot programs"],
    "bag-charms": ["Fashion accessories", "Gift-with-purchase", "Collectible drops", "Bag and key accessories"],
    "diy-crafts": ["Creative gifting", "Craft retail", "Beginner workshops", "Mindful hobby collections"],
    "emotional-gifts": ["Lifestyle gifting", "Seasonal campaigns", "Desk décor", "Promotional programs"],
    oem: ["Private-label launches", "Retail gift sets", "Marketplace bundles", "Promotional campaigns"],
  };
  return productBuyingProfiles[product.slug]?.useCases ?? useCases[product.filterGroup];
}

export function getProductBuyerBrief(product: Product): string[] {
  return productBuyingProfiles[product.slug]?.buyerBrief ?? [
    "Product drawing or reference image",
    "Target dimensions and quantity",
    "Color, artwork and logo requirements",
    "Packaging format",
    "Destination market and requested timing",
  ];
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameGroup = products.filter(
    (item) => item.slug !== product.slug && item.filterGroup === product.filterGroup,
  );
  const otherProducts = products.filter(
    (item) => item.slug !== product.slug && item.filterGroup !== product.filterGroup,
  );
  return [...sameGroup, ...otherProducts].slice(0, limit);
}

export function getProductCategoryLandingPath(filterGroup: ProductFilterGroup): string {
  if (filterGroup === "squishy") return "/wholesale-squishy-toys";
  if (filterGroup === "bag-charms") return "/custom-plush-bag-charms";
  return "/products";
}

export function getProductFAQs(product: Product) {
  const profile = productBuyingProfiles[product.slug];
  const isReadyStock = READY_STOCK_SLUGS.has(product.slug);

  if (product.detailsOnRequest) {
    return [
      {
        question: `Can ${product.name} be customized?`,
        answer: "Any color, artwork or packaging change must be reviewed against the exact product, quantity and production route before it is confirmed.",
      },
      {
        question: `What is the order quantity for ${product.name}?`,
        answer: "Send the quantity you need and the destination market. We will confirm the practical order quantity together with the available packing configuration.",
      },
      {
        question: "Is the color-box packaging included?",
        answer: profile?.packagingAnswer ?? "The shown packaging and exact carton configuration are confirmed with the quotation.",
      },
      {
        question: "Which compliance documents are available for this item?",
        answer: "Testing scope and available documents must be checked against the exact item, age grade and destination market. No product-specific certificate is claimed on this page before that review.",
      },
      {
        question: "What should I send for a useful quotation?",
        answer: "Send the required quantity, destination country, preferred color, packing requirement and requested receiving date.",
      },
    ];
  }

  if (isReadyStock) {
    return [
      {
        question: `Is ${product.name} available now?`,
        answer: "This is a ready-stock wholesale item. We confirm the current quantity, available colors and dispatch schedule when you send your requested quantity.",
      },
      {
        question: "What wholesale quantity can I order?",
        answer: "Order quantity is based on live stock and carton packing. Send the quantity you need and we will confirm the available allocation and price.",
      },
      {
        question: "Can you provide current packing and shipping details?",
        answer: "Yes. We can confirm individual packing, outer-carton quantity, carton dimensions and shipment options after checking live inventory.",
      },
      {
        question: "Can this product be mixed with other ready-stock toys?",
        answer: "Mixed ready-stock assortments may be possible depending on the items, quantities and destination. Include your preferred assortment in the inquiry.",
      },
      {
        question: "What information should I send for a stock quotation?",
        answer: "Send your requested quantity, destination country, preferred shipping method and required receiving date. This lets us check stock and prepare a practical wholesale quotation.",
      },
    ];
  }

  return [
    {
      question: `Can ${product.name} be customized?`,
      answer: "Yes. Available options depend on the product and may include shape, dimensions, color, artwork, logo, labels and retail packaging.",
    },
    {
      question: `What is the MOQ for ${product.name}?`,
      answer: `The indicative starting point is ${PRODUCT_MOQ} pieces. Final MOQ depends on mold, material, printing, assortment and packaging requirements.`,
    },
    {
      question: "Can I approve a sample before mass production?",
      answer: "Yes. Sampling and buyer approval are part of the OEM workflow before the approved reference moves into mass production.",
    },
    {
      question: `Which packaging options are suitable for ${product.name}?`,
      answer: profile?.packagingAnswer ?? "Available directions may include individual bags, retail boxes, hangtags, display trays and multipacks. The practical option depends on product size, quantity, sales channel and destination-market labeling.",
    },
    {
      question: "Which compliance documents are available?",
      answer: "Existing documents are shown on the page where applicable. Final testing and documentation must be confirmed for the exact product, age grade and destination market.",
    },
    {
      question: "What should I send for a useful quotation?",
      answer: "Send the product reference or artwork, target dimensions, quantity per design, destination market, packaging format and requested delivery timing. A reference for softness or resistance is also useful when hand-feel matters.",
    },
  ];
}

export const INQUIRY_EMAIL = "sales@lh-industrial.com";
export const WHATSAPP_NUMBER = "8615088452259";

type WhatsAppContext = "hero" | "product" | "general";

type BuildWhatsAppUrlInput =
  | string
  | {
      productName?: string;
      context?: WhatsAppContext;
    };

export function buildWhatsAppUrl(input: BuildWhatsAppUrlInput = "your products"): string {
  const options =
    typeof input === "string" ? { productName: input, context: "general" as const } : input;
  const context = options.context ?? "general";

  let message =
    "Hello LINHAO Toys, I am interested in your OEM squishy products.";

  if (context === "hero") {
    message =
      "Hello LINHAO Toys, I would like factory pricing for custom squishy OEM / wholesale.";
  } else if (context === "product" && options.productName) {
    message = `Hello LINHAO Toys, I would like a quote for: ${options.productName}`;
  } else if (options.productName) {
    message = [
      "Hello LINHAO Toys,",
      `I am interested in ${options.productName}.`,
      "",
      "Company / brand:",
      "Estimated quantity:",
      "Target market:",
      "Packaging requirements:",
    ].join("\n");
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProductInquiryMailto(productName: string): string {
  const body = [
    `Product: ${productName}`,
    "",
    "Estimated quantity:",
    "Target market:",
    "Preferred packaging:",
    "Additional requirements:",
  ].join("\n");

  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(productName)}&body=${encodeURIComponent(body)}`;
}

export function buildProductInquiryMailtoFromForm(
  productName: string,
  data: ProductInquiryFormData,
): string {
  const body = [
    `Product: ${productName}`,
    "",
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Project type: ${data.projectType}`,
    `Estimated quantity: ${data.quantity}`,
    `Target market: ${data.market}`,
    `Requested timeline: ${data.timeline}`,
    `Preferred packaging: ${data.packaging}`,
    `Reference link: ${data.referenceUrl}`,
    "",
    "Additional requirements:",
    data.requirements,
  ].join("\n");

  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(`${productName} — Inquiry`)}&body=${encodeURIComponent(body)}`;
}
