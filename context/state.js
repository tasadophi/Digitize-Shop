import React, { useReducer, useContext } from "react";
const jsonData = require("./../data.json");

const Products = React.createContext();
const ProductsDispatcher = React.createContext();

const reducer = (action) => {
  return true;
};

const AppWrapper = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, { allProducts: jsonData });
  return (
    <Products.Provider value={products}>
      <ProductsDispatcher.Provider value={dispatch}>
        {children}
      </ProductsDispatcher.Provider>
    </Products.Provider>
  );
};

export default AppWrapper;

export const useProducts = () => useContext(Products);
export const useProductsDispatcher = () => useContext(ProductsDispatcher);
