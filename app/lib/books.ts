import booksData from '../data/books.json'

export async function getAllBooks() {
    return booksData
}

export async function getBooksCategory() {
    return ["All", ...new Set(booksData.map(book => book.category))]
}