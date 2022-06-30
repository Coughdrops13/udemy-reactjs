import { useSelector, useDispatch } from 'react-redux';

import { uIActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleVisibilityHandler = () => {
    dispatch(uIActions.toggleVisibility());
  };

  return (
    <button className={classes.button} onClick={toggleVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
