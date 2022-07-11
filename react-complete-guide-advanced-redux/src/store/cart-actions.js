import { uIActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-95836-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed...");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData))
    } catch (error) {
      dispatch(
        uIActions.showNotification({
          status: "error",
          title: "Error",
          message:
            " There was an error while fetching cart data from the server.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uIActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data to server!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-95836-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity, totalAmount: cart.totalAmount}),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed...");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uIActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Server received cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Server did not receive cart data...",
        })
      );
    }
  };
};
