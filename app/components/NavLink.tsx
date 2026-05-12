import Link from "next/link";
import { NavLinkProps } from "../types/types";

export default function NavLink({ href, children, isActive }: NavLinkProps) {
    return (
        <Link 
            href={href}
            className={`whitespace-nowrap ${isActive ? "text-[#F77429]": "text-[#606060]"}`}
        >{children}</Link>
    )
}