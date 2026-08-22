import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasnain-sayed.vercel.app"),

  title: "Mohammad Hasnain Sayed - ERP & Digital Transformation",

  description:
    "Customer Success & Implementation leader with 7+ years forging raw operations into refined, high-adoption SaaS and ERP systems across healthcare, manufacturing and FMCG.",

  keywords: [
    "ERP",
    "Digital Transformation",
    "Customer Success",
    "Implementation Consultant",
    "SaaS",
    "Mohammad Hasnain Sayed",
  ],

  authors: [{ name: "Mohammad Hasnain Sayed" }],

  openGraph: {
    title: "Mohammad Hasnain Sayed - ERP & Digital Transformation",
    description:
      "7+ years forging raw operations into systems that scale. 50+ SaaS/ERP go-lives across healthcare, manufacturing and FMCG.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Mohammad Hasnain Sayed - ERP & Digital Transformation",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
