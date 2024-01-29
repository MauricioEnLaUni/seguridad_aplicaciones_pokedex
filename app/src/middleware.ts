import createMiddleware from 'next-intl/middleware';
import { Pathnames } from "next-intl/navigation";

const locales = ["es", "en"];
const pathnames = {
    "/": "/",
    pathnames: {
        es: "/direcciones",
        en: "/pathnames"
    }
} satisfies Pathnames<typeof locales>;

export default createMiddleware({
  defaultLocale: 'es',
  locales,
  pathnames,
  localePrefix: undefined
});

export const config = {
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};