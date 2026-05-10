import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center px-5 md:px-10 md:mb-10">
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
            <ul className="flex gap-10 text-sm uppercase text-[#606060]">
                <li><Link href="/books">Books</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </header>
    )
}