import { create } from 'zustand';
import type { SizeFilter, CategoryType } from './types';

type StoreState = {
  sizeCurrent: SizeFilter;
  categoryCurrent: CategoryType;
  setSize: (size: SizeFilter) => void;
  setCategory: (type: CategoryType) => void;
}

export const useCatalogStore = create<StoreState>((set) => ({
  sizeCurrent: '',
  categoryCurrent: '1',
  setSize: (size) => set({ sizeCurrent: size }),
  setCategory: (type) => set({
     categoryCurrent: type,
     sizeCurrent: ''
    }),
}));