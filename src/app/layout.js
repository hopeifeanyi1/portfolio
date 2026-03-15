//src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "./components/NavBar";
import CursorSpotlight from "./components/CursorSpotlight";
import ChatBot from "./components/ChatBot";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hope's Portfolio",
  description: "Ifeanyi Hope Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
