import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaviconLinks from "@/components/FaviconLinks";

import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suhel Makkad",
  description:
    "Frontend engineer with over a 2 years of experience building nice things for good people.",
  manifest: "/assets/favicon/manifest.json",
  authors: [
    {
      name: "Suhel Makkad",
      url: "https://github.com/SuhelMakkad/portfolio-23",
    },
  ],
  colorScheme: "dark",
  creator: "Suhel Makkad",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <FaviconLinks />
      </head>

      <body
        className={`${inter.className} wrapper text-md bg-light text-dark antialiased transition-colors duration-300 dark:bg-dark dark:text-light sm:text-lg`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
