import { create } from "zustand";

const useSaleStore = create((set) => ({
  salesList: [],

  setSale: (data) => set((state) => {
      const productIndex = state.salesList.findIndex(
        (record) => record.product.id === data.product.id
      );
      if (productIndex === -1) {
        // Add new product
        return { salesList: [...state.salesList, data] };
      } else {
        // Update existing product's quantity
        const updatedRecords = state.salesList.map((product, index) =>
          index === productIndex
            ? { ...product, quantity: product.quantity + data.quantity }
            : product
        );
        return { salesList: updatedRecords };
      }
    }),

  changeQty: (id, qty) => set((state) => {
      const updatedSalesList = state.salesList.map((saleList) => {
        if (saleList.product.id === id) {
          return { ...saleList, quantity: saleList.quantity + qty };
        }
        return saleList; // No change for other items
      });
      
      return { salesList: updatedSalesList };
    }),

  removeRecord: (id) => set((state) => {
      const updateSaleList = state.salesList.filter((record) => {
        return record.product.id !== id
      });
      return { salesList: updateSaleList };
    }),

  resetSalesList: () => set((state) => ({salesList: []})),

}));

export default useSaleStore;
