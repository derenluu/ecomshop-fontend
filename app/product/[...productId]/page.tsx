'use client';

import ProductDescription from '@/components/ProductDescription';
import ProductDisplay from '@/components/ProductDisplay';
import ProductHd from '@/components/ProductHd';
import ProductRelated from '@/components/ProductRelated';
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
      <section className='mx-auto max-w-[1440px] px-6 lg:px-20 py-28'>
        <div className=''>
          <ProductHd product={product} />
          <ProductDisplay product={product} />
          <ProductDescription />
          <ProductRelated />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
