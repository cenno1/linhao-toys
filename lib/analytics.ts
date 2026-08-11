export function trackEvent(name: string, parameters?: Record<string, unknown>) {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    window.localStorage.getItem("linhao_analytics_consent") === "accepted"
  ) {
    window.gtag("event", name, parameters);
  }
}
