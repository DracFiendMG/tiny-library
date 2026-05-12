import Filters from "../components/Filters"
import BooksGrid from "../components/BooksGrid"

export default async function Books() {
    return (
        <main>
            <h1 className="hidden text-[32px] font-bold md:block">Books</h1>
            <BooksGrid />
        </main>
    )
}