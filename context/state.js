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
      return action.cart.length ? { ...state, cart: action.cart } : state;
    }

    case "addToCart": {
      return {
        ...state,
        cart: [...state.cart, { ...action.product, count: 1 }],
      };
    }
    case "increase": {
      const newCart = state.cart.map(({ ...item }) => {
        if (item.id === action.id) item.count++;
        return item;
      });
      return {
        ...state,
        cart: newCart,
      };
    }
    case "decrease": {
      const cartItem = state.cart.find((item) => item.id === action.id);
      const newCart =
        cartItem.count === 1
          ? state.cart.filter((item) => item.id !== action.id)
          : state.cart.map(({ ...item }) => {
              if (item.id === action.id) item.count--;
              return item;
            });
      return {
        ...state,
        cart: newCart,
      };
    }
    case "remove": {
      const newCart = state.cart.filter((item) => item.id !== action.id);
      return {
        ...state,
        cart: newCart,
      };
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
    dispatch({ type: "setCartItems", cart: getCartItems() });
  }, []);

  useEffect(() => {
    setCartItems(shop.cart);
  }, [shop.cart]);

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
