import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";



const AllTouristSpots = () => {


  

  useEffect(() => {
    Aos.init();
  },[])
  const [sortOrder, setSortOrder] = useState('asc');
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/touristspot')
    .then(res => res.json())
    .then(data => {
      let sortedData = [...data].sort((a,b) => 
    sortOrder === 'asc' ? a.average_cost - b.average_cost : b.average_cost - a.average_cost);
    //  console.log(data)
     setTouristSpots(sortedData);
    })
  }, [sortOrder]);

  const [touristSpots, setTouristSpots] = useState([]);






  return (
    <div className="bg-[#000000]" >
      <Helmet>
      <meta charSet="utf-8" />
      <title>All Tourist Spot - TrekTales</title>

      </Helmet>
      <div className="z-50"><Navbar></Navbar></div>

      <div className="py-16  mx-auto container -z-20">
      <div className="text-white flex gap-8 flex-col items-center mx-auto container">
      <h2 className="text-5xl font-bold">Explore Our Top Tourist Spots</h2>
      <p className="text-[16px] text-gray-300 text-center w-1/2">Embark on an unforgettable journey through our curated selection of must-visit destinations. From iconic landmarks to hidden gems, discover the beauty and charm of each location, and create lasting memories with every adventure. Start planning your next getaway today!</p>
      
      <div className="mb-10 flex flex-col items-center">
      <button onClick={() => setMenuOpen(!isMenuOpen)} className="bg-gray-400 p-4 text-xl font-bold w-[180px] bg-opacity-70 duration-700 hover:bg-white hover:text-black">Sort</button>

{
  isMenuOpen && (
    <div className="flex flex-col   rounded-lg p-4 gap-2">
      <div className="flex items-center justify-center ">
      <button onClick={() => {setSortOrder('asc'); setMenuOpen(false);}} className="bg-gray-400 p-2 font-bold bg-opacity-70 duration-700 hover:bg-white hover:text-black">Ascending</button>
      </div>
     <div>
     <button onClick={() => {setSortOrder('desc'); setMenuOpen(false);}} className="bg-gray-400 p-2 font-bold bg-opacity-70 duration-700 hover:bg-white hover:text-black">Descending</button>
     </div>
    </div>
  )
}

      </div>


      <div className="grid grid-cols-3 gap-16">
      {
        touristSpots.map(touristSpot => <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="" key={touristSpot._id}>
          <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b]">
          <img className="w-[450px] h-[350px] " src={touristSpot.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg mb-2">{touristSpot.name}</p>
          <p className="font-extrabold">Cost:   <span className="text-[14px] text-gray-400">{touristSpot.average_cost}$</span></p>
          <p className="font-extrabold">Visit:  <span className="text-[14px] text-gray-400">{touristSpot.total_visitors_per_year}</span> </p>
          <p className="font-extrabold">Time:   <span className="text-[14px] text-gray-400">{touristSpot.travel_time}</span> </p>
          <p className="font-extrabold">Season: <span className="text-[14px] text-gray-400">{touristSpot.seasonality}</span> </p>
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