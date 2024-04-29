import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";
import { AuthContext } from "../../Providers/AuthProvider";

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
   setTouristSpots(data.slice(0, 9));
  })
}, []);

  return (
    <div className="py-16" >
      <div className=" flex gap-8 flex-col items-center mx-auto container">
      <h2 className="text-2xl lg:text-4xl xl:text-5xl text-toggle font-bold">Iconic Landmarks</h2>
      <p className="text-[16px] text-toggle3 mb-10">Journey Through Our Most Visited Spots</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16">
      {
        touristSpots.map(touristSpot => <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="" key={touristSpot._id}>
          <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b]">
          <img className="w-[450px] h-[350px] " src={touristSpot.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex flex-col text-toggle2 items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg mb-2">{touristSpot.name}</p>
          <p className="font-extrabold">{touristSpot.country}</p>
          </div>
          <div className="p-8 items-center flex">
         <Link to={`/viewdetails/${touristSpot._id}`}> <button className="text-gray-400 hover:text-white hover:font-bold transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
      }
      </div>
      <div className="pt-4">
      <Link to={'/alltouristspot'}><button className="bg-gray-400 opacity-70 p-4  hover:bg-white hover:text-black font-bold transition-all">Show All</button></Link>

      </div>
      </div>
   
    </div>
  );
};

export default TouristSpot;