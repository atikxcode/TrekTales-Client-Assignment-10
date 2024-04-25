import React, { useEffect } from 'react';
import Slider from '../Slider/Slider';
import homeimg from '../../assets/home-bg.jpg'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { FaAngleRight } from "react-icons/fa";
import 'aos/dist/aos.css'
import Aos from "aos";


const Home = () => {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <div className='bg-[#000000]'>
      <div className='absolute  w-full h-full '>
      
      <div className='relative h-full w-full' style={{backgroundImage:`url(${homeimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className=' w-full top-0'>
      <NavBar></NavBar>
      </div>
        <div  className=' pl-[200px] pt-6 pb-10 pr-10 text-white flex flex-col ' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
        <h2 className='text-2xl font-medium'>Welcome To TrekTales</h2>
        <h2 className='text-[55px] w-[280px] font-bold leading-[80px] mb-4 mt-4'>Explore The world</h2>
        <p className='text-[16px] font-medium w-[500px]'>Live the trips exploring the world, discover paradises, islands, mountains and much more, get your trip now.</p>
        
        <button className='bg-gray-400 bg-opacity-70 text-white py-3 px-4 flex items-center gap-2 mt-4 w-[180px] font-bold hover:bg-gray-600 duration-500'>
        <span>Start Your Journey </span><span className='text-white'><FaAngleRight /></span>
      </button>
        
       
        </div>
        <div className='absolute bottom-0 w-full'>
        <Slider></Slider>
        </div>
      </div>


      

      

      <Footer></Footer>
      
    </div>
    </div>
  );
};

export default Home;