import Aos from "aos";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const UpdateTourCard = () => {

  const card = useLoaderData();

  const {_id,name, image, location, short_description, average_cost, travel_time, total_visitors_per_year, seasonality, country} = card;

  useEffect(() => {
    Aos.init();
  },[])


  const notify = () => toast("Updated The Tourist Spot Successfully");

  const {user} = useContext(AuthContext)

  

 
  const handleUpdate = e => {
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
   

    const updateTourSpot = {image, name, country, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year};
    console.log(updateTourSpot)

    fetch(`https://assignment-10-server-zeta-smoky.vercel.app/touristspot/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateTourSpot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
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

      <Navbar></Navbar>


      <div className="py-16" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="my-10 text-center text-white text-[35px] font-semibold">Update Your Tourist Spot</h2>
    

<form  className="md:3/4 lg:w-1/2 mx-auto" onSubmit={handleUpdate}>


<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Image</span>
  </label>
  <input type="text" placeholder="Enter image of Tourist spot" name="image" defaultValue={image} className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Tourist Spot Name</span>
  </label>
  <input type="text" placeholder="Enter Tourist spot name" name="spot" defaultValue={name} className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Country</span>
  </label>

  <select name="country" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400"  required>
  <option className="bg-[#000000]" value={country} selected>{country}</option>
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
  <input type="text" placeholder="Enter Tourist Spot Location" name="location" defaultValue={location} className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Short Description</span>
  </label>
  <input type="text" placeholder="Give a short description" name="description" defaultValue={short_description} className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Average Cost</span>
  </label>
  <input type="number" placeholder="Average cost " name="cost" defaultValue={average_cost} className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Seasonality</span>
  </label>
  <input type="text" placeholder="Enter Seasonality" name="season" defaultValue={seasonality} className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Travel Time</span>
  </label>
  <input type="text" placeholder="Travel Time" name="time" defaultValue={travel_time}  className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Total Visitor Per Year</span>
  </label>
  <input type="number" placeholder="Enter total approximated visit per year" name="visit" defaultValue={total_visitors_per_year}  className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
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

export default UpdateTourCard;