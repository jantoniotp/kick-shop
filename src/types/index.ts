export type Product = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Product & {
    quantity: number
}

export type Size = {
    id: string
    name: string
}
export type Category = Size;
export type SizeFilter = string;
export type CategoryType = string;

export type Filter = {
    size: string | null
}

export type ProductCatalog = Product & {
  size: string;
  stock: number;
}

export type ProductsOptions = {
  sizeLabel?: string;
  category?: string;
}