import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center px-5">
            <Link href="/">
                <Image 
                    src="/tinylibrary-logo.png"
                    width={80}
                    height={53}
                    alt="Tiny Library Logo"
                />
            </Link>
            <ul className="flex gap-10 text-sm uppercase">
                <li><Link href="/books">Books</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </header>
    )
}