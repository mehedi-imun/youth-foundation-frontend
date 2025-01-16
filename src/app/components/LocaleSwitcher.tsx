"use client";

import Link from "next/link";

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const locales = ["en-US", "bn-BD"];
  const otherLocales = locales.filter((locale) => locale !== currentLocale);

  return (
    <div>
      {otherLocales.map((locale) => (
        <Link key={locale} href={`/${locale}`}>
          {locale === "en-US" ? "English" : "বাংলা"}
        </Link>
      ))}
    </div>
  );
}
