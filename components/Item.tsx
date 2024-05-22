import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

interface ItemProps {
  id: number;
  name: string;
  image: StaticImageData | string;
  new_price: number;
  old_price: number;
}

// const scrollTo = () => {
//   return window.scrollTo(0, 0);
// };

const Item = ({ id, name, image, new_price, old_price }: ItemProps) => {
  return (
    <>
      <div className='overflow-hidden shadow-lg rounded-xl'>
        <div className='relative flex items-center justify-center group overflow-hidden transition-all duration-100'>
          <Link
            href={`/product/${id}`}
            className='absolute h-12 w-12 flex items-center justify-center top-1/2 bottom-1/2 bg-white rounded-full !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700 '
          >
            <FaSearch className='scale-125 hover:rotate-90 transition-all duration-200' />
          </Link>
          <Image
            src={image}
            alt={'productImage'}
            className='block w-full object-cover group-hover:scale-110 transition-all duration-1000'
            // onClick={scrollTo}
          />
        </div>
        <div className='p-4 overflow-hidden'>
          <h4 className='my-[6px] text-[#7B7B7B] text-base font-semibold line-clamp-2'>{name}</h4>
          <div className='flex gap-5'>
            <div className='text-base font-bold'>{new_price}$</div>
            <div className='text-secondary text-base font-bold line-through'>{old_price}$</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
