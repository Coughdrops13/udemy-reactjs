import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          description: newItem.description,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      // this reduce function can derive the total quantity just from state.items array, it could then be tweaked to do the same for the total amount
      // const totalQuantity = state.items.reduce(function (acc, obj) { return acc + obj.quantity; }, 0);
      // console.log("TOTALQUANTITY", totalQuantity);
      console.log("ITEM ADDED");
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      console.log("ITEM REMOVED");
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
