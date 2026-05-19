"use client"

import "./globals.css";
import Header from "./components/Header";
import { Nunito_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { matchPathname } from "./lib/utility";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isBookDetailPage = matchPathname(pathname)
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} min-h-screen max-w-screen md:max-w-360 mx-auto`}
      >
        {isBookDetailPage ? (
          <div className="hidden md:block">
            <Header />
          </div>
        ) : (
          <Header />
        )}
        {children}
      </body>
    </html>
  );
}
