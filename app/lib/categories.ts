import categoriesData from "@/app/data/categories.json"

export function getAllCategories() {
    return ["all", ...new Set(categoriesData.map(category => category.slug))]
}

export async function getCategoryBySlug(slug: string) {
    return categoriesData.find(category => category.slug === slug)
}