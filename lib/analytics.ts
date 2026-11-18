export function trackEvent(name: string, parameters?: Record<string, unknown>) {
  try {
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      window.localStorage.getItem("linhao_analytics_consent") === "accepted"
    ) {
      window.gtag("event", name, parameters);
    }
  } catch {
    // Analytics or disabled browser storage must never interrupt an inquiry.
  }
}
