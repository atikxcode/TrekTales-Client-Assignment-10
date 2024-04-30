import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CountryBasedFiltered from "./CountryBasedFiltered";
import Navbar from "../Navbar/Navbar";
import Aos from "aos";
import 'aos/dist/aos.css'
import Footer from "../Footer/Footer";

const FilteredTouristSpot = () => {


  const location = useLocation();
  const {country} = location.state;
  console.log(country);
 
  useEffect(() => {
    Aos.init();
  },[])



  const [allSpot, setAllSpot] = useState([]);

  useEffect(() => {
    fetch('https://assignment-10-server-zeta-smoky.vercel.app/touristspot')
    .then(res => res.json())
    .then(data => {
      setAllSpot(data);
    })
  },[])

  const [filteredSpot, setFilteredSpot] = useState([]);

  useEffect(() => {
    const spots = allSpot?.filter(spot => spot.country == country);
    if(spots){
      setFilteredSpot(spots);
      console.log(spots)
    }
  },[country, allSpot])

  return (
    <div className="bg-[#000000]">
       <Navbar></Navbar>
       <div className="my-10 mx-auto container">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
       {
      filteredSpot?.map(spot => <CountryBasedFiltered key={spot._id} spot={spot}></CountryBasedFiltered>)
        }
       </div>
       </div>
       
       
       <Footer></Footer>
     
    </div>
  );
};

export default FilteredTouristSpot;