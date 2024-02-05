import React, { useState } from "react";
import ProductSection from "./ProductSection";
import ProductSectionSkeleton from "./ProductSectionSkeleton";

const ProductList = ({ productData, isLoading }) => {
  const [selectedId, setSelectedId] = useState(1);

  const skeleton = (
    <div className='flex flex-col items-start justify-center rounded-xl overflow-hidden my-2 shadow-md p-2 cursor-pointer '>
      <div className='my-1 px-4 py-2'>
        <div className='bg-gray-200 rounded-xl w-64 h-3 my-5' />
        <div className='bg-gray-200 rounded-xl w-36 h-3' />
      </div>
    </div>
  );
  if (isLoading) {
    return (
      <div className='my-10'>
        <h2 className='font-bold text-3xl text-center'>Product List</h2>
        <div className='flex justify-around items-start animate-pulse gap-5'>
          <div className='md:w-1/3'>
            <div className='my-5 font-semibold text-xl'>
              Select from X items
            </div>
            {skeleton}
            {skeleton}
            {skeleton}
            {skeleton}
          </div>
          <div className='md:w-2/3 my-5'>
            <ProductSectionSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='my-10'>
      <h2 className='font-bold text-3xl text-center'>Product List</h2>
      <div className='flex flex-col-reverse md:flex-row justify-around items-start gap-5'>
        <div className='md:w-1/3 w-full'>
          <div className='my-5 font-semibold text-xl'>
            Select from {productData?.length} items
          </div>
          <div className='h-[500px] overflow-y-auto'>
            {productData?.map((product) => (
              <div
                key={product.id}
                className={`flex flex-col items-start justify-center rounded-xl overflow-hidden my-2 shadow-md p-2 cursor-pointer  ${
                  selectedId === product.id
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedId(product.id)}
              >
                <div className='my-1 px-4 py-2'>
                  <h3 className='font-semibold'>{product.title}</h3>
                  <div className='flex items-center gap-1'>
                    {product.price} <span className='text-xs'>USD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='md:w-2/3 w-full my-5'>
          <ProductSection productId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
