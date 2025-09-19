import { create } from 'zustand';
//import { db as products } from './data/db';
import type { SizeFilter } from './types';

type StoreState = {
  sizeCurrent: SizeFilter;
  setSize: (size: SizeFilter) => void;
  //filteredProducts: () => typeof products;
}

/*export const useCatalogStore = create<StoreState>((set, get) => ({
  sizeCurrent: '',
  setSize: (size) => set({ sizeCurrent: size }),
  filteredProducts: () => {
    const size = get().sizeCurrent;
    if (!size) return products;
    return products.filter((producto) => producto[size]);
  },
}));*/

export const useCatalogStore = create<StoreState>((set) => ({
  sizeCurrent: '',
  setSize: (size) => set({ sizeCurrent: size }),
}));