import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  //   wishlist: getLocalWislistData(),

  //   cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  total_discount: "",
  total_special_price: "",

  //   order: getLocalOrderData(),
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
