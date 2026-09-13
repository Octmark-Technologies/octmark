import type { Metadata } from "next";
import { Didact_Gothic, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.octmark.com";

const didactGothic = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-didact",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Octmark, Growth Operations Partner",
    template: "%s | Octmark",
  },
  description:
    "Octmark helps growth-stage businesses build the systems that compound. Fewer guesses. More growth.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Octmark",
    locale: "en_IN",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Octmark",
    url: SITE_URL,
    logo: `${SITE_URL}/images/OCTMARK_LOGO.png`,
    description:
      "Octmark helps growth-stage businesses build the systems that compound. Fewer guesses. More growth.",
  };

  return (
    <html
      lang="en"
      className={`${didactGothic.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
