import type { Metadata } from "next";
import OpenGraphImage from '@/../public/assets/metadata/opengraph.jpg';
import { defaultOpenGraphMetadata } from "@/lib/metadata/defaultOpenGraph";

export function generateMetadata(): Metadata {
  const websiteUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const metadata = {
    title: 'Luiz Gustavo Alves',
  };

  return {
    metadataBase: new URL(websiteUrl),
    openGraph: {
      ...defaultOpenGraphMetadata,
      title: `${metadata.title}`,
      images: {
        url: OpenGraphImage.src,
        width: 1200,
        height: 630,
      }
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
