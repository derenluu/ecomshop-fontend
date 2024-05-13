import { TbArrowRight } from 'react-icons/tb';

const ProductHd = ({ product }: any) => {
  return (
    <>
      <div className=''>
        Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}{' '}
        <TbArrowRight /> {product.name}
      </div>
    </>
  );
};

export default ProductHd;
