import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"]
})

export default function Home() {
  return (
    <div className="p-5">
      <h1 className={`text-[54px]/[100%] font-bold text-[#1E1E1E] ${lato.className}`}>Find your next favourite book</h1>
      <p>A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
      <button>Browse Books</button>
      <Image src="/hero-image-square.png" width={465} height={465} alt="Beach Image" />
    </div>
  );
}
