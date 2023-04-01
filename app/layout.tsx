import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import "@/styles/globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SUHEL MAKKAD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} wrapper text-md bg-light text-dark antialiased transition-colors dark:bg-dark dark:text-light sm:text-lg`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
