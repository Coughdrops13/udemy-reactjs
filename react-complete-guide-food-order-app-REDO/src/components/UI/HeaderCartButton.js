import React, { useContext } from 'react';
import CartIcon from '../../assets/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const itemNumberTotal = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes. bump}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemNumberTotal}</span>
    </button >
  )
};

export default HeaderCartButton;