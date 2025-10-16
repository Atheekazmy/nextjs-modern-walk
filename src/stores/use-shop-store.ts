import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShopStore {
  categories: string[];
  setCategories: (categories: string[]) => void;
}

export const useShopStore = create<ShopStore>()(
  persist(
    (set) => ({
      categories: [],
      setCategories: (categories) => set({ categories: categories }),
    }),
    { name: "shop" }
  )
);
