import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAVINDU BIMSARA // Software Engineer & Associate DevOps Engineer",
  description:
    "Software Engineering undergraduate and Associate DevOps Engineer specializing in full-stack development, GCP & AWS cloud infrastructure, Kubernetes, Terraform, and CI/CD automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} bg-background bg-grid-blueprint text-on-surface font-sans antialiased relative min-h-screen`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
