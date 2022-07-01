import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items)
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <h3>Order Total: {cartTotalAmount.toFixed(2)}</h3>
      <ul>
        {cartItems.map((item) => {
          return <CartItem
            key={item.id}  
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
