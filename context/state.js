import React, { useReducer, useContext } from "react";
import { useEffect } from "react";
const jsonData = require("./../data.json");

const Shop = React.createContext();
const ShopDispatcher = React.createContext();

const getCartItems = () => {
  const data = localStorage.getItem("cart");
  if (data) return JSON.parse(data);
  return [];
};
const setCartItems = (cartItems) =>
  localStorage.setItem("cart", JSON.stringify(cartItems));

const reducer = (state, action) => {
  switch (action.type) {
    case "setCartItems": {
      return { ...state, cart: action.cart };
    }
    case "addToCart": {
      return { ...state, cart: [...state.cart, action.product] };
    }
  }
};

const initialState = {
  allProducts: jsonData,
  cart: [],
};

const AppWrapper = ({ children }) => {
  const [shop, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    shop.cart.length && setCartItems(shop.cart);
  }, [shop.cart]);

  useEffect(() => {
    dispatch({ type: "setCartItems", cart: getCartItems() });
  }, []);

  return (
    <Shop.Provider value={shop}>
      <ShopDispatcher.Provider value={dispatch}>
        {children}
      </ShopDispatcher.Provider>
    </Shop.Provider>
  );
};

export default AppWrapper;

export const useShop = () => useContext(Shop);
export const useShopDispatcher = () => useContext(ShopDispatcher);
