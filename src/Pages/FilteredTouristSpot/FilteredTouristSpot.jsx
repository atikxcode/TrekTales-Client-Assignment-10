import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilteredSpot from "./FilteredSpot";


const FilteredTouristSpot = () => {

  const [filteredSpots, setFilteredSpots] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get('countries');
  console.log(country);


 useEffect(() => {
 if(country){
  fetch(`http://localhost:5000/touristspot?${country}`)
  .then(res => res.json())
  .then(data => setFilteredSpots(data))
 }
 }, [country])

  return (
    <div>
      {
        filteredSpots.map(spot => <FilteredSpot key={spot._id} spot={spot}></FilteredSpot>)
      }
    </div>
  );
};

export default FilteredTouristSpot;