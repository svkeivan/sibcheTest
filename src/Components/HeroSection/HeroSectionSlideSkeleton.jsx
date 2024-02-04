import React from "react";

const HeroSectionSlideSkeleton = () => {
  return (
    <div className='flex flex-col items-start justify-center rounded-xl overflow-hidden my-2 h-[500px] shadow-md p-2 animate-pulse'>
      <div className='h-3/4 flex justify-center items-center w-full p-2'>
        <div className='w-full h-full rounded-xl bg-gray-200' />
      </div>
      <div className='my-1 px-4 py-2'>
        <div className='bg-gray-200 rounded-xl w-64 h-3 my-5' />
        <div className='bg-gray-200 rounded-xl w-36 h-3' />
      </div>
    </div>
  );
};

export default HeroSectionSlideSkeleton;
