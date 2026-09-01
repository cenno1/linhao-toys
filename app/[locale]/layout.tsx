import { notFound } from "next/navigation";
import { isLocale } from "@/lib/localized-catalog";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <div lang={locale}>{children}</div>;
}
