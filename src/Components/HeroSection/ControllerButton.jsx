import React from "react";

const ControllerButton = ({ swiperRef }) => {
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className='flex justify-center items-center'>
      <button
        className='my-5 bg-gray-400 shadow-md px-10 rounded-xl py-4 text-xl w-fit hover:bg-blue-400 cursor-pointer transition-all '
        onClick={goNext}
      >
        Next Slide
      </button>
    </div>
  );
};

export default ControllerButton;
