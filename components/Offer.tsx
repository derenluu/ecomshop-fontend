import Link from 'next/link';

const Offer = () => {
  return (
    <>
      <section className='bg-banneroffer bg-cover bg-center w-full px-4 py-24 mt-16'>
        <div className='mx-auto max-w-[1440px] px-6 lg:px-20 '>
          <h2 className='text-[40px] leading-tight md:text-[55px] md:leading-[1.3] mb-4 font-bold'>Summer Sale 50%</h2>
          <h3 className='text-[32px] leading-tight md:text-4xl md:leading-[1.3] mb-4 font-semibold capitalize'>
            Men&#8217;s Leather Formal Wear Shoes
          </h3>
          <button
            type='button'
            className='text-sm font-semibold border border-[#292C27] bg-[#292C27] px-7 py-3 text-white transition-all hover:bg-black rounded-full'
          >
            <Link href={'/'}>Go to Store</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Offer;
