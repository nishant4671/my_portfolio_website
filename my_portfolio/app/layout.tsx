import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant Kumar | Portfolio",
  description: "Software Engineering & AI Intern - Portfolio of Nishant Kumar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "antialiased selection:bg-primary/30")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
