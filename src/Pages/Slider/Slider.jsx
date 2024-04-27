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
import image8 from '../../assets/8.jpg'
import image9 from '../../assets/9.jpg'
import image10 from '../../assets/10.jpg'
import image11 from '../../assets/11.jpg'
import image12 from '../../assets/12.jpg'
import image13 from '../../assets/13.jpg'
import image14 from '../../assets/14.jpg'
import image15 from '../../assets/15.jpg'
import image16 from '../../assets/16.jpg'
import image17 from '../../assets/17.jpg'
import image18 from '../../assets/19.jpg'
import image19 from '../../assets/20.jpg'
import image20 from '../../assets/21.jpg'


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
        slidesPerView={4}
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
        <SwiperSlide><img className='img' src={image8} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image9} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image10} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image11} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image12} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image13} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image14} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image15} alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  </div>
   
  );
};

export default Slider;