import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CountryBasedFiltered from "./CountryBasedFiltered";


const FilteredTouristSpot = () => {


  const location = useLocation();
  const {country} = location.state;
  console.log(country);
 




  const [allSpot, setAllSpot] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/touristspot')
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
    <div>
     {
      filteredSpot?.map(spot => <CountryBasedFiltered key={spot._id} spot={spot}></CountryBasedFiltered>)
     }
    </div>
  );
};

export default FilteredTouristSpot;