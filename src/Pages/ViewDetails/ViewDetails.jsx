import { useLoaderData } from "react-router-dom";

import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";


const ViewDetails = () => {

  const place = useLoaderData();

  


  return (
    <div className="bg-[#000000] text-white ">
      <Navbar></Navbar>
      <Helmet>
      <meta charSet="utf-8" />
      <title>View Details - TrekTales</title>

      </Helmet>
      
      <div className="py-[100px] md:py-[300px] lg:py-[200px] xl:py-[200px] container mx-auto">
      

      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row bg-[#1b1b1b] ">

        <div>
        <img className="xl:w-[1000px] xl:h-[800px]" src={place.image} alt="" />
        </div>

        <div className="flex flex-col p-8 gap-2 justify-center">
        <p className="text-3xl font-bold">{place.country}</p>
        <h2 className="text-lg font-semibold">{place.name}</h2>
        
        <p className="text-gray-400 xl:w-[450px]"><span className="text-lg font-bold text-white">Description:</span> {place.short_description}</p>
        <p className="text-gray-400"><span className="text-[16px] font-bold text-white">Placed At: </span>{place.location}</p>
        <p className="text-gray-400"><span className="text-[16px] font-bold text-white">Only At: </span>{place.average_cost}$</p>
        <p className="text-gray-400"><span className="text-[16px] font-bold text-white">Seasonality: </span>{place.seasonality}</p>
        <p className="text-gray-400"><span className="text-[16px] font-bold text-white">Destination Travel Time: </span>{place.travel_time}</p>
        <p className="text-gray-400"><span className="text-[16px] font-bold text-white">Visited Per Year: </span>{place.total_visitors_per_year}</p>
        </div>

      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewDetails;