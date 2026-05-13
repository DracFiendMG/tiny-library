"use client"

import { ReactNode } from "react";
import Filters from "../components/Filters";

export default function BooksLayout({ children }: { children: ReactNode }) {
    return (
        <div className="pt-[80px] md:flex md:pt-[218px]">
            <Filters />
            { children }
        </div>
    )
}