import { ReactElement, ReactNode } from "react";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import Header from "./components/header/Header";
import Footer from "./components/Footer";

const locales = ["en", "es"];
type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
}

export async function generateMetadata({
    params: { locale },
}: Omit<Props, "children">) {
    const t = await getTranslations({ locale, namespace: "LocaleLayout" });

    return {
        title: t("title"),
    };
}

const LocaleLayout = ({
    children,
    params: { locale },
}: {
    children: ReactElement;
    params: { locale: "en" | "es" };
}) => {
    if (!locales.includes(locale)) notFound();
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default LocaleLayout;
