import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, totalPrice, price, description } = props.item;

  const decrementQuantityHandler = () => {
    dispatch(cartActions.addItemToCart(id));
  }

  const incrementQuantityHandler = () => {
    dispatch(cartActions.removeItemFromCart({
      id,
      title,
      price,
      description,
    }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementQuantityHandler}>-</button>
          <button onClick={incrementQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
