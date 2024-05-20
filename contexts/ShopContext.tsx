'use client';

import all_products from '@/assets/all_products';
import { createContext, ReactNode, useState } from 'react';

// Define data for all_products
interface ShopContextType {
  all_products: any[];
}

export const ShopContext = createContext<ShopContextType>({
  // default values
  all_products: [],
});

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const contextValue: ShopContextType = { all_products };

  const getDefaultCart = () => {
    let cart: { [key: number]: number } = {};
    for (let index = 0; index < all_products.length; index++) {
      // const element = all_products[index];
      cart[index] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
