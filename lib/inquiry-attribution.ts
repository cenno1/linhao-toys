export type InquiryAttribution = {
  leadId: string;
  sourcePage: string;
  landingPage: string;
  referrerHost: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

const STORAGE_KEYS = {
  landingPage: "linhao_landing_page",
  referrerHost: "linhao_referrer_host",
  utmSource: "linhao_utm_source",
  utmMedium: "linhao_utm_medium",
  utmCampaign: "linhao_utm_campaign",
} as const;

type SearchParamsReader = Pick<URLSearchParams, "get">;

function clean(value: string | null | undefined, max = 200) {
  return (value ?? "").trim().slice(0, max);
}

function setFirstSessionValue(key: string, value: string) {
  if (value && !window.sessionStorage.getItem(key)) {
    window.sessionStorage.setItem(key, value);
  }
}

export function captureConsentedSessionAttribution(
  pathname: string,
  searchParams: SearchParamsReader,
) {
  if (
    typeof window === "undefined" ||
    window.localStorage.getItem("linhao_analytics_consent") !== "accepted"
  ) {
    return;
  }

  try {
    setFirstSessionValue(STORAGE_KEYS.landingPage, clean(pathname));

    if (document.referrer) {
      const referrerHost = new URL(document.referrer).hostname;
      if (referrerHost && referrerHost !== window.location.hostname) {
        setFirstSessionValue(STORAGE_KEYS.referrerHost, clean(referrerHost));
      }
    }

    setFirstSessionValue(STORAGE_KEYS.utmSource, clean(searchParams.get("utm_source")));
    setFirstSessionValue(STORAGE_KEYS.utmMedium, clean(searchParams.get("utm_medium")));
    setFirstSessionValue(STORAGE_KEYS.utmCampaign, clean(searchParams.get("utm_campaign")));
  } catch {
    // Browsers can disable storage. Analytics and inquiry delivery should still work.
  }
}

function createLeadId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createInquiryAttribution(): InquiryAttribution {
  const emptyAttribution: InquiryAttribution = {
    leadId: createLeadId(),
    sourcePage: typeof window === "undefined" ? "" : clean(window.location.pathname),
    landingPage: "",
    referrerHost: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
  };

  if (
    typeof window === "undefined" ||
    window.localStorage.getItem("linhao_analytics_consent") !== "accepted"
  ) {
    return emptyAttribution;
  }

  try {
    return {
      ...emptyAttribution,
      landingPage: clean(window.sessionStorage.getItem(STORAGE_KEYS.landingPage)),
      referrerHost: clean(window.sessionStorage.getItem(STORAGE_KEYS.referrerHost)),
      utmSource: clean(window.sessionStorage.getItem(STORAGE_KEYS.utmSource)),
      utmMedium: clean(window.sessionStorage.getItem(STORAGE_KEYS.utmMedium)),
      utmCampaign: clean(window.sessionStorage.getItem(STORAGE_KEYS.utmCampaign)),
    };
  } catch {
    return emptyAttribution;
  }
}

