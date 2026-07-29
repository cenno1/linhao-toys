export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is the MOQ for custom squishy toys?",
    answer:
      "LINHAO Toys typically starts OEM squishy projects at 100 pieces per SKU. Final MOQ depends on mold complexity, material, printing and packaging. We confirm the practical minimum after reviewing your design.",
  },
  {
    question: "How long does squishy toy sampling take?",
    answer:
      "Simple squishy samples are usually ready in 3–7 business days after artwork and specifications are confirmed. Complex shapes, new molds or multi-color programs may need additional development time.",
  },
  {
    question: "What can be customized on an OEM squishy project?",
    answer:
      "Shape, dimensions, softness, color, glitter effect, face artwork, logo, hangtags, barcodes, inner packs and retail packaging can be developed according to the project and destination market.",
  },
  {
    question: "What is the difference between OEM and ODM at LINHAO Toys?",
    answer:
      "OEM means you provide the reference design and we manufacture to your approved sample. ODM means we adapt LINHAO-developed shapes, colors or packaging for your brand, market or retail channel.",
  },
  {
    question: "Which safety certifications do squishy toys need for the US and EU?",
    answer:
      "Common requirements include EN71 for EU squeeze toys, ASTM F963-23 for the US market and a CPC where applicable. LINHAO can provide documented EN71 testing and arrange additional testing by product and destination.",
  },
  {
    question: "Do you support Amazon FBA and retail packaging?",
    answer:
      "Yes. We support barcode labels, FNSKU/FBA carton guidance, PDQ displays, blister cards, blind bags, gift boxes and market-specific packaging artwork for Amazon sellers and retail buyers.",
  },
  {
    question: "How long does mass production take after sample approval?",
    answer:
      "Most approved squishy programs move into bulk production in about 25–35 days, depending on order size, material availability, printing complexity and packaging requirements.",
  },
  {
    question: "Can you ship worldwide?",
    answer:
      "Yes. LINHAO Toys supports export to 30+ markets and can coordinate common shipping documents, carton marks and Incoterms agreed with your freight forwarder.",
  },
  {
    question: "What should I include in a factory inquiry?",
    answer:
      "Send a reference image or drawing, target quantity, product size, destination market, packaging preference, certification needs and target launch date. This helps us quote sampling and production accurately.",
  },
  {
    question: "Do you make plush toys and bag charms as well as squishies?",
    answer:
      "Yes. LINHAO develops squishy toys, plush comfort gifts, bag charms and emotional gift sets, which helps buyers combine categories under one OEM supplier.",
  },
  {
    question: "Can you support low-MOQ test orders for new Amazon listings?",
    answer:
      "We can recommend a practical launch quantity after reviewing mold, material and packaging needs. Some projects can start with sampling and a limited first production run before scaling.",
  },
  {
    question: "How does quality control work during production?",
    answer:
      "QC covers material checks, in-process appearance review, function and recovery testing, packaging verification and pre-shipment inspection against the approved sample and purchase specification.",
  },
  {
    question: "Which markets do you support?",
    answer:
      "We work with international buyers in North America, Europe, Asia-Pacific and the Middle East. Final compliance and labeling depend on the product, material and destination market.",
  },
  {
    question: "Can LINHAO develop private-label squishy collections?",
    answer:
      "Yes. We support private-label color series, character families, seasonal collections and retail-ready packaging for distributors, gift shops and promotional campaigns.",
  },
];

/** First four items shown on the homepage FAQ module. */
export const homepageFaqItems = faqItems.slice(0, 4);
