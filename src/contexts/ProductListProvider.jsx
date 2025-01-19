/* eslint-disable react/prop-types */
import useScreenSize from "../hooks/useScreenSize";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ProductListContext = createContext();

function ProductListProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <ProductListContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
}

function useProductList() {
  const context = useContext(ProductListContext);
  if (context === undefined)
    throw new Error(
      "ProductListContext was used outside the ProductListProvider"
    );
  return context;
}

export { ProductListProvider, useProductList };
