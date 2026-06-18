import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pragya Dwivedi | Software Engineering Student",
  description:
    "Portfolio of Pragya Dwivedi. B.Tech CSE student at RKGIT focused on Java, Spring Boot, backend development, and software engineering.",
  keywords: [
    "Pragya Dwivedi",
    "Software Engineering Student",
    "Java Developer",
    "Spring Boot",
    "Backend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Pragya Dwivedi" }],
  openGraph: {
    title: "Pragya Dwivedi | Software Engineering Student",
    description:
      "Portfolio of Pragya Dwivedi. B.Tech CSE student at RKGIT focused on Java, Spring Boot, backend development, and software engineering.",
    url: "https://pragya638.github.io",
    siteName: "Pragya Dwivedi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragya Dwivedi | Software Engineering Student",
    description:
      "Portfolio of Pragya Dwivedi. B.Tech CSE student at RKGIT focused on Java, Spring Boot, backend development, and software engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0A0A0A]`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
