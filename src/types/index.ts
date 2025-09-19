export type Product = {
    id: number
    name: string
    image: string
    description: string
    xs: boolean
    ch: boolean
    md: boolean
    g: boolean
    price: number
}

export type CartItem = Product & {
    quantity: number
}

export type Size = {
    id: string
    name: string
}

export type SizeFilter = 'xs' | 'ch' | 'md' | 'g' | '';

export type Filter = {
    size: string | null
}