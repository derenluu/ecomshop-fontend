'use client';

import ProductDisplay from '@/components/ProductDisplay';
import ProductHd from '@/components/ProductHd';
import { ShopContext } from '@/contexts/ShopContext';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const ProductPage = () => {
  const { all_products } = useContext(ShopContext);
  const pathname = usePathname();
  const productId = pathname.split('/').pop();
  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div className=''>Product not found!</div>;
  }

  return (
    <>
      <section>
        <div className=''>
          <ProductHd product={product} />
          <ProductDisplay product={product} />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
