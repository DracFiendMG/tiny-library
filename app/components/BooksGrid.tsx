import { FaRegHeart } from "react-icons/fa6"
import { getAllBooks } from "../lib/books"
import { lato } from "../lib/fonts"
import Image from "next/image"
import Link from "next/link"

export default async function BooksGrid({ category }: Partial<{ category: string }>) {
    const books = await getAllBooks(category)
    return (
        <div className="pt-[21px] flex flex-wrap items-start justify-center md:justify-start my-10 gap-5 rounded-[10px] md:gap-10">
            {books.map(book => {
                return <Link key={book.id} href={`/books/${book.id}`} className="w-[362px] md:w-[267px] text-[#1E1E1E] cursor-pointer rounded-[10px] md:hover:scale-105 md:hover:shadow-(--card-shadow) md:hover:shadow-black transition-transform duration-300">
                    <div className="h-[362px] md:h-[267px] relative">
                        <Image src="/hero-image-square.png" fill alt={book.name} style={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                    </div>
                    <div className="border border-[#A1A1A1] border-t-[0px] p-4 flex flex-col gap-[18px] rounded-b-[10px]">
                        <h2 className={`${lato.className} font-bold text-2xl`}>{book.name}</h2>
                        <p className="text-xl">{book.author}</p>
                        <p className="border border-[#A1A1A1] self-start capitalize px-[10px] py-[5px] rounded-[20px]">{book.category}</p>
                        <div className="flex items-center gap-[6px] text-[#606060]">
                            <FaRegHeart className="text-[#A1A1A1] text-xl" />
                            <span className="">{book.likes}</span>
                        </div>
                    </div>
                </Link>
            })}
            <div className="fixed bottom-0 right-0 w-full h-[100px] md:h-[184px] pointer-events-none bg-gradient-to-t from-white to-transparent" />
        </div>
    )
}