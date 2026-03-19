import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adaptive Liquidity Labs | Economic Infrastructure & Autonomous Systems",
  description: "Advanced infrastructure for the full liquidity lifecycle. Autonomous tools, coordination systems, and intelligence platforms for civilian and institutional environments.",
  keywords: "liquidity infrastructure, autonomous systems, economic coordination, adaptive infrastructure, financial systems, algorithmic liquidity",
  metadataBase: new URL("https://adaptiveliquiditylabs.com"),
  alternates: {
    canonical: "https://adaptiveliquiditylabs.com",
  },
  openGraph: {
    title: "Adaptive Liquidity Labs",
    description: "Adaptive, autonomous systems for the full liquidity lifecycle.",
    url: "https://adaptiveliquiditylabs.com",
    siteName: "Adaptive Liquidity Labs",
    type: "website",
    images: [
      {
        url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-sophisticated-liquidity-intelligence-m-1773923424923-83e65bbb.png",
        alt: "Adaptive Liquidity Labs - Economic Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaptive Liquidity Labs",
    description: "Building adaptive economic infrastructure.",
    images: [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-sophisticated-liquidity-intelligence-m-1773923424923-83e65bbb.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${dmSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}