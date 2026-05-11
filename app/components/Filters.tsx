import Link from "next/link"
import { getBooksCategory } from "../lib/books"

export default async function Filters() {
    const filters = await getBooksCategory()
    return (
        <nav className="no-scrollbar uppercase overflow-scroll flex gap-5 text-[14px] m-5">
            {
                filters.map(filter => {
                    return <Link className="whitespace-nowrap" key={filter} href={filter}>{ filter }</Link>
                })
            }
        </nav>
    )
}