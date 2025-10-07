import { supabase } from './supabaseClient'
import type { ProductCatalog, ProductsOptions } from '../types'
import groupBy from "lodash.groupby";

export async function fetchProducts(options: ProductsOptions): Promise<ProductCatalog[]> {
    const { sizeLabel, category } = options;

    let query = supabase
        .from("products_sizes")
        .select(`
        stock,
        products (*),
        sizes (name)
        `)
        .is("deleted_at", null)
        .is("products.deleted_at", null)

    if (sizeLabel) query = query.eq("sizes.id", sizeLabel);
    if (category) query = query.eq("products.category", category);

    const { data, error } = await query;

    if (error) throw error;

    const dataFilter = data.filter((row: any) => row.sizes && row.products)
    const grouped = groupBy(dataFilter, (row: any) => row.products.id);

    const products = Object.values(grouped).map((group) => {
    const { products } = group[0];
    const sizes = group.map((item) => ({
        name: item.sizes.name,
        stock: item.stock,
    }));

        return {
        ...products,
        sizes,
    };
    });

  return products;
}
