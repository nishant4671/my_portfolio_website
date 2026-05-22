import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="antialiased selection:bg-primary/30">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
