export type ComplianceDoc = {
  id: string;
  label: string;
  detail: string;
  kind: "TEST REPORT" | "CERTIFICATE";
  href?: string;
  available: boolean;
};

export const complianceDocs: ComplianceDoc[] = [
  {
    id: "en71",
    label: "EN71",
    detail: "Squeeze toy · EU safety standard",
    kind: "TEST REPORT",
    href: "/certificates/en71-squeeze-toy-linhao.pdf",
    available: true,
  },
  {
    id: "astm",
    label: "ASTM F963-23",
    detail: "Glitter squishy · report XNO260702852XX2-1",
    kind: "TEST REPORT",
    href: "/certificates/astm-f963-23-linhao.pdf",
    available: true,
  },
  {
    id: "cpc",
    label: "Children's Product Certificate",
    detail: "CPC for documented squishy program · XNO260702852XX2-1",
    kind: "CERTIFICATE",
    href: "/certificates/cpc-linhao.pdf",
    available: true,
  },
];

export const productCatalogPdf = {
  href: "/downloads/linhao-squishy-product-catalog.pdf",
  label: "LINHAO squishy product catalog",
};

export const availableComplianceDocs = complianceDocs.filter((doc) => doc.available);
