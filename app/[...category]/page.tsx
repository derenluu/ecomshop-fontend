'use client';

import all_products from '@/assets/all_products';
import KidsBanner from '@/assets/images/bannerkids.png';
import MenBanner from '@/assets/images/bannermens.png';
import WomenBanner from '@/assets/images/bannerwomens.png';
import Item from '@/components/Item';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Category = () => {
  const pathname = usePathname().slice(1);

  return (
    <>
      <section className='mx-auto max-w-[1440px] px-6 lg:px-20 py-12 xl:py-28'>
        <div className=''>
          <div className=''>
            <Image
              src={pathname === 'men' ? MenBanner : pathname === 'women' ? WomenBanner : pathname === 'kid' ? KidsBanner : ''}
              alt='Banner Category'
              className='block my-7 mx-auto'
            />
          </div>
          <div className='flex items-center justify-between my-8 mx-2'>
            <h5>
              <span className='font-bold'>Showing 1-12</span> out of 36 products
            </h5>
            <div className='flex items-center justify-between max-sm:p-4 gap-x-4 px-8 py-3 rounded-[40px] ring-1 ring-slate-900/15'>
              Sort by <MdOutlineKeyboardArrowDown />
            </div>
          </div>

          {/* Container */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {all_products.map((item, index) => {
              if (item.category === pathname) {
                return <Item key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />;
              }
              return null;
            })}
          </div>
          <div className='mt-16 text-center'>
            <button
              type='button'
              className='text-sm font-semibold border border-[#292C27] bg-[#292C27] px-7 py-3 text-white transition-all hover:bg-black rounded-full'
            >
              Load more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
