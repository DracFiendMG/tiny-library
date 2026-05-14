import { getBookDetails } from "@/app/lib/books";
import { BookDetailPageProps } from "@/app/types/types";

export default async function BookDetailsPage({ params }: BookDetailPageProps) {
    const { id } = await params
    const bookDetails = await getBookDetails(id)
    return (
        <h1>{ bookDetails.author }</h1>
    )
}