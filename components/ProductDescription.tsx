const ProductDescription = () => {
  return (
    <>
      <div className=''>
        <div className=''>
          <button
            type='button'
            className='text-xs font-semibold border border-[#292C27] bg-[#292C27] px-7 text-white transition-all hover:bg-black rounded-none py-[6px] w-36'
          >
            Description
          </button>
          <button
            type='button'
            className='text-xs font-semibold border border-[#292C27] bg-[#292C27] px-7 text-white transition-all hover:bg-black rounded-none py-[6px] w-36'
          >
            Care Guide
          </button>
          <button
            type='button'
            className='text-xs font-semibold border border-[#292C27] bg-[#292C27] px-7 text-white transition-all hover:bg-black rounded-none py-[6px] w-36'
          >
            Size Guide
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
