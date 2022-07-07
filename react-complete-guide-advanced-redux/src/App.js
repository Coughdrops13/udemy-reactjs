import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uIActions } from "./store/ui-slice";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uIActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data to server!"
      }))
      const response = await fetch("https://react-http-95836-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed...')
      }

      dispatch(uIActions.showNotification({
        status: 'success',
        title: "Success!",
        message: "Server received cart data successfully!",
      }))

    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uIActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Server did not receive cart data...",
      }))
    }) 
    
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;



