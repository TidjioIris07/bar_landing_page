import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velvet Pour | Bar",
  description:
    "Experience refined mixology at Velvet Pour — a modern bar offering expertly crafted cocktails, an inviting atmosphere, and a seamless digital experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
