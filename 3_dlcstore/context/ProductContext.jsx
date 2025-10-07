"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export default function ProductsProvider(props) {
  const { children } = props;

  const [cart, setCart] = useState({});

  function handleIncrementProduct(price_id, num, data, noIncrement = false) {
    const newCart = { ...cart };

    const existing = newCart[price_id];

    if (existing) {
      // existing entry should be an object with a numeric `quantity` property
      const prevQty = Number(existing.quantity) || 0;
      const delta = Number(num) || 0;
      const newQty = noIncrement ? Number(num) || 0 : prevQty + delta;

      newCart[price_id] = {
        // prefer previous stored fields but allow `data` to override
        ...existing,
        ...data,
        quantity: newQty,
      };
    } else {
      // product not yet in cart, add it with numeric quantity
      newCart[price_id] = {
        ...data,
        quantity: Number(num) || 0,
      };
    }

    // if quantity is zero or less, remove the product from the cart
    if (newCart[price_id] && Number(newCart[price_id].quantity) <= 0) {
      delete newCart[price_id];
    }

    // overwrite the cart state with the newCart object
    setCart(newCart);
  }

  const value = {
    cart,
    handleIncrementProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
