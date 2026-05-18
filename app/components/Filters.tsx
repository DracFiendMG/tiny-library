"use client"

import { usePathname } from "next/navigation"
import { getAllCategories } from "../lib/categories"
import NavLink from "./NavLink"
import { matchPathname } from "../lib/utility"

export default function Filters() {
    const pathname = usePathname()
    const isBookDetailPage = matchPathname(pathname)
    const filters = getAllCategories()
    return (
        <nav
            className={`absolute w-full z-999 bg-white md:h-full md:w-35 md:left-10 ${
                isBookDetailPage ? "hidden md:block" : ""
            }`}
        >
            <div className="
                no-scrollbar 
                uppercase 
                overflow-x-auto
                overflow-y-hidden
                flex 
                gap-5 
                text-[14px] 
                p-5 
                text-[#606060] 
                mask-[linear-gradient(to_right,transparent,white_5%,white_90%,transparent_100%)]
                md:flex
                md:flex-col
                md:overflow-visible
                md:mask-none
            ">
                <NavLink href="/books" isActive={pathname === "/books"} whoAmI="filter">
                    all
                </NavLink>
                {
                    filters.map(filter => {
                        return <NavLink 
                                    key={filter} 
                                    href={filter === "all" ? '/books' : `/books/categories/${filter}`}
                                    isActive={pathname === `/books/categories/${filter}`}
                                    whoAmI="filter"
                                >{ filter }</NavLink>
                    })
                }
            </div>
        </nav>
    )
}