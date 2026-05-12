import { ReactNode } from "react";
import Filters from "../components/Filters";

export default function BooksLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Filters />
            { children }
        </>
    )
}