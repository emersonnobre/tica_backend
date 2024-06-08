export enum Priority {
    low,
    medium,
    high
}

export default {
    items: Priority,
    intToPriority: (key: number): Priority => {
        return Priority[Priority[key] as keyof typeof Priority]
    }
}