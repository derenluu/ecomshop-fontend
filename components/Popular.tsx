import { POPULAR } from '@/assets/data';
import Item from './Item';

const Popular = () => {
  return (
    <>
      <section className='bg-primary'>
        <div className='mx-auto max-w-[1440px] px-6 lg:px-20 py-12 xl:py-28 xl:w-[88%]'>
          <h3 className='text-4xl leading-tight md:leading-[1.3] font-semibold mb-4 text-center'>
            Popular Products
          </h3>
          <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16 ' />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {POPULAR.map((item, index) => (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
