import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider"; // Update path as needed;

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildSpace — Unlocking Land Value. Engineering Long-Term Returns.",
  description:
    "BuildSpace develops industrial and logistics assets through a fully integrated approach spanning land strategy, engineering, approvals, and operational readiness.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
