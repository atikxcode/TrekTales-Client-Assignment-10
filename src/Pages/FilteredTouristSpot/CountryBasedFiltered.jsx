import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import 'aos/dist/aos.css'
import Aos from "aos";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const CountryBasedFiltered = ({spot}) => {

  useEffect(() => {
    Aos.init();
  },[])


  const {_id,name, image, location, short_description, average_cost, travel_time, total_visitors_per_year, seasonality, country} = spot;

  return (
    <div className="bg-[#000000]">
    <div className="my-16 ">

     <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
     <div className="flex flex-col gap-6 bg-[#1b1b1b] xl:w-[450px] h-auto hover:scale-105 duration-1000 transition-all">
        <div className="">
        <img className="w-full h-[350px]" src={image} alt="" />
        </div>

        <div className="flex justify-between">
         
          <div className="flex flex-col items-start p-8 bg-[#1b1b1b] opacity-70 text-white">
          <p className="text-lg mb-2">{name}</p>
          <p className="font-extrabold">Country:   <span className="text-[14px] text-gray-400">{country}</span></p>
          <p className="font-extrabold">Location:  <span className="text-[14px] text-gray-400">{location}</span> </p>
          <p className="font-extrabold">Description:   <span className="text-[14px] text-gray-400">{short_description}</span> </p>
          <p className="font-extrabold">Cost: <span className="text-[14px] text-gray-400">{average_cost}$</span> </p>
          <p className="font-extrabold">Seasonality: <span className="text-[14px] text-gray-400">{seasonality}</span> </p>
          </div>


        <div className="p-8 items-center flex">
         <Link to={`/viewdetails/${_id}`}> <button className="text-gray-400 hover:text-white hover:font-bold transition-all">View Details</button></Link>
          </div>

        </div>
      </div>
     </div>

    </div>
    
    </div>
  );
};

export default CountryBasedFiltered;