import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ad Momenta Decision OS",
  description: "B2B Multi-Metric Correlation Engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-500/30 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
