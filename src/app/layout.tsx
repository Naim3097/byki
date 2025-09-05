import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://byki.my'),
  title: "BYKI - Malaysia's Advanced Automotive Diagnostic Platform",
  description: "Professional automotive diagnostics for every Malaysian driver. Download the BYKI app and get the SXAN device (RM59) for comprehensive vehicle diagnostics and workshop network access.",
  keywords: "automotive diagnostics Malaysia, car diagnostics, OBD2 scanner Malaysia, vehicle diagnostic tool, BYKI app, SXAN device, workshop network Malaysia, automotive technology",
  authors: [{ name: "BYKI Malaysia" }],
  creator: "BYKI Malaysia",
  publisher: "BYKI Malaysia",
  applicationName: "BYKI Automotive Diagnostics",
  generator: "Next.js",
  openGraph: {
    title: "BYKI - Malaysia's Advanced Automotive Diagnostic Platform",
    description: "Professional automotive diagnostics for every Malaysian driver. Get the BYKI app and SXAN device for RM59.",
    url: "https://byki.my",
    siteName: "BYKI",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BYKI - Malaysia's Advanced Automotive Diagnostic Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@byki_my",
    creator: "@byki_my",
    title: "BYKI - Malaysia's Advanced Automotive Diagnostic Platform",
    description: "Professional automotive diagnostics for every Malaysian driver",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  manifest: "/manifest.json",
  category: "automotive",
  classification: "Automotive Diagnostics",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://byki.my" />
        <link rel="alternate" hrefLang="en-my" href="https://byki.my" />
        <link rel="alternate" hrefLang="ms-my" href="https://byki.my/ms" />
        <meta name="theme-color" content="#195B4C" />
        <meta name="msapplication-TileColor" content="#195B4C" />
        <meta name="apple-mobile-web-app-title" content="BYKI" />
        <meta name="application-name" content="BYKI" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "BYKI",
              "applicationCategory": "AutomotiveApplication",
              "operatingSystem": "Android, iOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "MYR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "50000"
              },
              "description": "Malaysia's most advanced automotive diagnostic platform"
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
