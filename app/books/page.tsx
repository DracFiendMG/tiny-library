import { FaRegHeart } from "react-icons/fa6"
import { getAllBooks } from "../lib/books"
import { lato } from "../lib/fonts"
import Image from "next/image"

export default async function Books() {
    const books = await getAllBooks()
    return (
        <main>
            <div className="flex flex-wrap justify-center my-10 gap-5 rounded-[10px]">
                {books.map(book => {
                    return <div key={book.id} className="w-[362px] text-[#1E1E1E]">
                        <div className="h-[362px] relative">
                            <Image src="/hero-image-square.png" fill alt={book.name} style={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                        </div>
                        <div className="border border-[#A1A1A1] border-t-[0px] p-4 flex flex-col gap-[18px] rounded-b-[10px]">
                            <h1 className={`${lato.className} font-bold text-2xl`}>{book.name}</h1>
                            <p className="text-xl">{book.author}</p>
                            <p className="border border-[#A1A1A1] self-start capitalize px-[10px] py-[5px] rounded-[20px]">{book.category}</p>
                            <div className="flex items-center gap-[6px] text-[#606060]">
                                <FaRegHeart className="text-[#A1A1A1] text-xl" />
                                <span className="">{book.likes}</span>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </main>
    )
}