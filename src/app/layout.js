// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "./components/NavBar";
import CursorSpotlight from "./components/CursorSpotlight";
import ChatBot from "./components/ChatBot";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://hopeifeanyi.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ifeanyi Hope — Frontend & Full-Stack Engineer",
    template: "%s | Ifeanyi Hope",
  },
  description:
    "Ifeanyi Hope is a Frontend & Full-Stack Engineer with 4 years of experience specialising in React, Next.js, TypeScript, and NestJS. Co-founder of Haco, hackathon winner, and grant recipient.",
  keywords: [
    "Ifeanyi Hope",
    "Hope Ifeanyi",
    "Frontend Engineer",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "NestJS",
    "Nigeria",
    "Software Engineer",
    "CareerlyAI",
    "Haco",
  ],
  authors: [{ name: "Ifeanyi Hope", url: BASE_URL }],
  creator: "Ifeanyi Hope",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Ifeanyi Hope — Portfolio",
    title: "Ifeanyi Hope — Frontend & Full-Stack Engineer",
    description:
      "Frontend & Full-Stack Engineer specialising in React, Next.js, TypeScript, and NestJS. Co-founder of Haco, hackathon winner, and grant recipient.",
    images: [
      {
        url: "/og-image.png", // create a 1200×630 image (see tip below)
        width: 1200,
        height: 630,
        alt: "Ifeanyi Hope — Frontend & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifeanyi Hope — Frontend & Full-Stack Engineer",
    description:
      "Frontend & Full-Stack Engineer specialising in React, Next.js, TypeScript, and NestJS.",
    images: ["/og-image.png"],
    creator: "@hopeifeanyi", // update to your actual handle if you have one
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
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body
        className={`flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-white ${inter.className}`}
      >
        <CursorSpotlight />
        <NavBar />
        {children}
        <ChatBot />
        <Toaster position="bottom-left" />
        <Analytics />
      </body>
    </html>
  );
}