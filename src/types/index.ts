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

// export type CartItem = Pick<Product, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Product, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

