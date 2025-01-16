import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = ["en-US", "bn-BD"]; // Supported locales
const defaultLocale = "en-US";

// Function to get the preferred locale
function getLocale(request: Request): string {
  const negotiatorHeaders = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") || "",
    },
  });
  const languages = negotiatorHeaders.languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  // Skip paths that already include a locale or are API calls
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));
  if (!hasLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: "/((?!_next|api/).*)", // Apply to all routes except `_next` and `api`
};
