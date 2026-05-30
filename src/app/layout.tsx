import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gem Solar - Clean Energy Solutions",
  description: "Solar panel installation and clean energy solutions for residential and commercial properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

