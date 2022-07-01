import { useDispatch, useSelector  } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart);
  const { id, title, quantity, total, price} = props.item;

  const decrementQuantityHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  const incrementQuantityHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }));
    console.log(cartState);
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
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
