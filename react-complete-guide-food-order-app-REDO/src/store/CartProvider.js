import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  addItemToCartHandler = (item) => { };
  removeItemFromCartHandler = (id) => { };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.provider value={cartContext}>{props.children}</CartContext.provider>;
};

export default CartProvider;
