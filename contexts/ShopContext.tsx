'use client';

import all_products from '@/assets/all_products';
import { createContext, ReactNode } from 'react';

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

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
