import React from "react";

const ProductSection = ({ product }) => {
  return (
    <div className='py-12 my-5'>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow-xl p-2 rounded-lg overflow-hidden w-full'>
          <div className='bg-contain bg-no-repeat bg-center h-56 p-4'>
            <img
              className='max-w-full max-h-full mx-auto'
              src={product.image}
              alt={product.title}
              loading='lazy'
            />
          </div>
          <div className='p-4'>
            <p className='uppercase tracking-wide text-sm font-bold text-gray-700'>
              Featured Product
            </p>
            <p className='text-3xl text-gray-900 my-2'>{product?.title}</p>
            <p className='text-gray-700 my-2'>{product?.description}</p>
          </div>
          <div className='p-4 flex items-center justify-between'>
            <span className='text-2xl text-gray-900'>${product?.price}</span>
            {/* <button className='px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded'>
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
