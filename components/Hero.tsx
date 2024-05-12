import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full'>
        <div className='relative max-w-full mx-auto px-6 lg:px-20 top-32 lg:top-52 border-x-current'>
          <h1 className='max-w-[37rem] text-5xl lg:text-7xl leading-tight lg:leading-snug font-bold capitalize mb-8'>
            Digital Shopping Hub Junction
          </h1>
          <p className='max-w-[33rem] text-[#585858] text-base font-normal mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aperiam pariatur illum, atque vitae recusandae ipsa, nulla repellat
            ab quasi laboriosam veritatis maxime voluptate doloremque tenetur
            eaque tempore sapiente similique.
          </p>
          <div className='flex items-center justify-start gap-x-4 mt-10 mb-5'>
            <div className='flex items-center justify-center text-2xl font-normal gap-x-2'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className='flex items-center justify-betwee text-base font-bold md:text-xl md:font-bold gap-x-2'>
              356k{' '}
              <span className='text-base font-normal md:text-xl md:font-normal'>
                Excellent Reviews
              </span>
            </div>
          </div>
          <div className='flex gap-x-5'>
            <Link
              href={'/'}
              className='flex items-center justify-center text-base font-semibold border border-[#292C27] bg-[#292C27] px-10 py-3 text-white transition-all hover:bg-black rounded-full'
            >
              Shop Now
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center text-base font-semibold border border-[#292C27] bg-[#292C27] px-10 py-3 text-white transition-all hover:bg-black rounded-full gap-x-2'
            >
              <MdOutlineLocalOffer />
              Offers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
