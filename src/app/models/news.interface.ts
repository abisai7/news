export interface Category {
    id: number
    name: string
}

export interface News {
    id: number
    title: string
    image: string
    description: string
    content: string
    categories: Category[]
}