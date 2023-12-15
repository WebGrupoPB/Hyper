import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles/SliderPromo.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';



export default function SlidePromo({slideList}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        /* navigation={true}
        pagination={{
          clickable: true,
        }} */
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slideList.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt={slide.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}