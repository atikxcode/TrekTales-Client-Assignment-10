import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from "react";
import 'swiper/css/navigation';
import 'aos/dist/aos.css'
import Aos from "aos";

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Slider = () => {

  useEffect(() => {
    Aos.init();
  },[])
  return (
    
  <div className=' ' >
    <div className='container mx-auto p-4' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='img' src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image7} alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  </div>
   
  );
};

export default Slider;