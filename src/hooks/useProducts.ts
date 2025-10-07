import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import type { Product, ProductsOptions } from '../types'

export function useProducts(options: ProductsOptions) {
  const { sizeLabel, category } = options;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(options).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [sizeLabel, category]);

  return { products, loading };
}