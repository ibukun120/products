'use client';
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Product {
  id: number;
  title: string;
  body?: string;
  images: string[];
  description: string;
}

interface ProductsState {
  products: Product[];
  setProducts: (items: Product[]) => void;
  clearProducts: () => void;
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (items: Product[]) => set({ products: items }),
      clearProducts: () => set({ products: [] }),
    }),
    {
      name: "products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProductsStore;
