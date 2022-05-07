import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import  './BrandCarousel.css'
const ClinteCarousel = () => {
    return (
        <>
      <Swiper
      slidesPerView={ window.innerWidth < 1000? 2 :5 }

        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loopFillGroupWithBlank={true}
        className="mySwiper"
      >
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/Tc9Mvjq/lg-logo-logo-png-transparent-svg-vector-bie-supply-0-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/b5wJ0vL/png-transparent-vaio-sony-logo-laptop-analog-signal-vaio-company-text-trademark-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/cCB6pZH/png-transparent-sony-logo-sony-television-text-trademark-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/ChdP4C9/Vivo-mobile-logo-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/gwwqBLc/oppo-green-logo-transparent-0-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/xLWBbHz/download-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/RvpJpwh/samsung-logo-text-png-1-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/Q9nZZqP/images-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='clint-image' src="https://i.ibb.co/crJVhFV/default-logo-1.png" alt="" /></SwiperSlide>
      </Swiper>
        </>
    );
};

export default ClinteCarousel;