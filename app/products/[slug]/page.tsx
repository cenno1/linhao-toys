import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";
import { getProductBySlug } from "@/lib/product-utils";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  productJsonLd,
} from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return buildPageMetadata({
    title: product.name,
    description: product.note,
    path: `/products/${product.slug}`,
    keywords: product.keywords,
    ogImage: product.images.hero,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />
      <ProductDetail product={product} />
    </>
  );
}
