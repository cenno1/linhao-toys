export const PLACEHOLDER_HERO = "/images/products/placeholder-hero.svg";

/** Slugs with uploaded hero photography in public/images/products/{slug}/ */
export const PRODUCT_HERO_AVAILABLE = new Set([
  "glitter-bao-bun",
  "glitter-basket-blue",
  "butter-stick",
  "mini-animal-mix",
  "halloween-shiny-bao",
]);

export function resolveProductHero(slug: string, hero: string): string {
  return PRODUCT_HERO_AVAILABLE.has(slug) ? hero : PLACEHOLDER_HERO;
}

export function productImageSizes(grid = false): string {
  return grid
    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    : "(max-width: 768px) 100vw, 50vw";
}
