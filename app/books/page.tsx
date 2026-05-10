import { FaRegHeart } from "react-icons/fa6"
import { getAllBooks } from "../lib/books"
import Image from "next/image"

export default async function Books() {
    const books = await getAllBooks()
    return (
        <main>
            {books.map(book => {
                return <div key={book.id}>
                    <div className="w-[362px] h-[362px] relative">
                        <Image src="/hero-image-square.png" fill alt={book.name} style={{ objectFit: 'cover' }} />
                    </div>
                    <h1>{book.name}</h1>
                    <p>{book.author}</p>
                    <p>{book.category}</p>
                    <div>
                        <FaRegHeart />
                        <span>{book.likes}</span>
                    </div>
                </div>
            })}
        </main>
    )
}