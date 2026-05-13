import Link from "next/link";
import { NavLinkProps } from "../types/types";

export default function NavLink({ href, children, isActive, whoAmI }: NavLinkProps) {
    return (
        <Link 
            href={href}
            className={
                `whitespace-nowrap 
                py-2 
                ${isActive ? `text-[#F77429] ${whoAmI}`: "text-[#606060]"}`}
        >{children}</Link>
    )
}