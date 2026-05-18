import Pill from "@/app/components/Pill";
import { getBookDetails } from "@/app/lib/books";
import { albert_sans, lato } from "@/app/lib/fonts";
import { BookDetailPageProps } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";

export default async function BookDetailsPage({ params }: BookDetailPageProps) {
    const { id } = await params
    const bookDetails = await getBookDetails(Number(id))
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row md:justify-center md:gap-10 p-5 gap-5 max-h-190">
            <Link href="/books" className={`uppercase text-center text-[14px] ${albert_sans.className} font-semibold text-(--grey-text) md:hidden`}>Back to overview</Link>
            <div className="md:hidden relative min-w-90.5 min-h-90.5">
                <Image src="/hero-image-square.png" fill alt={bookDetails.name} className="mx-auto" style={{objectFit: 'cover'}} />
            </div>
            <div className="hidden md:block w-full h-full relative max-w-165.5 max-h-165.5">
                <Image src="/hero-image-square.png" fill alt={bookDetails.name} className="mx-auto" style={{objectFit: 'cover'}} />
            </div>
            <div className="flex flex-col gap-5 justify-center md:max-w-112.5">
                <div className="flex items-center gap-1.5 text-(--grey-text)">
                    <FaRegHeart className="text-[26px]" />
                    <span className="text-2xl">{ bookDetails.likes }</span>
                </div>
                <h1 className={`${lato.className} text-[32px]/[100%] text-bold`}>{ bookDetails.name }</h1>
                <Pill category={bookDetails.category} />
                <h2 className="text-2xl text-[#1E1E1E]">{ bookDetails.author }</h2>
                <p className="mt-auto md:mt-10 text-[#1E1E1E]">Added on { new Date(bookDetails.dateAdded).toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                }) }</p>
            </div>
        </div>
    )
}