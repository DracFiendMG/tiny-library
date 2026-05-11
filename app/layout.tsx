import "./globals.css";
import Header from "./components/Header";
import { Nunito_Sans } from "next/font/google";

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
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} max-w-screen md:max-w-[1440px] mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
