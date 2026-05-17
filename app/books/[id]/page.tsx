import { getBookDetails } from "@/app/lib/books";
import { albert_sans, lato } from "@/app/lib/fonts";
import { BookDetailPageProps } from "@/app/types/types";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";

export default async function BookDetailsPage({ params }: BookDetailPageProps) {
    const { id } = await params
    const bookDetails = await getBookDetails(Number(id))
    return (
        <div className="w-screen flex flex-col p-5 gap-5">
            <p className={`uppercase text-center text-[14px] ${albert_sans.className} text-semibold text-(--grey-text)`}>Back to overview</p>
            <Image src="/hero-image-square.png" width={362} height={362} alt={bookDetails.name} className="mx-auto" />
            <div className="flex items-center gap-[6px] text-[#A1A1A1] ">
                <FaRegHeart className="text-[25px]" />
                <span className="text-2xl">{ bookDetails.likes }</span>
            </div>
            <h1 className={`${lato.className} text-[32px]/[100%] text-bold`}>{ bookDetails.name }</h1>
            <p> { bookDetails.category } </p>
            <h2>{ bookDetails.author }</h2>
            <p>Added on { new Date(bookDetails.dateAdded).toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'
            }) }</p>
        </div>
    )
}