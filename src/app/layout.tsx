import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taha Sabir | Computer Science & Mathematics",
  description:
    "Computer Science and Mathematics major passionate about building software that solves real-world problems. Full-stack developer, robotics enthusiast, and audio processing specialist.",
  keywords: [
    "Taha Sabir",
    "Computer Science",
    "Mathematics",
    "Software Developer",
    "Full-stack",
    "React",
    "Python",
    "Java",
  ],
  authors: [{ name: "Taha Sabir" }],
  openGraph: {
    title: "Taha Sabir | Computer Science & Mathematics",
    description:
      "Computer Science and Mathematics major passionate about building software that solves real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
