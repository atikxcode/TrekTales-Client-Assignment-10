import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";

const TouristSpot = () => {

  useEffect(() => {
    Aos.init();
  },[])

  const [touristSpots, setTouristSpots] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/touristspot')
  .then(res => res.json())
  .then(data => {
   console.log(data)
   setTouristSpots(data);
  })
}, []);

  return (
    <div className="bg-[#000000] py-16 " >
      <div className="text-white flex gap-8 flex-col items-center mx-auto container">
      <h2 className="text-5xl font-bold">Iconic Landmarks</h2>
      <p className="text-[16px] text-gray-300">Journey Through Our Most Visited Spots</p>
      <div className="grid grid-cols-3 gap-16">
      {
        touristSpots.map(touristSpot => <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="" key={touristSpot._id}>
          <div className=" hover:scale-110 transition-all bg-[#1b1b1b]">
          <img className="w-[450px] h-[350px] " src={touristSpot.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg mb-2">{touristSpot.name}</p>
          <p className="font-extrabold">{touristSpot.country}</p>
          </div>
          <div className="p-8 items-center flex">
          <button className="text-gray-400 hover:text-white hover:font-bold transition-all">View Details</button>
          </div>
         </div>
          
          </div>
          </div>)
      }
      </div>
      </div>
   
    </div>
  );
};

export default TouristSpot;