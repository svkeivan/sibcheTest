import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroSectionSlide from "./HeroSectionSlide";
import ControllerButton from "./ControllerButton";
import HeroSectionSlideSkeleton from "./HeroSectionSlideSkeleton";

const HeroSection = ({ productData, isLoading }) => {
  const swiperRef = useRef(null);

  if (isLoading) {
    return (
      <>
        <div className='w-full grid md:grid-cols-3 gap-[50px]'>
          <HeroSectionSlideSkeleton />
          <HeroSectionSlideSkeleton />
          <HeroSectionSlideSkeleton />
        </div>
        <div className='flex justify-center items-center w-full animate-pulse my-5'>
          <div className='w-64 h-16 bg-gray-200 rounded-xl' />
        </div>
      </>
    );
  }
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        lazy='true'
        loop={true}
        ref={swiperRef}
        preloadimages='false'
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className='p-2'
      >
        {productData?.map((product) => (
          <SwiperSlide key={product.id}>
            <HeroSectionSlide
              src={product.image}
              title={product.title}
              price={product.price}
            />
            <div className='swiper-lazy-preloader' />
          </SwiperSlide>
        ))}
      </Swiper>
      <ControllerButton swiperRef={swiperRef} />
    </>
  );
};

export default HeroSection;
