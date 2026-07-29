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
    detail: "Glitter squishy · safety testing",
    kind: "TEST REPORT",
    available: false,
  },
  {
    id: "cpc",
    label: "Children's Product Certificate",
    detail: "For the documented tested product",
    kind: "CERTIFICATE",
    available: false,
  },
];

export const availableComplianceDocs = complianceDocs.filter((doc) => doc.available);
