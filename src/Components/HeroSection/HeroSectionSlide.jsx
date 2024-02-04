import React from "react";

const HeroSectionSlide = ({ src, title, price }) => {
  return (
    <div className='flex flex-col items-start justify-center rounded-xl overflow-hidden my-2 h-[500px] shadow-md p-2'>
      <div className='h-3/4 flex justify-center items-center w-full p-2'>
        <img
          className='max-w-full max-h-full'
          src={src}
          alt={title}
        />
      </div>
      <div className='my-1 px-4 py-2'>
        <h3 className='font-semibold'>{title}</h3>
        <div className='flex items-center gap-1'>
          {price} <span className='text-xs'>USD</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSlide;
