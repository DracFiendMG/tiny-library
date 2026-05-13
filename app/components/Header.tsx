"use client"

import Image from "next/image"
import Link from "next/link"
import NavLink from "./NavLink"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="flex justify-between items-center px-5 md:px-10 md:mb-10 fixed left-1/2 -translate-x-1/2 w-full max-w-screen md:max-w-[1440px] z-1000 bg-white">
            <Link className="md:hidden" href="/">
                <Image 
                    src="/tinylibrary-logo.png"
                    width={80}
                    height={53}
                    alt="Tiny Library Logo"
                />
            </Link>
             <Link className="hidden md:block" href="/">
                <Image 
                    src="/tinylibrary-logo.png"
                    width={178}
                    height={117}
                    alt="Tiny Library Logo"
                />
            </Link>
            <ul className="flex gap-10 text-sm uppercase">
                <li><NavLink href="/books" isActive={pathname.startsWith("/books")}>Books</NavLink></li>
                <li><NavLink href="/about" isActive={pathname === "/about"}>About</NavLink></li>
            </ul>
        </header>
    )
}