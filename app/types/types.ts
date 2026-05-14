import { ReactNode } from "react"

export type Book = {
    id: number
    name: string
    author: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

export type CategoryTypeProps = {
    params: Promise<{
        categoryName: string
    }>
}

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
    whoAmI: string
}

export type BookDetailPageProps = {
    params: Promise<{
        id: number
    }>
}