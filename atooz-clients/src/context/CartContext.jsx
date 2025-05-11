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
