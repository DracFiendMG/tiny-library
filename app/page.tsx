import Image from "next/image";
import { Lato } from "next/font/google";
import { CSSProperties } from "react";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"]
})

const imageStyle: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  borderRadius: '50%',
  zIndex: -1
}

export default function Home() {
  return (
    <div className="p-5 position-relative">
      <h1 className={`text-[54px]/[100%] font-bold text-[#1E1E1E] ${lato.className}`}>Find your next favourite book</h1>
      <p className="mt-5 mb-10 text-[23px]">A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
      <button className="text-xl font-semibold uppercase border-[2px] border-black-900 p-3">Browse Books</button>
      <Image style={imageStyle} src="/hero-image-home.png" width={465} height={465} alt="Beach Image" />
      {/* <div className="fixed w-50 h-50 bg-white rounded-[50%] top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div> */}
    </div>
  );
}
