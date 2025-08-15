import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dagara Royal LTD",
  description:
    "Leading agricultural, poultry, and real estate investments across Ghana. Building sustainable prosperity through diversified growth strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}
      >
        <MouseFollower />
        <TooltipProvider>
          <Toaster />
          <Header />
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
