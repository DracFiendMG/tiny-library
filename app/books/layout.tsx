"use client"

import { ReactNode } from "react";
import Filters from "../components/Filters";
import { usePathname } from "next/navigation";
import { matchPathname } from "../lib/utility";

export default function BooksLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const isBookDetailPage = matchPathname(pathname)
    return (
        <div className={`${!isBookDetailPage && "pt-[80px] md:pt-[218px]"} md:flex relative md:pl-[240px]`}>
            <Filters />
            { children }
        </div>
    )
}