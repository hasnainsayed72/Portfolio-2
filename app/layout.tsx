import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasnainsayed.dev"),
  title: "Mohammad Hasnain Sayed — ERP & Digital Transformation",
  description:
    "Customer Success & Implementation leader with 6+ years forging raw operations into refined, high-adoption SaaS and ERP systems across healthcare, manufacturing and FMCG.",
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
    title: "Mohammad Hasnain Sayed — ERP & Digital Transformation",
    description:
      "6+ years forging raw operations into systems that scale. 45+ SaaS/ERP go-lives across healthcare, manufacturing and FMCG.",
    type: "website",
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
