import { useDispatch } from 'react-redux';

import { uIActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleVisibilityHandler = () => {
    dispatch(uIActions.toggleVisibility());
  };

  return (
    <button className={classes.button} onClick={toggleVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
