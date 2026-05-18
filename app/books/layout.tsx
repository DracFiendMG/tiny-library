"use client"

import { ReactNode } from "react";
import Filters from "../components/Filters";
import { usePathname } from "next/navigation";
import { matchPathname } from "../lib/utility";

export default function BooksLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const isBookDetailPage = matchPathname(pathname)
    return (
        <main className={`${isBookDetailPage ? "md:pt-54.5" : "pt-20 md:pt-54.5"} md:flex relative md:pl-60`}>
            <Filters />
            { children }
        </main>
    )
}