import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const ViewDetails = () => {

  const place = useLoaderData();

  


  return (
    <div className="bg-[#000000] text-white ">
      <Navbar></Navbar>
      <div className=" py-36 container mx-auto">
      

      <div className="flex bg-[#1b1b1b] ">

        <div>
        <img className="w-[1000px] h-[800px]" src={place.image} alt="" />
        </div>

        <div className="flex flex-col p-8 gap-2 justify-center">
        <p className="text-3xl font-bold">{place.country}</p>
        <h2 className="text-lg font-semibold">{place.name}</h2>
        
        <p className="text-gray-400 w-[450px]"><span className="text-lg font-bold text-white">Description:</span> {place.short_description}</p>
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