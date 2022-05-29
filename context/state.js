import React, { useReducer, useContext } from "react";
import { useEffect } from "react";
const jsonData = require("./../data.json");
import { useRouter } from "next/router";

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
    // cart actions
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
        if (item.unique === action.unique) item.count++;
        return item;
      });
      return {
        ...state,
        cart: newCart,
      };
    }
    case "decrease": {
      const cartItem = state.cart.find((item) => item.unique === action.unique);
      const newCart =
        cartItem.count === 1
          ? state.cart.filter((item) => item.unique !== action.unique)
          : state.cart.map(({ ...item }) => {
              if (item.unique === action.unique) item.count--;
              return item;
            });
      return {
        ...state,
        cart: newCart,
      };
    }
    case "remove": {
      const newCart = state.cart.filter(
        (item) => item.unique !== action.unique
      );
      return {
        ...state,
        cart: newCart,
      };
    }
    // filter actions
    case "filter": {
      const category = action.category;
      const filtersObject = action.filtersObject;
      const filterKeys = Object.keys(filtersObject);
      const products = [];
      if (Object.keys(filterKeys).length) {
        state.allProducts.forEach((product) => {
          const productFilters = [];
          filterKeys.forEach((fKey) => {
            if (fKey === "brand") {
              if (filtersObject[fKey].includes(product.brand.brandEn)) {
                if (category) {
                  if (product.category === category)
                    !productFilters.includes("brandOk") &&
                      productFilters.push("brandOk");
                } else
                  !productFilters.includes("brandOk") &&
                    productFilters.push("brandOk");
              }
            } else if (fKey === "colors") {
              product.colors.forEach((colorObject) => {
                if (filtersObject[fKey].includes(colorObject.nameEn)) {
                  if (category) {
                    if (product.category === category)
                      !productFilters.includes("colorOk") &&
                        productFilters.push("colorOk");
                  } else
                    !productFilters.includes("colorOk") &&
                      productFilters.push("colorOk");
                }
              });
            } else if (fKey === "price") {
              if (product.price <= parseInt(filtersObject[fKey])) {
                if (category) {
                  if (product.category === category)
                    !productFilters.includes("priceOk") &&
                      productFilters.push("priceOk");
                } else
                  !productFilters.includes("priceOk") &&
                    productFilters.push("priceOk");
              }
            }
          });
          if (productFilters.length === Object.keys(filtersObject).length)
            products.push(product);
        });
        return { ...state, products: products };
      } else return { ...state, products: state.allProducts };
    }
  }
};

const initialState = {
  allProducts: jsonData,
  products: jsonData,
  cart: [],
};

const addFilter = (key, splitedArrey, allFilters) => {
  if (Object.keys(allFilters).includes(key)) {
    allFilters[key].push(splitedArrey[1]);
  } else {
    allFilters[key] = [splitedArrey[1]];
  }
};

const AppWrapper = ({ children }) => {
  const [shop, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  useEffect(() => {
    const allFilters = {};
    const allkeys = Object.keys(router.query);
    allkeys.forEach((key) => {
      const brand = key.split("brand");
      const colors = key.split("colors");
      if (brand.length > 1) {
        addFilter("brand", brand, allFilters);
      } else if (colors.length > 1) {
        addFilter("colors", colors, allFilters);
      } else if (key === "price") {
        allFilters["price"] = router.query["price"];
      }
    });
    dispatch({
      type: "filter",
      filtersObject: allFilters,
      category: router.query["category"] ? router.query["category"] : false,
    });
  }, [router.query]);

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

export default React.memo(AppWrapper);

export const useShop = () => useContext(Shop);
export const useShopDispatcher = () => useContext(ShopDispatcher);
