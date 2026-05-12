import { getBooksCategory } from "../lib/books"
import NavLink from "./NavLink"

export default async function Filters() {
    const filters = await getBooksCategory()
    return (
        <nav className="no-scrollbar uppercase overflow-scroll flex gap-5 text-[14px] p-5 text-[#606060] [mask-image:linear-gradient(to_right,transparent,white_5%,white_90%,transparent_100%)]">
            {
                filters.map(filter => {
                    return <NavLink 
                                key={filter} 
                                href={filter === "all" ? '/books' : `/books/categories/${filter}`}
                            >{ filter }</NavLink>
                })
            }
        </nav>
    )
}