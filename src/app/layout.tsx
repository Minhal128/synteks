import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synteks — Building Tomorrow. Together.",
  description:
    "Software agency for Web2, Web3, mobile apps, cloud, cybersecurity, and AI/ML. Premium quality at $20/hr.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
