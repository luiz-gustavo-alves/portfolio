import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/sections/header";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import OpenGraphImage from '@/../public/assets/metadata/opengraph.jpg';

import "../globals.css";
import "../../styles/animation.css";
import "../../styles/html-generator.css";
import Footer from "@/components/sections/footer";
import { defaultOpenGraphMetadata } from "@/lib/metadata/defaultOpenGraph";
import formatDescription from "@/lib/metadata/formatDescription";
import { getTranslations } from "next-intl/server";
import { GlobalMessageKeys } from "@/i18n/keys";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const websiteUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const metadata = {
    title: 'Luiz Gustavo Alves',
    description: t(`${GlobalMessageKeys.HomePage}.Hero.content`),
  };

  return {
    metadataBase: new URL(websiteUrl),
    title: {
      template: `%s - ${metadata.title}`,
      default: `${metadata.title}`,
    },
    description: formatDescription(metadata.description),
    openGraph: {
      ...defaultOpenGraphMetadata,
      title: `${metadata.title}`,
      description: formatDescription(metadata.description),
      images: {
        url: OpenGraphImage.src,
        width: 1200,
        height: 630,
      }
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/metadata/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="max-w-[1920px] mx-auto">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}