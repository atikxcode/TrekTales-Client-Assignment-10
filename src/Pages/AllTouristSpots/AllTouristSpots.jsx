import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const AllTouristSpots = () => {

  useEffect(() => {
    Aos.init();
  },[])

  useEffect(() => {
    fetch('http://localhost:5000/touristspot')
    .then(res => res.json())
    .then(data => {
     console.log(data)
     setTouristSpots(data);
    })
  }, []);

  const [touristSpots, setTouristSpots] = useState([]);


  return (
    <div className="bg-[#000000] " >
      <Navbar></Navbar>
      <div className="py-16  mx-auto container">
      <div className="text-white flex gap-8 flex-col items-center mx-auto container">
      <h2 className="text-5xl font-bold">Explore Our Top Tourist Spots</h2>
      <p className="text-[16px] text-gray-300 text-center w-1/2">Embark on an unforgettable journey through our curated selection of must-visit destinations. From iconic landmarks to hidden gems, discover the beauty and charm of each location, and create lasting memories with every adventure. Start planning your next getaway today!</p>
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
         <Link to={`/viewdetails/${touristSpot._id}`}> <button className="text-gray-400 hover:text-white hover:font-bold transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
      }
      </div>
     
      </div>
      </div>

      <Footer></Footer>
   
    </div>
  );
};

export default AllTouristSpots;