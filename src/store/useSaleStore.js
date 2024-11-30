import { create } from "zustand";

const useSaleStore = create(() => ({
  salesList: [],
  setSale: (data) => {
    console.log(data);
  },
}));

export default useSaleStore;
