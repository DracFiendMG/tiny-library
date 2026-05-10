import Image from "next/image";
import { lato } from "./lib/fonts";
import { CSSProperties } from "react";

const imageStyle: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  borderRadius: '50%',
  zIndex: -1,
}

const imageStyleMD: CSSProperties = {
  maxWidth: '627px'
}

export default function Home() {
  return (
    <div className="p-5 position-relative md:flex md:items-center md:gap-[100px] md:mx-10">
      <div>
        <h1 className={`text-[54px]/[100%] font-bold text-[#1E1E1E] ${lato.className}`}>Find your next favourite book</h1>
        <p className="mt-5 mb-10 text-[23px]">A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
        <button className="text-xl font-semibold uppercase border-[2px] border-black-900 p-3">Browse Books</button>
      </div>
      <div className="md:hidden">
        <Image style={imageStyle} src="/hero-image-home.png" width={465} height={465} alt="Beach Image" />
      </div>
      <div className="hidden md:block">
        <Image style={imageStyleMD} src="/hero-image.png" width={627} height={627} alt="Beach Image" />
      </div>
      {/* <div className="fixed w-50 h-50 bg-white rounded-[50%] top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div> */}
    </div>
  );
}
