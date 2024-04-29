
import 'aos/dist/aos.css'
import Aos from "aos";
import './About.css'
import { useEffect } from 'react';

import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import team5 from '../../assets/team5.jpg'
import team6 from '../../assets/team6.jpg'


const About = () => {

  useEffect(() => {
    Aos.init();
  },[])




  return (
    <div className='py-24 '>
   

   <div  data-aos="fade-up" data-aos-duration="2000">

    <div className='flex flex-col py-16 items-center'>
    <h2 className='text-[30px] md:text-[35px] lg:text-[45px] xl:text-[55px] text-toggle'>Meet Our Team</h2>
    <p className='text-[18px] md:text-[20px] lg:text-[20px] xl:text-[25px] text-yellow-600'>PROFESSIONALS</p>
     
    </div>



     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16 mx-auto container'>

     <div className='flex flex-col w-[350px]  hover:scale-95 duration-1000 mx-auto'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundColor: '#000000',backgroundImage: `url(${team1})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Valentina Karla</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>General Manager</p>
      </div>
      </div>

        <div className='flex flex-col  w-[350px]  hover:scale-95 duration-1000 mx-auto'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team2})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Micheal White</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Guest Service Department</p>
      </div>
      </div>

        <div className='flex flex-col  w-[350px]  hover:scale-95 duration-1000 mx-auto'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team3})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Olivia Martin</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Reservation Manager</p>
      </div>
      </div>

        <div className='flex flex-col  w-[350px]  hover:scale-95 duration-1000 mx-auto'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team4})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Marina Dana</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>F&B Manager</p>
      </div>
      </div>

        <div className='flex flex-col  w-[350px]  hover:scale-95 duration-1000 mx-auto'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team5})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Enrico Brown</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Head Chef</p>
      </div>
      </div>
      
        <div className='flex flex-col  w-[350px]  hover:scale-95 duration-1000 mx-auto'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team6})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Victoria Dan</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Meetings and Events Manager</p>
      </div>
      </div>
     </div>
        
      


   </div>



     
      
    </div>
  );
};

export default About;