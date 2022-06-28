import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";



const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [nameOnOrder, setNameOnOrder] = useState('');
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setShowCheckout((prev) => !prev);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const {enteredName: name} = userData;
    const response = await fetch('https://react-http-95836-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      })
    })

    if (!response.ok) {
      throw new Error('Something went wrong while submitting your order.')
    }
    setNameOnOrder(name);
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      { cartItems }
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      { !showCheckout && modalActions }
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Submitting  order data...</p>;

  const didSubmitModalContent = <div>
    <p>Success! Thank you for your order, {nameOnOrder}.</p>
    <button className={classes["button--alt"]} onClose={props.OnClose}>Close</button>
  </div>

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !didSubmit &&isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
