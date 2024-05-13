import product_rt_1 from '@/assets/images/product_rt_1.png';
import product_rt_2 from '@/assets/images/product_rt_2.png';
import product_rt_3 from '@/assets/images/product_rt_3.png';
import product_rt_4 from '@/assets/images/product_rt_4.png';
import Image from 'next/image';
import { MdStar } from 'react-icons/md';

const ProductDisplay = ({ product }: any) => {
  return (
    <>
      <section className=''>
        <div className='flex flex-col gap-14 xl:flex-row'>
          {/* left side */}
          <div className='flex gap-x-2'>
            <div className='flex flex-col gap-[7px] flex-wrap'>
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

          <div className=''>
            <h3>{product.name}</h3>
            <div className=''>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <p>(111)</p>
            </div>
            <div className=''>
              <div className=''>{product.old_price}</div>
              <div className=''>{product.new_price}</div>
            </div>
            <div className=''>
              <h4>Select Size</h4>
              <div className='flex gap-3 my-3'>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>
                  S
                </div>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>
                  M
                </div>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>
                  L
                </div>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>
                  XL
                </div>
              </div>
              <div className=''>
                <button type='button'>Add to cart</button>
                <button type='button'>Buy it now</button>
              </div>
              <p>
                <span>Category: </span> Women | Jacket | Winter
              </p>
              <p>
                <span>Tags: </span> Modern | Latest
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDisplay;
