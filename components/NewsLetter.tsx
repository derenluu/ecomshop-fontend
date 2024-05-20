const NewsLetter = () => {
  return (
    <>
      <section className='mx-auto max-w-[1440px] bg-white px-6 lg:px-20 py-12 xl:py-28'>
        <div className='flex-col flex items-center justify-center mx-auto xl:w-[80%]  gap-y-8 w-full max-w-[666px]'>
          <h3 className='text-4xl leading-tight md:leading-[1.3] font-semibold mb-4 text-center'>Get Exclusive Offers On Your Email</h3>
          <h4 className='text-lg font-bold uppercase'>Subscribe to our newsletter and stay update</h4>
          <div className='flex items-center justify-between rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15 bg-primary w-full max-w-[588px]'>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full bg-transparent ml-7 border-none outline-none text-[16px] font-normal'
            />
            <button
              type='button'
              className='text-sm font-semibold border border-[#292C27] bg-[#292C27] px-7 py-3 text-white transition-all hover:bg-black rounded-full'
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
