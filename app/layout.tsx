import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
import MobileStickyBar from "@/components/web/MobileStickyBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asian Eye Hospital & Laser Institute | Best Eye Hospital in Pune",
  description: "Pune's premier NABH-accredited eye care destination. Specialist surgeons for LASIK, Contoura Vision, ReLEx SMILE, Cataract, and Retina treatments.",
  metadataBase: new URL("https://www.asianeyehospital.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FAFBFD] text-[#34495E]">
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
