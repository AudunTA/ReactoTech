import create from "zustand";

export const cartItems = create((set, get) => ({
  products: [
    {
      name: "jonas",
    },
  ],
  setProducts: (products) => set({ products }),
}));
