import { FaRegHeart } from "react-icons/fa6"
import { getAllBooks } from "../lib/books"
import { lato } from "../lib/fonts"
import Image from "next/image"
import Link from "next/link"
import Pill from "./Pill"

export default async function BooksGrid({ category }: Partial<{ category: string }>) {
    const books = await getAllBooks(category)
    return (
        <div className="pt-10 md:pt-5 flex flex-wrap items-start justify-center md:justify-start my-10 gap-5 rounded-[10px] md:gap-10">
            {books.map(book => {
                return <Link key={book.id} href={`/books/${book.id}`} className="w-90.5 md:w-66.75 text-[#1E1E1E] cursor-pointer rounded-[10px] md:hover:scale-105 md:hover:shadow-(--card-shadow) md:hover:shadow-black transition-transform duration-300">
                    <div className="h-90.5 md:h-66.75 relative">
                        <Image src="/hero-image-square.png" fill alt={book.name} style={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                    </div>
                    <div className="border border-[#A1A1A1] border-t-0 p-4 flex flex-col gap-4.5 rounded-b-[10px]">
                        <h2 className={`${lato.className} font-bold text-2xl`}>{book.name}</h2>
                        <p className="text-xl">{book.author}</p>
                        <Pill category={book.category} />
                        <div className="flex items-center gap-1.5 text-[#606060]">
                            <FaRegHeart className="text-[#A1A1A1] text-xl" />
                            <span className="">{book.likes}</span>
                        </div>
                    </div>
                </Link>
            })}
            <div className="fixed bottom-0 right-0 w-full h-25 md:h-46 pointer-events-none bg-linear-to-t from-white to-transparent" />
        </div>
    )
}