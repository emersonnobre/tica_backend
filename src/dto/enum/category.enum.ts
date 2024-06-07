export enum Category {
    work,
    personal,
    studies
}

export default {
    items: Category,
    intToCategory: (key: number): Category => {
        return Category[Category[key] as keyof typeof Category]
    }
}