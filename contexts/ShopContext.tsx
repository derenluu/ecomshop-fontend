'use client';

import all_products from '@/assets/all_products';
import { createContext, useState } from 'react';

// Tạo context với giá trị mặc định
export const ShopContext = createContext({ all_products });

const ShopContextProvider = ({ children }: any) => (
  // const getDefaultCart = () => (
  //   let cart= {};
  //   for(let i = 0; i < all_products.length; i++) {
  //     cart[i] = 0;
  //   }

  //   return cart;
  // );

  <ShopContext.Provider value={{ all_products }}>{children}</ShopContext.Provider>
);

export default ShopContextProvider;
