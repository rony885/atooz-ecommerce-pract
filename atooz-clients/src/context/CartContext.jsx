import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalWislistData = () => {
  let localWishlistData = localStorage.getItem("atoozWishlist");

  const parsedData = JSON.parse(localWishlistData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("atoozCart");

  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const getLocalOrderData = () => {
  let localOrderData = localStorage.getItem("atoozOrder");

  const parsedData = JSON.parse(localOrderData);
  if (!parsedData || typeof parsedData !== "object") return {};
  return parsedData;
};

const initialState = {
  wishlist: getLocalWislistData(),

  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  total_discount: "",
  total_special_price: "",

  order: getLocalOrderData(),
  order_total_price: "",
  order_total_discount: "",

  paid_amount: 0,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to Wishlist
  const addToWishlist = (id, product) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { id, product },
    });
  };

  // remove to Wishlist
  const removeWishlistItem = (id) => {
    dispatch({ type: "REMOVE_WISHLIST_ITEM", payload: id });
  };

  // to clear the Wishlist
  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  // add to cart
  const addToCart = (id, amount, size, color, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, size, color, product },
    });
  };

  // remove to cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // increase & decrease
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
