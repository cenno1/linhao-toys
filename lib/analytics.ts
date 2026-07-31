export function trackEvent(name: string, parameters?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, parameters);
  }
}
