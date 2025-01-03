import { create } from "zustand";

const useSaleTotalPrice = create((set) => ({
  total: [],
  addTotal: (price) => set((state) => ({ total: [...state.total, price] })),
  resetTotal: () => set((state) => (state.total = [])),
}));

export default useSaleTotalPrice;
