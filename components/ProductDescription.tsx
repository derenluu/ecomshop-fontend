const ProductDescription = () => {
  return (
    <>
      <div className='mt-14'>
        <div className='flex gap-3 mb-4'>
          <button
            type='button'
            className='text-xs font-semibold border border-[#292C27] bg-[#292C27] text-white transition-all hover:bg-black rounded-none py-[6px] px-7 w-36'
          >
            Description
          </button>
          <button
            type='button'
            className='text-xs font-semibold border border-[#292C27] bg-transparent text-[#292C27] transition-all hover:bg-black hover:text-whiterounded-none py-[6px] px-7 w-36'
          >
            Care Guide
          </button>
          <button
            type='button'
            className='text-xs font-semibold border border-[#292C27] bg-transparent text-[#292C27] transition-all hover:bg-black hover:text-whiterounded-none py-[6px] px-7 w-36'
          >
            Size Guide
          </button>
        </div>
        <div className='flex flex-col pb-16 gap-y-3'>
          <p className='leading-[1.3] text-[#7B7B7B] text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nam quos iste vero? Inventore ullam provident in delectus facilis earum
            quae vel nesciunt, ut hic suscipit quibusdam nisi libero odio!
          </p>
          <p className='leading-[1.3] text-[#7B7B7B] text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nam quos iste vero? Inventore ullam provident in delectus facilis earum
            quae vel nesciunt, ut hic suscipit quibusdam nisi libero odio!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti labore provident ullam, modi id aut. Beatae, sed corrupti reiciendis, ratione laborum dignissimos mollitia a officiis earum dolorum rerum! Culpa, facilis!
          </p>
          <p className='leading-[1.3] text-[#7B7B7B] text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nam quos iste vero? Inventore ullam provident in delectus facilis earum
            quae vel nesciunt, ut hic suscipit quibusdam nisi libero odio!
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
