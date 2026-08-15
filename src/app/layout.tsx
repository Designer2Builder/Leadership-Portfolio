import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { cn } from "@/lib/utils";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
  axes: ["GRAD", "ROND", "wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alicia Wood — Product Design Leader",
  description:
    "Senior Manager, Product Design at Intuit Credit Karma. Leadership portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(googleSansFlex.variable, "h-full")}>
      <body className="flex min-h-full flex-col font-sans">
        <Nav />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
