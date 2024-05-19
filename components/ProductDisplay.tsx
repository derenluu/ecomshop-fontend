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
          <div className='flex gap-x-2 xs:flex-1'>
            <div className='flex flex-col gap-[7px] flex-wrap'>
              <Image src={product_rt_1} alt='ProductImage' width={100} className='max-h-[99px]' />
              <Image src={product_rt_2} alt='ProductImage' width={100} className='max-h-[99px]' />
              <Image src={product_rt_3} alt='ProductImage' width={100} className='max-h-[99px]' />
              <Image src={product_rt_4} alt='ProductImage' width={100} className='max-h-[99px]' />
              <Image src={product_rt_1} alt='ProductImage' width={100} className='max-h-[99px]' />
            </div>
            <div className=''>
              <Image src={product.image} alt='ProducImageMain' width={530} className='max-h-[530px]' />
            </div>
          </div>
          {/* right side */}

          <div className='flex flex-col xl:flex-[1.4]'>
            <h3 className='text-[32px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold'>{product.name}</h3>
            <div className='flex gap-x-2 text-secondary text-[22px] font-semibold'>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <p>(111)</p>
            </div>
            <div className='flex gap-x-6 text-[20px] font-semibold my-4'>
              <div className='line-through'>{product.old_price}</div>
              <div className='text-secondary'>{product.new_price}</div>
            </div>
            <div className='mb-4'>
              <h4 className='text-base font-bold'>Select Size</h4>
              <div className='flex gap-3 my-3'>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>S</div>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>M</div>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>L</div>
                <div className='flex items-center justify-center h-10 w-10 ring-2 ring-slate-900/10 cursor-pointer'>XL</div>
              </div>
              <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                <button
                  type='button'
                  className='text-sm font-semibold border border-[#292C27] bg-transparent px-7 py-3 text-[#292C27] transition-all hover:bg-black hover:text-white !rounded-none uppercase tracking-widest'
                >
                  Add to cart
                </button>
                <button
                  type='button'
                  className='text-sm font-semibold border border-[#292C27] bg-[#292C27] px-7 py-3 text-white transition-all hover:bg-black !rounded-none uppercase tracking-widest'
                >
                  Buy it now
                </button>
              </div>
              <p className='leading-[1.3] text-[#7B7B7B] text-base'>
                <span className='text-base font-medium text-tertiary'>Category: </span>
                Women | Jacket | Winter
              </p>
              <p className='leading-[1.3] text-[#7B7B7B] text-base'>
                <span className='text-base font-medium text-tertiary'>Tags: </span>
                Modern | Latest
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDisplay;
