export type BuyerGuide = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  eyebrow: string;
  updated: string;
  readTime: string;
  quickAnswer: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ label: string; href: string }>;
};

export const buyerGuides: BuyerGuide[] = [
  {
    slug: "custom-squishy-toy-moq-cost-guide",
    title: "Custom Squishy Toy MOQ and Cost Drivers: A Buyerâ€™s Guide",
    description:
      "Understand how mold setup, design count, material effects, printing, packaging and order quantity influence a custom squishy toy quotation.",
    eyebrow: "QUOTATION PLANNING",
    updated: "2026-07-31",
    readTime: "7 min read",
    quickAnswer: "Custom squishy MOQ is not one universal number. It is determined by mold setup, quantity per design, material and decoration steps, packaging minimums and the efficiency of the complete production plan.",
    keywords: ["custom squishy toy MOQ", "squishy toy cost", "OEM squishy quotation", "custom toy mold cost", "private label squishy pricing"],
    sections: [
      {
        heading: "MOQ is a production-planning result",
        paragraphs: [
          "A useful MOQ is not determined by one number alone. The practical minimum depends on the mold or tooling plan, number of designs, compound and finish, printing steps, individual packaging and how efficiently the order can move through production.",
          "A standard product with a custom label can usually be planned differently from a completely new shape with several colors and a printed retail box. Buyers should therefore compare quotations with the same specification rather than comparing MOQ in isolation.",
        ],
      },
      {
        heading: "Separate one-time development from unit cost",
        paragraphs: [
          "Ask the quotation to distinguish development or mold costs from the bulk unit price when applicable. This makes it easier to understand which costs may not repeat on a reorder using the same approved design.",
        ],
        checklist: [
          "New shape, mold or structural development",
          "Artwork preparation and sample revisions",
          "Color, glitter, transparency or special surface effects",
          "Number of print positions and colors",
          "Individual packaging and printed inserts",
          "Testing requested for the product and destination market",
        ],
      },
      {
        heading: "Design count changes the production plan",
        paragraphs: [
          "A 3,000-piece order split across one design is not the same production plan as 3,000 pieces split across six designs. Each color change, face artwork, package or assortment can add setup and inspection work.",
          "For a collection, state both total quantity and quantity per design. If you are flexible, ask the manufacturer to propose a practical assortment that reduces unnecessary setup.",
        ],
      },
      {
        heading: "Packaging can have its own minimum",
        paragraphs: [
          "Custom printed bags, boxes and display trays may have supplier minimums that differ from the toy. A standard bag or box with a branded label or insert may be a more practical launch option for a smaller market test.",
        ],
      },
      {
        heading: "Request comparable quotation tiers",
        paragraphs: [
          "Provide one confirmed specification and ask for two or three realistic quantity tiers. Include the destination country and clarify whether freight, testing, retail preparation or marketplace labeling should be quoted separately.",
        ],
        checklist: [
          "Product drawing or reference and target dimensions",
          "Quantity per design and total quantity",
          "Material feel, recovery and visual effects",
          "Logo, printing and artwork requirements",
          "Packaging format and barcode requirements",
          "Destination market and requested delivery timing",
        ],
      },
    ],
    faqs: [
      { question: "What is a typical MOQ for custom squishy toys?", answer: "There is no universal MOQ. An existing product with a buyer label can have a different practical minimum from a new molded shape with multiple designs and printed packaging." },
      { question: "Does each color or character count toward MOQ separately?", answer: "Often the quantity per design matters because each color, face artwork or package variant can add setup and inspection work. State both the total quantity and the split per design." },
      { question: "Can packaging have a different MOQ from the toy?", answer: "Yes. Printed bags, boxes and display trays may have supplier minimums of their own, so packaging should be planned together with the product." },
    ],
    relatedLinks: [
      { label: "Prepare a custom squishy manufacturing brief", href: "/resources/how-to-prepare-custom-squishy-toy-brief" },
      { label: "Compare real product directions", href: "/products" },
      { label: "Request quantity-based quotation options", href: "/contact" },
    ],
  },
  {
    slug: "en71-astm-f963-cpc-toy-compliance-guide",
    title: "ASTM F963 for Squishy Toys: Testing, BPA and CPC Buyer Checklist",
    seoTitle: "ASTM F963 Squishy Toy Testing & CPC Checklist",
    description:
      "Understand ASTM F963-23 for squishy toys, why older ASTM F963-17 reports still appear, how BPA questions should be handled and what belongs in a CPC file.",
    eyebrow: "US COMPLIANCE PLANNING",
    updated: "2026-08-14",
    readTime: "9 min read",
    quickAnswer: "ASTM F963 is the mandatory US toy-safety standard incorporated through 16 CFR part 1250. Toys manufactured after April 20, 2024 must meet ASTM F963-23. The applicable sections depend on the exact product, age grade, materials and functions; a CPC is a separate certificate supported by the applicable testing and records.",
    keywords: ["ASTM F963 squishy toy", "ASTM F963-23", "ASTM F963-17", "ASTM F963 BPA", "CPC toy certificate", "squishy toy testing"],
    sections: [
      {
        heading: "Start with the exact squishy toy and US age grade",
        paragraphs: [
          "Testing and documentation should be planned for the finished product, intended age group, material formulation, colors, coatings, attachments and packaging. A report for one foam shape, TPR formula or filled construction should not automatically be treated as coverage for every future design.",
          "Share the intended US age grade before sampling is finalized. Small parts, liquid or gel filling, scent, coatings, keychain hardware, batteries, magnets and other functions can change which requirements need review.",
        ],
      },
      {
        heading: "ASTM F963-23 is the current mandatory version",
        paragraphs: [
          "CPSC guidance states that childrenâ€™s toys manufactured after April 20, 2024 must meet ASTM F963-23. Search results and supplier files may still mention ASTM F963-17 because that version applied to toys manufactured after February 28, 2018 and before the newer version became mandatory.",
          "Do not compare reports only by the words â€˜ASTM passed.â€™ Check the manufacture date, standard version, exact product identification, tested colors and materials, applicable sections, laboratory and report date.",
        ],
      },
      {
        heading: "Confirm the applicable ASTM F963 sections",
        paragraphs: [
          "ASTM F963 addresses multiple toy hazards, but not every section applies in the same way to every squishy toy. The product construction and intended use determine which mechanical, physical, flammability, material, labeling or toy-specific requirements need review.",
          "Ask the laboratory or responsible compliance professional to identify the applicable sections for the finished product. For a CPC, CPSC guidance requires the applicable ASTM F963 sections to be listed rather than citing only 16 CFR part 1250.",
        ],
      },
      {
        heading: "ASTM F963 is not a universal BPA-free certificate",
        paragraphs: [
          "Buyers sometimes search for â€˜ASTM F963 BPA,â€™ but these should not be treated as interchangeable claims. An ASTM F963 report does not automatically prove that every material or finished toy is BPA-free for every market, retailer or product claim.",
          "If BPA or another restricted substance is important to the project, identify the exact material, destination, age grade and buyer specification. Ask the laboratory or compliance adviser which separate chemical requirement, test method or declaration is appropriate, then keep that evidence with the same product version.",
        ],
      },
      {
        heading: "A CPC is a certificate, not the laboratory report",
        paragraphs: [
          "The US Consumer Product Safety Commission describes a Childrenâ€™s Product Certificate as the written certificate in which the domestic manufacturer or importer certifies that a childrenâ€™s product complies with the applicable childrenâ€™s product safety rules.",
          "A CPSC-accepted laboratory supplies test results; it does not issue the CPC. The responsible manufacturer or importer prepares the certificate for the covered product and must keep its product identification, rules, manufacture details, test details and laboratory information accurate.",
        ],
      },
      {
        heading: "Build a product-specific document file",
        paragraphs: [
          "Keep the approved specification, bill of materials or material description, color and artwork references, age grade, test reports, certificate, production identification and packaging files connected to the same product version.",
        ],
        checklist: [
          "Exact product name, model or SKU on each document",
          "Product photos and tested color or material variants",
          "Applicable standard version and tested sections",
          "Laboratory identity and report issue date",
          "Manufacturer or importer details where required",
          "Batch, production date or traceability information",
        ],
      },
      {
        heading: "Do not substitute EN71 documents for ASTM F963",
        paragraphs: [
          "EN71 supports a European toy-safety discussion, while ASTM F963 and the applicable CPSC rules support a US discussion. They are not interchangeable documents, even when the product looks identical.",
          "For each destination, confirm the current official requirements and connect the report, certificate, labeling and approved product specification to the same finished version.",
        ],
      },
      {
        heading: "Use official guidance for final decisions",
        paragraphs: [
          "This guide is general sourcing information, not legal or regulatory advice. Buyers remain responsible for confirming the rules that apply to their product and market with qualified compliance professionals and current regulator guidance.",
        ],
      },
    ],
    faqs: [
      { question: "Which ASTM F963 version applies to new squishy toys?", answer: "CPSC guidance states that childrenâ€™s toys manufactured after April 20, 2024 must meet ASTM F963-23. The product manufacture date matters when reviewing an older ASTM F963-17 report." },
      { question: "Does ASTM F963 mean a squishy toy is BPA-free?", answer: "Not automatically. Treat BPA or other restricted-substance requests as product-, material- and market-specific requirements and confirm the appropriate evidence separately." },
      { question: "Is a CPC the same as a laboratory test report?", answer: "No. The laboratory supplies testing and results; the responsible domestic manufacturer or importer prepares the CPC for the covered childrenâ€™s product." },
      { question: "When should compliance planning begin?", answer: "Share the destination market and intended age grade before sampling is finalized so product, labeling and testing decisions can be reviewed together." },
    ],
    relatedLinks: [
      { label: "View documented product compliance information", href: "/#compliance" },
      { label: "How long squishy toys last and how durability is checked", href: "/resources/squishy-toy-durability-testing-quality-control-guide" },
      { label: "Browse wholesale squishy toys and product specifications", href: "/wholesale-squishy-toys" },
      { label: "US CPSC toy safety guidance", href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety" },
      { label: "US CPSC ASTM F963 requirements chart", href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety/ASTM-F-963-Chart" },
    ],
  },
  {
    slug: "how-to-prepare-custom-squishy-toy-brief",
    title: "How to Prepare a Custom Squishy Toy Manufacturing Brief",
    description:
      "A practical checklist for sending shape, size, softness, artwork, quantity, packaging and market requirements to a squishy toy manufacturer.",
    eyebrow: "OEM BUYER GUIDE",
    updated: "2026-07-31",
    readTime: "6 min read",
    quickAnswer: "A useful custom squishy brief states the commercial goal, artwork or reference, dimensions, desired squeeze feel, quantity per design, decoration, packaging, age grade, destination market and requested timing.",
    keywords: ["custom squishy toy brief", "squishy toy design requirements", "OEM squishy checklist", "custom squishy sample", "squishy manufacturer quote"],
    sections: [
      {
        heading: "Start with the commercial goal",
        paragraphs: [
          "Explain where the product will be sold and who is expected to buy or use it. A retail impulse item, promotional giveaway, blind-box collectible and marketplace multipack may need different dimensions, packaging and assortment planning.",
          "Include the destination country and intended age grade at the beginning. These details affect labeling, testing discussions and the information a manufacturer needs before confirming production.",
        ],
      },
      {
        heading: "Define the product clearly",
        paragraphs: [
          "Send a drawing, character sheet, reference photo or simple annotated sketch. State which details are essential and which can be adjusted for manufacturing feasibility.",
        ],
        checklist: [
          "Target dimensions and acceptable tolerance",
          "Preferred softness and recovery behavior",
          "Solid, gradient, transparent or glitter appearance",
          "Face artwork, logo and printing positions",
          "Single design or mixed assortment",
          "Any scent, accessory or special surface requirement",
      Û½zöÚ$z{-®éÜj×%6÷VæBGW&–ær6Æ÷r7VVW¦–æræB&WVFVBf–FvWF–ær"À¢$—"Ö÷fVÖVçBF‡&÷Vv‚†öÆW2ÂfÇfW2÷"6V×2"À¢$æö—6Rg&öÒ&VG2Â6†–ç2Â6Æ—2÷"Æö÷6R66W76÷&–W2"À¢%6÷VæBv†VâÆ6VBöâ÷"G&÷VBöçFòFW6²"À¢%6¶vR7&–æ¶ÆRGW&–ær–çFVæFVBW6R"À¢%f—6–&ÆRÖ÷fVÖVçBF†BÖ’F—7G&7BæV&'’W6W'2"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢%FW7B÷W&F–ær6÷VæBæBG&÷6÷VæB6W&FVÇ’"À¢&w&‡3¢°¢$&öGV7B6âfVVÂV–WB–âF†R†æB'WB7&VFRÆ÷VB–×7Bv†VâG&÷VBâ&Wf–Wr6×ÆW2öâ&W&W6VçFF—fR7W&f6W27V6‚2FW6²Â†&BfÆö÷"æBFW6²ÖBÂW6–æröæRFö7VÖVçFVB†V–v‡BæB÷&–VçFF–öâÆâ6VÆV7FVBf÷"F†R–çFVæFVB&öGV7Bâ"À¢%&V6÷&BF†RFW7B6WGWæB6ö×&RFWfVÆ÷ÖVçB6×ÆW2VæFW"F†R6ÖR6öæF—F–öç2âfö–BV&Æ—6†–ærVæ—fW'6ÂFV6–&VÂ&öÖ—6RVæÆW72F†R6Æ–Ò†2&VVâÖV7W&VBæB7W÷'FVBf÷"F†RW†7B&öGV7BæBÖWF†öBâ"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢$FW6–vâf÷"F—67&VWBGVÇBæB7GVFVçBW6R"À¢&w&‡3¢°¢$öff–6R'W–W'2Ö’&VfW"6ö×7Bf÷&×2Â×WFVB6öÆ÷'v—2æB6†W2F†BFòæ÷BÆöö²7G&öævÇ’§WfVæ–ÆRâ6Æ77&ööÒ&öw&×2Ö’&–÷&—F—¦R6ÖÆÂ6—¦RÂV7’–FVçF–f–6F–öâæB6–×ÆR7F÷&vRâW6VgVÂ76÷'FÖVçB6âöffW"F†R6ÖRV–WB6öç7G'V7F–öâ–âF–ffW&VçB6öÆ÷'2æBw&—&öf–ÆW2v—F†÷WBÖ¶–ærÖVF–6Â6Æ–×2â"À¢$6öæf—&Òv†WF†W"66W76÷&–W27V6‚2ÖvæWG2ÂFWF6†&ÆR'G2÷"ÖWFÂ6Æ—2&R&÷&–FRf÷"F†R–çFVæFVBvRw&÷WæB6WGF–ærâvRw&F–æræBFW7F–æF–öâÖÖ&¶WB&WV—&VÖVçG2&VÖ–â6W&FRg&öÒ&VfW&Væ6Rf÷"V–WBW6Râ"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢$&÷fRF†R6¶VB&öGV7B–âF†R&VÂW6R66Væ&–ò"À¢&w&‡3¢°¢$–bF†R&öGV7B—2–çFVæFVBFò&VÖ–â–ç6–FR6ögB&rÂ&÷fRF†R6÷VæBæBfVVÂF‡&÷Vv‚F†BW†7Bf–ÆÒâ–b—Bv–ÆÂ&R&VÖ÷fVBÂ6†V6²7F÷&vRæö—6RÂGW7B–6·WæBv†WF†W"F†R6²6â&R÷VæVBæB6Æ÷6VBv—F†÷WBF—7'WF–ærF†R–çFVæFVBVçf—&öæÖVçBâ"À¢$¶VW&WF–æVB&÷fÂ6×ÆRæB6†÷'Bw&—GFVâ&öf–ÆR6÷fW&–ær6÷VæBÂ6—¦RÂ&W6—7Fæ6RÂ7W&f6RfVVÂÂ6öÆ÷"æB6¶v–ærâF†—2v—fW2&öGV7F–öâæB–ç7V7F–öâFV×2Ö÷&RW6VgVÂ&VfW&Væ6RF†âF†Rv÷&BV–WBÆöæRâ"À¢ÒÀ¢ÒÀ¢ÒÀ¢f3¢°¢²VW7F–öã¢$&R7V—6‡’F÷—26ö×ÆWFVÇ’6–ÆVçCò"Âç7vW#¢$Öç’6ögB7V—6‡’6öç7G'V7F–öç26â&RfW'’V–WBGW&–ær†æBW6RÂ'WB—"Ö÷fVÖVçBÂ7F–6·’6¶v–ærÂ66W76÷&–W2æB66–FVçFÂG&÷2Ö’7F–ÆÂ7&VFR6÷VæBâ&÷fRF†RW†7Bf–æ—6†VB&öGV7B–âF†R–çFVæFVB6WGF–ærâ"ÒÀ¢²VW7F–öã¢%v†BÖ¶W2f–FvWB7V—F&ÆRf÷"âöff–6Sò"Âç7vW#¢$'W–W'2ögFVâÆöö²f÷"Æ÷r÷W&F–æræö—6RÂ6ö×7B6—¦RÂF—67&VWBV&æ6RÂ6ÆVâ†æFÆ–æræBGW&&ÆRWfW'–F’W6RâF†Rf–æÂ7V6–f–6F–öâ6†÷VÆB&VfÆV7BF†RW†7Bv÷&·Æ6RæBVF–Væ6Râ"ÒÀ¢²VW7F–öã¢$6â7WÆ–W"6Æ–ÒF÷’†VÇ27GVFVçG2fö7W3ò"Âç7vW#¢%&öGV7BfVGW&W2æBVç7W÷'FVBF†W&WWF–2÷"VGV6F–öæÂ÷WF6öÖW2&RF–ffW&VçBÖGFW'2â¶VWÖ&¶WF–ær67W&FRæB&Wf–Wrç’W&f÷&Öæ6R÷"†VÇF‚×&VÆFVB6Æ–Òf÷"F†RFW7F–æF–öâÖ&¶WBâ"ÒÀ¢ÒÀ¢&VÆFVDÆ–æ·3¢°¢²Æ&VÃ¢%7V6–g’7V—6‡’f—&ÖæW72æB6—¦R"Â‡&Vc¢"÷&W6÷W&6W2÷7V—6‡’×F÷’Öf—&ÖæW72×&W6—7Fæ6R×6—¦RÖwV–FR"ÒÀ¢²Æ&VÃ¢%&Wf–WrGW&&–Æ—G’æBVÆ—G’Ö6öçG&öÂÆææ–ær"Â‡&Vc¢"÷&W6÷W&6W2÷7V—6‡’×F÷’ÖGW&&–Æ—G’×FW7F–ær×VÆ—G’Ö6öçG&öÂÖwV–FR"ÒÀ¢²Æ&VÃ¢%&VFF—BF—67W76–öâ&÷WB6–ÆVçBöff–6Rf–FvWG2"Â‡&Vc¢&‡GG3¢ò÷wwrç&VFF—Bæ6öÒ÷"öf–FvWGF÷—2ö6öÖÖVçG2ó7SÆr÷v†Eöf–FvWE÷G—U÷F÷•÷6†÷VÆEö•övWE÷F†G5÷6–ÆVçE÷6òò"ÒÀ¢²Æ&VÃ¢%&VFF—BF—67W76–öâ&÷WBV–WB6Æ77&ööÒf–FvWG2"Â‡&Vc¢&‡GG3¢ò÷wwrç&VFF—Bæ6öÒ÷"öf–FvWGF÷—2ö6öÖÖVçG2ó6‡gw’÷v†Eö&U÷F†Uö&W7GV–WFW7F6†VW7Eöf–FvWE÷F÷—5ö–Òò"ÒÀ¢²Æ&VÃ¢%&WVW7BV–WBÖf–FvWBFWfVÆ÷ÖVçB&Wf–Wr"Â‡&Vc¢"ö6öçF7B"ÒÀ¢ÒÀ¢ÒÀ¢°¢6ÇVs¢&æöâ×7F–6·’×7V—6‡’×7W&f6RÖf–æ—6‚ÖwV–FR"À¢F—FÆS¢$æöâÕ7F–6·’7V—6‡’F÷—3¢7W&f6RÔf–æ—6‚æB6¶v–ærwV–FR"À¢6VõF—FÆS¢$æöâÕ7F–6·’7V—6‡’F÷’7W&f6RwV–FRf÷"'W–W'2"À¢FW67&—F–öã ¢$FWfVÆ÷Æ÷vW"×F6²÷"æöâ×7F–6·’7V—6‡’F÷—2'’FVf–æ–ær7W&f6RfVVÂÂ6¶–âÖö–Â&V†f–÷"ÂGW7B–6·WÂ6öF–ærÂ6¶v–æræB6&R6†V6·2öâF†Rf–æ—6†VB&öGV7Bâ"À¢W–V'&÷s¢%5U$d4RdTTÂ"À¢WFFVC¢###bÓ‚Ó‚"À¢&VEF–ÖS¢#‚Ö–â&VB"À¢V–6´ç7vW#¢$æöâ×7F–6·’6†÷VÆB&RG&VFVB2ÖV7W&&ÆR6×ÆRF&vWB&F†W"F†âfwVRÖFW&–ÂÆ&VÂâ'W–W'26†÷VÆB&÷fR–æ—F–ÂF6²ÂfVVÂgFW"&WVFVB†æFÆ–ærÂGW7B–6·WÂ7W&f6RG&ç6fW"Â6ÆVæ–ær–ç7G'V7F–öç2æB6¶v–ær6ö×F–&–Æ—G’öâF†RW†7Bf–æ—6†VB7V—6‡’â"À¢¶W—v÷&G3¢²&æöâ7F–6·’7V—6‡’"Â'7V—6‡’7W&f6R6öF–ær"Â'F6²g&VR6Vç6÷'’F÷’"Â&öff–6R7V—6‡’f–FvWB"Â&GW7B&W6—7FçB7V—6‡’F÷’%ÒÀ¢6V7F–öç3¢°¢°¢†VF–æs¢$FVf–æRv†Bæöâ×7F–6·’ÖVç2f÷"F†R&ö¦V7B"À¢&w&‡3¢°¢$§VÇ’##b&VFF—BF—67W76–öâ†–v†Æ–v‡G2&7F–6Â6ö×Æ–çC¢6öÖRW6W'2Æ–¶RfW'’6ögB7V—6‡’'WBFòæ÷BvçBF†R7W&f6RFò&V6öÖR7F–6·’GW&–ærv÷&¶F’âf÷"6÷W&6–ærÂ6W&FR–æ—F–ÂF6²g&öÒF†Rv’F†R7W&f6R6†ævW2gFW"v&×F‚Â6¶–âö–ÂÂGW7BæB&WVFVB†æFÆ–ærâ"À¢%W6R6ÆV"FW&×27V6‚2Æ÷r–æ—F–ÂF6²ÂG'’×F÷V6‚f–æ—6‚÷"æòFFVBF6²6öF–ærÂF†Vâ6öæf—&ÒF†÷6Rv÷&G2v–ç7Bâ&÷fVB‡—6–6Â6×ÆRâFòæ÷B77VÖRöæRÖFW&–ÂæÖRwV&çFVW2F†R6ÖR7W&f6R&V†f–÷"7&÷727WÆ–W'2â"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢$WfÇVFRF†R6ö×ÆWFR7W&f6R7—7FVÒ"À¢&w&‡3¢°¢$&6RÖFW&–ÂÂ–vÖVçBÂÖöÆFVB6¶–âÂ–çBÂ&–çFVBFV6÷&F–öâæB6ÆV"6öF–ær6âÆÂffV7B†æBfVVÂâG'’×F÷V6‚6×ÆRÖ’6†ævRv†VâF–ffW&VçB6öÆ÷"Â&–çB&V÷"7W&–ær&ö6W72—2–çG&öGV6VBÂ6ò&Wf–WrWfW'’&öGV7F–öâ×&VÆWfçBf–æ—6‚â"À¢ÒÀ¢6†V6¶Æ—7C¢°¢$–æ—F–ÂG'’Ö†æBF6²æBG&r"À¢$fVVÂgFW"&WVFVBv&ÒÖ†æB†æFÆ–ær"À¢$GW7BÂÆ–çBæB†—"–6·W"À¢$6öÆ÷"÷"6öF–ærG&ç6fW""À¢%&–çB7&6¶–ær÷"7W&f6Rv†—FVæ–ær"À¢$öF÷"gFW"6VÆVB6¶v–ær"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢%6–×VÆFR&VÂ†æFÆ–ær&Vf÷&R&÷fÂ"À¢&w&‡3¢°¢$7&VFR&WVF&ÆR†æFÆ–ær6†V6²W6–ærFVf–æVBGW&F–öâÂ6ÆVâ†æG2æB&W&W6VçFF—fR&ööÒ6öæF—F–öç2âö'6W'fRv†WF†W"F†R&öGV7B&V6öÖW2ö–Ç’Â7F–6·’ÂvÆ÷77’ÂGW7G’÷"F–ff–7VÇBFò&VÆV6Rg&öÒF†R†æBâ6ö×&R6×ÆW2W6–ærF†R6ÖRÖWF†öB–ç7FVBöb&VÇ––æröâÖVÖ÷'’â"À¢$–bF†R&öGV7B—2–çFVæFVBf÷"6†&VBöff–6RÂ66†ööÂ÷"&öÖ÷F–öæÂW6RÂ6öç6–FW"†÷rV6–Ç’F†R&÷fVB7W&f6R6â&RÖ–çF–æVBâ6&RÆæwVvR6†÷VÆB&RfÆ–FFVBöâF†RW†7B6öF–æræBFV6÷&F–öâ&F†W"F†â6÷–VBg&öÒæ÷F†W"&öGV7Bâ"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢%6¶v–ær6â&W6W'fR÷"6†ævR7W&f6RfVVÂ"À¢&w&‡3¢°¢$f–ÆÒG—RÂ&–çBÂÆ7F–6—¦W"6ö×F–&–Æ—G’Â7F÷&vR†VBæB&öGV7B×FòÖ&r6öçF7B6â–æfÇVVæ6RV&æ6RæBF6²â&÷fRF†R7V—6‡’gFW"&VÆ—7F–26¶VB7F÷&vRÂæ÷BöæÇ’&Vf÷&R—BVçFW'2F†R&râ"À¢$G&’Â6ögB–ææW"&rÂ6W&F÷"÷"–æF—f–GVÂ&÷‚Ö’&VGV6R7W&f6R6öçF7BæBGW7BW‡÷7W&RâF†R6÷'&V7B&÷WFRFWVæG2öâF†RÖFW&–ÂÂ7W&f6RF&vWBÂ&WF–Â6†ææVÂæB6†—–ær6öæF—F–öç2â"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢$fö–BVç7W÷'FVBÖ–çFVææ6R6†÷'F7WG2"À¢&w&‡3¢°¢$öæÆ–æRW6W'26öÖWF–ÖW27VvvW7B†÷W6V†öÆB÷vFW'2÷"÷F†W"ÖWF†öG2Fò&VGV6R7F–6¶–æW72â&—fFRÖÆ&VÂ'&æB6†÷VÆBæ÷BWB7V6‚Gf–6Röâ6¶vRVæÆW726ö×F–&–Æ—G’Â–çFVæFVBVffV7BæB–ç7G'V7F–öâv÷&F–ær†fR&VVâfÆ–FFVBf÷"F†RW†7Bf÷&×VÆF–öââ"À¢%G&6²6ö×Æ–çG2'’&F6‚æB7W&f6R7V6–f–6F–öââ–bW6W'2&WVFVFÇ’&W÷'BF6²ÂGW7B÷"G&ç6fW"Â&Wf–WrF†Rf÷&×VÆF–öâÂ6öF–ærÂ7W&RÂ6¶v–æræB7F÷&vR6öæF—F–öç2&Vf÷&R6†æv–æröæÇ’F†R6&R–ç7G'V7F–öç2â"À¢ÒÀ¢ÒÀ¢ÒÀ¢f3¢°¢²VW7F–öã¢$6âfW'’6ögB7V—6‡’Ç6òfVVÂæöâ×7F–6·“ò"Âç7vW#¢$—BÖ’&R÷76–&ÆRÂ'WB6ögFæW72æB7W&f6RF6²&R6W&FRGG&–'WFW2â&÷fRF†RW†7BÖFW&–ÂÂf–æ—6‚æB6¶VB6×ÆR&V6W6R6†ævW2Fòf÷&×VÆF–öâ÷"6öF–ær6âffV7B&÷F‚â"ÒÀ¢²VW7F–öã¢$FöW2æöâ×7F–6·’ÖVâGW7B×&ööcò"Âç7vW#¢$æòâÆ÷vW"×F6²7W&f6RÖ’6öÆÆV7BÆW72FV'&—2Â'WBFW‡GW&RÂ7FF–2Â†æFÆ–æræB7F÷&vR7F–ÆÂÖGFW"âWfÇVFRGW7BæBÆ–çB–6·WF—&V7FÇ’â"ÒÀ¢²VW7F–öã¢%6†÷VÆB÷vFW"&R–æ6ÇVFVBv—F‚7F–6·’7V—6‡“ò"Âç7vW#¢$öæÇ’v†VâF†RÖçVf7GW&W"æB'W–W"†fRfÆ–FFVB6ö×F–&–Æ—G’Â–ç7G'V7F–öç2æBFW7F–æF–öâÖÖ&¶WB&WV—&VÖVçG2f÷"F†RW†7B&öGV7BâFòæ÷B&VÇ’6öÆVÇ’öâ6ö6–ÂÖÖVF–Gf–6Râ"ÒÀ¢ÒÀ¢&VÆFVDÆ–æ·3¢°¢²Æ&VÃ¢$6ö×&RRÂE"æB6–Æ–6öæRÖFW&–Â&÷WFW2"Â‡&Vc¢"÷&W6÷W&6W2÷R×g2×G"×g2×6–Æ–6öæR×7V—6‡’ÖÖFW&–ÂÖwV–FR"ÒÀ¢²Æ&VÃ¢%Æâ&—fFRÖÆ&VÂ6&R–ç7G'V7F–öç2"Â‡&Vc¢"÷&W6÷W&6W2÷&—fFRÖÆ&VÂ×7V—6‡’×F÷’Ö6&RÖ–ç7G'V7F–öç2ÖwV–FR"ÒÀ¢²Æ&VÃ¢%&VFF—BF—67W76–öâ&÷WBæöâ×7F–6·’7V—6‡’&VfW&Væ6W2"Â‡&Vc¢&‡GG3¢ò÷wwrç&VFF—Bæ6öÒ÷"öf–FvWGF÷—2ö6öÖÖVçG2óV¶×ƒWR÷vçFVE÷Fõöf–æEöæöå÷7F–6·•÷7V—6‡•öf–FvWE÷F÷’ò"ÒÀ¢²Æ&VÃ¢%&WVW7B7W&f6RÖf–æ—6‚6×ÆR&Wf–Wr"Â‡&Vc¢"ö6öçF7B"ÒÀ¢ÒÀ¢ÒÀ¢°¢6ÇVs¢&7W7FöÒ×7V—6‡’Ö¶W–6†–âÖGF6†ÖVçBÖGW&&–Æ—G’ÖwV–FR"À¢F—FÆS¢$7W7FöÒ7V—6‡’¶W–6†–âGF6†ÖVçC¢GW&&–Æ—G’æB6fWG’wV–FR"À¢6VõF—FÆS¢$7W7FöÒ7V—6‡’¶W–6†–âGF6†ÖVçBæBGW&&–Æ—G’wV–FR"À¢FW67&—F–öã ¢%Æâ7W7FöÒ7V—6‡’¶W–6†–ç2v—F‚&7F–6ÂGF6†ÖVçBÂVÆÂÂGv—7BÂG&÷ÂFV6÷&F–öâÂ6¶v–æræBvRÖw&FR6†V6·2f÷"F–Ç’6''’æB&öÖ÷F–öæÂ&öw&×2â"À¢W–V'&÷s¢$´U”4„”âDUdTÄõÔTåB"À¢WFFVC¢###bÓ‚Ó‚"À¢&VEF–ÖS¢#‚Ö–â&VB"À¢V–6´ç7vW#¢$7V—6‡’¶W–6†–â6†÷VÆB&R&÷fVB2â76VÖ&ÆVB6''’&öGV7Bâ'W–W'2æVVBFòFVf–æRF†RGF6†ÖVçB&÷WFRÂW‡V7FVBÆöBæBF–Ç’×W6R66Væ&–òÂF†Vâ6†V6²VÆÂÂGv—7BÂ&WVFVBÖ÷fVÖVçBÂG&÷–×7BÂÖFW&–ÂFV&–ærÂ†&Gv&Rf–æ—6‚æBÆ–6&ÆRvRÖw&FR&WV—&VÖVçG2â"À¢¶W—v÷&G3¢²&7W7FöÒ7V—6‡’¶W–6†–â"Â'7G&W72&ÆÂ¶W–6†–âv†öÆW6ÆR"Â%R7V—6‡’¶W—&–ær"Â&f–FvWB¶W–6†–âÖçVf7GW&W""Â'7V—6‡’GF6†ÖVçBVÆÂFW7B%ÒÀ¢6V7F–öç3¢°¢°¢†VF–æs¢$¶W–6†–â6†ævW2F†R&öGV7B&—6²&öf–ÆR"À¢&w&‡3¢°¢%&VFF—Bf–FvWBF—67W76–öç2&÷WB÷'F&ÆR¶W–6†–ç2ögFVâÖ÷fRV–6¶Ç’g&öÒV&æ6RFòöæR&7F–6ÂVW7F–öã¢v–ÆÂF†RGF6†ÖVçB7W'f—fRF–Ç’W6Rv—F‚¶W—3òFV6÷&F—fRÆö÷F†Bv÷&·2–â&öGV7B†÷FòÖ’W‡W&–Væ6RVÆÆ–ærÂGv—7F–ærÂ'&6–öâæB&WVFVB–×7Böæ6R6'&–VBöâ&r÷"¶W—&–ærâ"À¢$FW67&–&Rv†WF†W"F†R&öGV7B—2FV6÷&F—fR&r6†&ÒÂ&öÖ÷F–öæÂ¶W–6†–â÷"g&WVVçFÇ’†æFÆVBf–FvWBâF†R–çFVæFVBW6R†VÇ2F†Rf7F÷'’6†ö÷6RæBFW7BF†RGF6†ÖVçB&÷WFRv—F†÷WB&öÖ—6–ærVæÆ–Ö—FVBGW&&–Æ—G’â"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢$6†ö÷6RF†RGF6†ÖVçB&÷WFRv—F‚F†R&öG’FW6–vâ"À¢&w&‡3¢°¢%÷76–&ÆR6öç7G'V7F–öç2–æ6ÇVFRÖöÆFVBÆö÷ÂVÖ&VFFVBW–VÆWBÂFW‡F–ÆR7G&÷"GF6†VB†&Gv&R6ö×öæVçBâV6‚&÷WFR6†ævW2Æö6ÂF†–6¶æW72ÂFV"6öæ6VçG&F–öâÂV&æ6RæB76VÖ&Ç’7FW2âF†R&öG’vVöÖWG'’6†÷VÆB&÷f–FRVæ÷Vv‚ÖFW&–Â&÷VæBF†RGF6†ÖVçB&Vf÷"F†R6VÆV7FVB6öç7G'V7F–öââ"À¢ÒÀ¢6†V6¶Æ—7C¢°¢$&öG’ÖFW&–ÂæBÆö6ÂF†–6¶æW72"À¢$Æö÷ÂW–VÆWBÂ7G&÷"6öææV7F÷"6öç7G'V7F–öâ"À¢%&–ærÂ6†–âÂ6Æ7æBÖWFÂf–æ—6‚"À¢%&÷FF–öâæB'&6–öâB6öçF7Bö–çG2"À¢$FV6÷&F–öâæV"F†RGF6†ÖVçB&V"À¢$vRw&FRæBf÷&W6VV&ÆR66W72Fò6ÖÆÂ6ö×öæVçG2"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢$'V–ÆB&WVF&ÆRGW&&–Æ—G’Æâ"À¢&w&‡3¢°¢$6†V6²VÆÂÂGv—7BÂ&WVFVBfÆW†–æræBG&÷&V†f–÷"W6–ærw&—GFVâ&÷Fö6öÂ6VÆV7FVBf÷"F†R&öGV7BÂ–çFVæFVBW6RæB'W–W"&WV—&VÖVçG2â&V6÷&Bv†W&RFVf÷&ÖF–öâ÷"f–ÇW&R7F'G2æB6ö×&R&Wf—6VB6×ÆW2VæFW"F†R6ÖR6öæF—F–öç2â"À¢%F†W&R—2æò6–ævÆRVæ—fW'6ÂVÆÂfÇVR÷"7–6ÆR6÷VçBF†B7V—G2WfW'’7V—6‡’¶W–6†–ââÆ–6&ÆRF÷’Â&öÖ÷F–öæÂ×&öGV7BæB7W7FöÖW"&WV—&VÖVçG26†÷VÆB&R–FVçF–f–VBf÷"F†RFW7F–æF–öâÖ&¶WBæBW†7BvRw&FRâ"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢$–ç7V7B†&Gv&RæBf–æ—6†VB76VÖ&Ç’"À¢&w&‡3¢°¢%&Wf–Wr6†'VFvW2Â'W''2ÂÆF–ærÂv2Â&–ær6Æ÷7W&RæBv†WF†W"†&Gv&R6â'V"F‡&÷Vv‚F†R6ögB&öG’âFV6÷&F—fR–çB÷"&–çF–æræV"F†RGF6†ÖVçBÖ’7&6²v†VâF†RÆö÷fÆW†W2Â6òF†R76VÖ&ÆVB6×ÆR6†÷VÆB&R†æFÆVB&F†W"F†â&÷fVBöæÇ’g&öÒ7FF–2†÷Fòâ"À¢%&öGV7F–öâ–ç7V7F–öâ6†÷VÆB–æ6ÇVFRGF6†ÖVçB÷6—F–öâÂ†&Gv&R6ö×ÆWFVæW72Âf—6–&ÆRFÖvRæBFö7VÖVçFVB6×ÆRÖ&6VB6†V6²â¶VW&WF–æVB&÷fVBVæ—G2g&öÒF†Rf–æÂÖFW&–ÂæB†&Gv&R6öÖ&–æF–öââ"À¢ÒÀ¢ÒÀ¢°¢†VF–æs¢%6¶vRFò&WfVçBG&ç6—BFÖvRæBFævÆ–ær"À¢&w&‡3¢°¢$Æö÷6R6†–ç2æB&–æw26âÖ&²–çFVB7V—6‡’ÂFævÆRv—F‚æV–v†&÷&–ærVæ—G2÷"&W72–çFò6ögB7W&f6W2GW&–ær6†—ÖVçBâ6öç6–FW"&÷FV7F—fR&rÂ&6¶–ær6&BÂ†&Gv&R&W7G&–çB÷"6ö×'FÖVçBF†B¶VW2ÖWFÂv’g&öÒFVÆ–6FRFV6÷&F–öââ"À¢$&÷fRF†R6¶VBVæ—BgFW"6ö×&W76–öâÂf–'&F–öâ÷"÷F†W"G&ç7÷'B6†V6·2&÷&–FRFòF†R÷&FW"â6öæf—&Ò&&6öFRÂv&æ–æræB6÷VçG'’×7V6–f–2Æ&VÆ–ær&V2&Vf÷&R&–çFVB6¶v–ær—2f–æÆ—¦VBâ"À¢ÒÀ¢ÒÀ¢ÒÀ¢f3¢°¢²VW7F–öã¢$6âç’7V—6‡’6†R&RGW&æVB–çFò¶W–6†–ãò"Âç7vW#¢$æ÷BWFöÖF–6ÆÇ’âF†–â&ö¦V7F–öç2ÂfW'’6ögBÖFW&–Ç2æBÆ–Ö—FVBGF6†ÖVçBF†–6¶æW72Ö’&WV—&RFW6–vâ6†ævR÷"F–ffW&VçB6öææV7F÷"&÷WFR&Vf÷&RGW&&ÆR6×ÆR6â&R&öGV6VBâ"ÒÀ¢²VW7F–öã¢$—2ÖWFÂW–VÆWB7G&öævW"F†âÖöÆFVBÆö÷ò"Âç7vW#¢$æV—F†W"—2Væ—fW'6ÆÇ’7G&öævW"âW&f÷&Öæ6RFWVæG2öâÖFW&–ÂÂvVöÖWG'’Â–ç6W'F–öâÖWF†öBÂÆö6ÂF†–6¶æW72Â†&Gv&RæBF†R6ö×ÆWFR76VÖ&ÆVBFW6–vââ6ö×&R&÷fVB6×ÆW2v—F‚öæRFW7BÆââ"ÒÀ¢²VW7F–öã¢$FöW27V—6‡’¶W–6†–âæVVBF÷’FW7F–æsò"Âç7vW#¢%&WV—&VÖVçG2FWVæBöâF†R&öGV7BÂ–çFVæFVBvRw&÷WÂ6Æ–×2æBFW7F–æF–öâÖ&¶WBâ6öæf—&ÒF†RÆ–6&ÆR7FæF&G2æBFö7VÖVçFF–öâf÷"F†RW†7Bf–æ—6†VBfW'6–öâv—F‚—G2†&Gv&Râ"ÒÀ¢ÒÀ¢&VÆFVDÆ–æ·3¢°¢²Æ&VÃ¢%&Wf–Wr7V—6‡’GW&&–Æ—G’æBVÆ—G’6öçG&öÂ"Â‡&Vc¢"÷&W6÷W&6W2÷7V—6‡’×F÷’ÖGW&&–Æ—G’×FW7F–ær×VÆ—G’Ö6öçG&öÂÖwV–FR"ÒÀ¢²Æ&VÃ¢%&W&R7W7FöÒ7V—6‡’ÖçVf7GW&–ær'&–Vb"Â‡&Vc¢"÷&W6÷W&6W2ö†÷r×Fò×&W&RÖ7W7FöÒ×7V—6‡’×F÷’Ö'&–Vb"ÒÀ¢²Æ&VÃ¢%&VFF—BF—67W76–öâ&÷WBF–Ç’¶W–6†–âGW&&–Æ—G’"Â‡&Vc¢&‡GG3¢ò÷wwrç&VFF—Bæ6öÒ÷"öf–FvWGF÷—2ö6öÖÖVçG2óFæ·f2÷6õö6öÖf÷'F&ÆUö–å÷F†Uö†æG2ò"ÒÀ¢²Æ&VÃ¢%&WVW7B7W7FöÒ¶W–6†–âfV6–&–Æ—G’&Wf–Wr"Â‡&Vc¢"ö6öçF7B"ÒÀ¢ÒÀ¢ÒÀ¥Ó° Ğ¦W‡÷'BgVæ7F–öâvWD'W–W$wV–FR‡6ÇVs¢7G&–ær’°Ğ¢&WGW&â'W–W$wV–FW2æf–æB‚†wV–FR’ÓâwV–FRç6ÇVrÓÓÒ6ÇVr“°Ğ§ĞĞ