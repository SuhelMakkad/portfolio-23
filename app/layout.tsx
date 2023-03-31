import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import "@/styles/globals.css";

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
    <html lang="en">
      <body
        className={`${inter.className} wrapper bg-light text-dark dark:bg-dark dark:text-light`}
      >
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
