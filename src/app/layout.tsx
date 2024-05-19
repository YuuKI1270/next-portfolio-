import WrapLayout from "@/components/layouts/wrap";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Hello, I'm Siv Kongmeng. I'm web developer.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WrapLayout>{children}</WrapLayout>
      </body>
    </html>
  );
}
