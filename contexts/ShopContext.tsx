'use client';

import all_products from '@/assets/all_products';
import { createContext, useEffect, useState } from 'react';

// Create context with default values
export const ShopContext = createContext({
  all_products,
  cartItems: {},
  addToCart: (itemId: number) => {},
  removeFromCart: (itemId: number) => {},
});

const getDefaultCart = () => {
  let cart: { [key: number]: number } = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // console.log(cartItems)
  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  };

  const contextValue = { all_products, cartItems, addToCart, removeFromCart };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
