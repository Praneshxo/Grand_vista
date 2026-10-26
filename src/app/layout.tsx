import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interiia — Award-Winning Interior Design Studio",
  description: "Interiia designs spaces that are tactile, considered, and built around how life actually happens. Based in Toronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F6F2EA] text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
