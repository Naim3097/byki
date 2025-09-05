import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BYKI App - Malaysia's #1 Automotive Diagnostic Platform | Free Download",
  description: "Experience professional-grade automotive diagnostics with the BYKI app. AI-powered insights, real-time monitoring, 200+ certified workshops. Free download for iOS & Android.",
  keywords: [
    "BYKI app download",
    "automotive diagnostics app Malaysia", 
    "car diagnostic app free",
    "vehicle health monitoring",
    "OBD2 diagnostic app",
    "Malaysia workshop network",
    "automotive maintenance app",
    "professional car diagnostics",
    "AI vehicle diagnostics",
    "automotive app Malaysia"
  ].join(", "),
  authors: [{ name: "BYKI Malaysia" }],
  openGraph: {
    title: "BYKI App - Malaysia's #1 Automotive Diagnostic Platform",
    description: "Professional automotive diagnostics in your pocket. AI-powered insights, real-time monitoring, and access to 200+ certified workshops across Malaysia.",
    url: "https://byki.my/app",
    siteName: "BYKI",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "/images/app-screenshots/byki-app-hero.jpg",
        width: 1200,
        height: 630,
        alt: "BYKI App - Professional Automotive Diagnostics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BYKI App - Malaysia's #1 Automotive Diagnostic Platform",
    description: "Professional automotive diagnostics in your pocket. Free download for iOS & Android.",
    images: ["/images/app-screenshots/byki-app-hero.jpg"],
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
  alternates: {
    canonical: "https://byki.my/app",
  },
};
