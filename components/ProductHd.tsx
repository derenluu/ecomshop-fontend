import { TbArrowRight } from 'react-icons/tb';

const ProductHd = ({ product }: any) => {
  return (
    <>
      <div className='flex items-center flex-wrap gap-x-2'>
        Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}{' '}
        <TbArrowRight /> {product.name}
      </div>
    </>
  );
};

export default ProductHd;
