
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const List = ({lists, setLists}) => {

  

  const {_id, country, short_description, average_cost, seasonality,  image, name, location} = lists;




  const notify = () => toast("You Have Successfully Deleted The Data");


  const handleDelete = id => {
    // Display Swal confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms deletion, send DELETE request to server
        fetch(`http://localhost:5000/touristspot/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(() => {
              // Reload the page after deletion
              window.location.reload();
            });
          }
        })
        .catch(error => {
          console.error('Error deleting file:', error);
          Swal.fire({
            title: "Error",
            text: "An error occurred while deleting the file.",
            icon: "error"
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // If user cancels deletion, display a message
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  };


  return (
    <div className="bg-[#000000]">

      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">

      <div className="flex flex-row gap-6 bg-[#1b1b1b] w-auto h-auto hover:scale-105 transition-all" >

        <div>
        <img className="w-[450px] h-[350px]" src={image} alt="" />
        </div>

        <div className="flex justify-between items-center">
         
          <div className="flex flex-col items-start p-8 bg-[#1b1b1b] opacity-70 text-white">
          <p className="text-lg mb-2">{name}</p>
          <p className="font-extrabold">Country:   <span className="text-[14px] text-gray-400">{country}</span></p>
          <p className="font-extrabold">Location:  <span className="text-[14px] text-gray-400">{location}</span> </p>
          <p className="font-extrabold w-[800px]">Description:   <span className="text-[14px] text-gray-400">{short_description}</span> </p>
          <p className="font-extrabold">Cost: <span className="text-[14px] text-gray-400">{average_cost}$</span> </p>
          <p className="font-extrabold">Seasonality: <span className="text-[14px] text-gray-400">{seasonality}</span> </p>
          </div>


        <div className="p-8 justify-center items-center flex flex-col gap-6">
         <Link to={`/viewdetails/${_id}`}> <button className="btn bg-gray-400 bg-opacity-70  border-0 text-white hover:text-black hover:bg-white duration-700">View Details</button></Link>
         <Link to={`/updatetourcard/${_id}`}> <button className="btn bg-gray-400 bg-opacity-70  border-0 text-white hover:text-black hover:bg-white duration-700">Update Details</button></Link>
          <button onClick={() => handleDelete(_id)} className="btn bg-gray-400 bg-opacity-70  border-0 text-white hover:text-black hover:bg-white duration-700">Delate</button>
          </div>

        </div>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default List;