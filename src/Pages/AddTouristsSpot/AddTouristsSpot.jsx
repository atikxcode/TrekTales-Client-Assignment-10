
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import './AddTouristSpot.css'
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'
import Aos from "aos";
import { Helmet } from "react-helmet";
import 'animate.css';





const AddTouristsSpot = () => {

  useEffect(() => {
    Aos.init();
  },[])


  const notify = () => toast("Thanks for adding new Tour-Spot for us.");

  const {user} = useContext(AuthContext)

 
  const handleAdd = e => {
    e.preventDefault();
   
    const form = e.target;
    const image = form.image.value;
    const name = form.spot.value;
    const countries = form.country.value;
    const country = countries;
    const location = form.location.value;
    const short_description = form.description.value;
    const cost = form.cost.value;
    const average_cost = parseInt(cost);
    const seasonality = form.season.value;
    const travel_time = form.time.value;
    const visit = form.visit.value;
    const total_visitors_per_year = parseInt(visit);
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
      if(data.insertedId){
         notify();
      }
      
      form.reset();
    })
    
  }

  


  return (
    <div className="bg-[#000000]">
      <Helmet>
      <meta charSet="utf-8" />
      <title>Add Tourist Spot - TrekTales</title>

      </Helmet>

      <div className=""><Navbar></Navbar></div>


      <div className="py-24 md:py-24 lg:py-24 xl:py-16">
    <h2 className="my-10 text-center text-white text-[35px] font-semibold">Add Your Tourist Spot</h2>
    

<form  className="md:3/4 lg:w-1/2 mx-auto" onSubmit={handleAdd}>


<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Image</span>
  </label>
  <input type="text" placeholder="Enter image of Tourist spot" name="image" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Tourist Spot Name</span>
  </label>
  <input type="text" placeholder="Enter Tourist spot name" name="spot" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Country</span>
  </label>

  <select name="country" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required>
    
    <option className="bg-[#000000]" value='France'>France</option>
    <option className="bg-[#000000]" value='Italy'>Italy</option>
    <option className="bg-[#000000]" value='Spain'>Spain</option>
    <option className="bg-[#000000]" value='England'>England</option>
    <option className="bg-[#000000]" value='Netherland'>Netherland</option>
    <option className="bg-[#000000]" value='Switzerland'>Switzerland</option>
  </select>

    </div>
  


<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Location</span>
  </label>
  <input type="text" placeholder="Enter Tourist Spot Location" name="location" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Short Description</span>
  </label>
  <input type="text" placeholder="Give a short description" name="description" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Average Cost</span>
  </label>
  <input type="number" placeholder="Average cost " name="cost" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Seasonality</span>
  </label>
  <input type="text" placeholder="Enter Seasonality" name="season" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Travel Time</span>
  </label>
  <input type="text" placeholder="Travel Time" name="time" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Total Visitor Per Year</span>
  </label>
  <input type="number" placeholder="Enter total approximated visit per year" name="visit" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">User Email</span>
  </label>
  <input type="email" defaultValue={user ? user.email : ''} placeholder="Enter your email address" name="email" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">User Name</span>
  </label>
  <input type="text" defaultValue={user ? user.displayName : ''} placeholder="Enter your Name" name="name" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control mt-6">
  <button className="p-3 rounded-xl  text-white text-xl font-semibold bg-gray-400 opacity-70 hover:text-black hover:bg-white duration-700 ">Add</button>
</div>




</form>
    </div>

    <Footer></Footer>

    <ToastContainer />
    </div>
  );
};

export default AddTouristsSpot;