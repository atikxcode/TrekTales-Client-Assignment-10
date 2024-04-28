import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const Country = () => {

  const [countries, setCountries] = useState([]);
  const location = useLocation();
  console.log('Location state:', location.state)

  useEffect(() => {
    fetch('http://localhost:5000/country')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data)
    })
  },[])

  return (
    <div className="">

      <div className="mx-auto py-10">
      <div className='flex justify-center  mb-24  flex-col items-center'  data-aos="fade-up" data-aos-duration="2000">
        <h2 className='text-[25px] md:text-[35px] lg:text-[40px] text-toggle xl:text-[45px] font-medium'>Explore Our Global Destinations</h2>
        <p className="w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-gray-300  leading-[30px] text-center md:text-center lg:text-center xl:text-center text-toggle3">Discover the wonders of the world as you journey through captivating images of diverse countries. Click on any destination to uncover its hidden treasures and must-visit tourist spots.</p>
      </div>
      <div className="className='flex flex-col gap-24'">
      {
        countries.map((country, index) =>
        
        <div key={country._id}  data-aos="fade-up" data-aos-duration="2000">

        <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center md:justify-center lg:justify-center xl:justify-center'>
  
        
  
  
        <div className={`flex ${index % 2 === 0 ? 'xl:flex-row lg:flex-col md:flex-col flex-col' : 'lg:flex-col md:flex-col flex-col xl:flex-row-reverse'} gap-12 mb-10 `}>
        <div className='flex flex-col gap-2 items-center md:items-center lg:items-center xl:items-start order-1'>
        <p className='text-[#b95c47] text-[25px] font-bold text-center md:text-center lg:text-center xl:text-start'>{country.country_name}</p>
        <h2 className='text-[25px] md:text-[35px] xl:text-[45px] text-toggle  w-[90%] md:w-[90%] xl:w-[550px] text-center md:text-center lg:text-center xl:text-start'>{country.heading}</h2>
        <p className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-toggle3 leading-[30px] text-center md:text-center lg:text-center xl:text-start' >{country.short_description}</p>
        </div>
  
        <div className= {`p-4 bg-cover bg-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[450px] h-[400px] xl:h-[400px] relative group rounded-lg hover:scale-95 duration-1000 mx-auto md:mx-auto lg:mx-auto xl:mx-none `}  style={{backgroundImage: `url(${country.image})`}}><Link to="/filteredtouristspot" state={{ country: country.country_name }}><button className="opacity-0 group-hover:opacity-100 duration-700 ease-in-out absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 font-bold hover:bg-opacity-70 hover:text-black hover:bg-white ">Show All Tourist Spot</button></Link>
        </div>
        </div>
        
  
        
        </div>
  
        </div>)
        
        
        // flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
        
        
      }
      </div>
      
      </div>
    </div>
  );
};

export default Country;