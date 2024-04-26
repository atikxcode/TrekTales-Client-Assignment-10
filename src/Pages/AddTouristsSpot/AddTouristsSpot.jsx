
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import './AddTouristSpot.css'

const countries = ['France', 'Italy', 'Spain', 'England', 'Netherlands', 'Switzerland']


const AddTouristsSpot = () => {


  const [country, setCountry] = useState('');

  const handleInputChange = (event) => {
    const input = event.target.value;
    if(countries.includes(input)){
      setCountry(input.charAt(0).toUpperCase() + input.slice(1));
    }
  };

  const handleAdd = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.spot.value;
    
    const location = form.location.value;
    const short_description = form.description.value;
    const average_cost = form.cost.value;
    const seasonality = form.season.value;
    const travel_time = form.time.value;
    const total_visitors_per_year = form.visit.value;
    const user_email = form.email.value;
    const user_name = form.name.value;

    const newTourSpot = {image, name, country, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name};
    console.log(newTourSpot)

    fetch('http://localhost:5000/touristspot', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTourSpot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    
  }

  


  return (
    <div className="bg-[#000000]">

      <Navbar></Navbar>


      <div className="py-16">
    <h2 className="my-10 text-center text-white text-[35px] font-semibold">Add Your Tourist Spot</h2>
    

<form  className="md:3/4 lg:w-1/2 mx-auto" onSubmit={handleAdd}>


<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Image</span>
  </label>
  <input type="text" placeholder="Enter your email address" name="image" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Tourist Spot Name</span>
  </label>
  <input type="text" placeholder="Enter your email address" name="spot" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Country</span>
  </label>
  <select
   onChange={handleInputChange} 
   value={country} 
     name="country"
      className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400 menu"
       required
        >
  {
    countries.map((country, index) => (
      <option className="option" key={index} value={country}>{country}</option>
    ))}
    </select>
    </div>
  


<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Location</span>
  </label>
  <input type="text" placeholder="Enter your email address" name="location" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Short Description</span>
  </label>
  <input type="text" placeholder="Enter your email address" name="description" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Average Cost</span>
  </label>
  <input type="number" placeholder="Enter your email address" name="cost" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Seasonality</span>
  </label>
  <input type="text" placeholder="Enter your email address" name="season" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Travel Time</span>
  </label>
  <input type="number" placeholder="Enter your email address" name="time" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Total Visitor Per Year</span>
  </label>
  <input type="number" placeholder="Enter your email address" name="visit" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">User Email</span>
  </label>
  <input type="email" placeholder="Enter your email address" name="email" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">User Name</span>
  </label>
  <input type="text" placeholder="Enter your email address" name="name" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control mt-6">
  <button className="p-3 rounded-xl  text-white text-xl font-semibold bg-gray-400 opacity-70 hover:text-black hover:bg-white duration-700 ">Add</button>
</div>




</form>
    </div>

    <Footer></Footer>


    </div>
  );
};

export default AddTouristsSpot;