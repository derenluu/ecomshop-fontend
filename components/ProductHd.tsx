import { capitalizeFirstLetter } from '@/utils/capitalize';
import { TbArrowRight } from 'react-icons/tb';

interface ProductHdProps {
  product: any;
}

const ProductHd = ({ product }: ProductHdProps) => {
  return (
    <>
      <div className='flex items-center flex-wrap gap-x-2 text-base font-semibold my-4'>
        Home <TbArrowRight /> Shop <TbArrowRight /> {capitalizeFirstLetter(product.category)} <TbArrowRight /> {product.name}
      </div>
    </>
  );
};

export default ProductHd;
