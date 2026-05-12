import BooksGrid from "@/app/components/BooksGrid";
import { CategoryTypeProps } from "@/app/types/types";

export default async function CategoryPage({ params }: CategoryTypeProps) {
    const { categoryName } = await params

    return (
        <BooksGrid category={categoryName} />
    )
}