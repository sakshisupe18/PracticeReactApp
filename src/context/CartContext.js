import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, initialCartState } from "./cartReducer";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };
  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  return useContext(CartContext);
};
