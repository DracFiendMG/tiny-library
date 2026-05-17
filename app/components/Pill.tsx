import { Book } from "../types/types";

export default function Pill({ category }: Pick<Book, "category">) {
    return (
        <p className="border border-[#A1A1A1] self-start capitalize px-[10px] py-[5px] rounded-[20px]">{category}</p>
    )
}