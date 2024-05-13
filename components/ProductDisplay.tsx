import product_rt_1 from '@/assets/images/product_rt_1.png';
import product_rt_2 from '@/assets/images/product_rt_2.png';
import product_rt_3 from '@/assets/images/product_rt_3.png';
import product_rt_4 from '@/assets/images/product_rt_4.png';
import Image from 'next/image';

const ProductDisplay = ({ product }: any) => {
  return (
    <>
      <section>
        <div className=''>
          {/* left side */}
          <div className=''>
            <div className=''>
              <Image
                src={product_rt_1}
                alt='ProductImage'
                className='max-h-[99px]'
              />
              <Image
                src={product_rt_2}
                alt='ProductImage'
                className='max-h-[99px]'
              />
              <Image
                src={product_rt_3}
                alt='ProductImage'
                className='max-h-[99px]'
              />
              <Image
                src={product_rt_4}
                alt='ProductImage'
                className='max-h-[99px]'
              />
            </div>
            <div className=''>
              <Image src={product.image} alt='' />
            </div>
          </div>
          {/* right side */}
        </div>
      </section>
    </>
  );
};

export default ProductDisplay;
