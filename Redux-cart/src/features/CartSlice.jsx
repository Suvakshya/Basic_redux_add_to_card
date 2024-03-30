import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload); // state vanay ko tyo initialstate ho aani initialstate vitra cart vanna kura xa so teslae access garay ko with .(dot) operator
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
