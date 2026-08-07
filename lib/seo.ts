export const SITE_URL = "https://linhaotoys.com";
export const SITE_NAME = "LINHAO Toys";
export const DEFAULT_OG_IMAGE = "/images/hero-blue-bun.png";
export const SITE_LAST_MODIFIED = "2026-08-05";

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
