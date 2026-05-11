import booksData from '../data/books.json'
import type { Book } from '../types/types'

export async function getAllBooks(category: Partial<string | undefined>) {
    return category ? booksData.filter((book: Book) => book.category === category) : booksData
}

export async function getBooksCategory() {
    return ["All", ...new Set(booksData.map(book => book.category))]
}