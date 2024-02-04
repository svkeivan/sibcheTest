import React from "react";

const ProductSectionSkeleton = () => {
  return (
    <div className='max-w-2xl mx-auto px-4 py-12 my-5'>
      <div className='bg-white shadow-xl p-2 rounded-lg overflow-hidden'>
        <div className='bg-gray-200 bg-center h-96 p-4'></div>
        <div className='p-4'>
          <p className='uppercase tracking-wide text-sm font-bold text-gray-700'>
            Featured Product
          </p>
          <div className='bg-gray-200 rounded-xl w-64 h-3 my-5' />
          <div className='bg-gray-200 rounded-xl w-full h-3 my-1' />
          <div className='bg-gray-200 rounded-xl w-full h-3 my-1' />
        </div>
        <div className='p-4 flex items-center justify-between'>
          <div className='bg-gray-200 rounded-xl w-36 h-3' />
          {/* <div className='px-3 py-2 bg-gray-200 text-white text-xs font-bold uppercase rounded w-28 h-8' /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSkeleton;
