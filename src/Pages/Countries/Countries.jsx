import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
import { Helmet } from "react-helmet";
import france from '../../assets/france.jpg'
import italy from '../../assets/italy.jpg'
import spain from '../../assets/spain.jpg'
import england from '../../assets/england.avif'
import netherland from '../../assets/netherlands.avif'
import switzerland from '../../assets/switzerland.avif'



const Countries = () => {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <div className='bg-[#000000]'>
      <Helmet>
      <meta charSet="utf-8" />
      <title>About - Elite Shores Escape</title>

      </Helmet>


      <div className="mx-auto py-10">

      <div className='flex justify-center text-white mb-24  flex-col items-center'  data-aos="fade-up" data-aos-duration="2000">
        <h2 className='text-[45px] font-medium'>Explore Our Global Destinations</h2>
        <p className="w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-[#FFFFFF99]  leading-[30px] text-center md:text-center lg:text-center xl:text-center">Discover the wonders of the world as you journey through captivating images of diverse countries. Click on any destination to uncover its hidden treasures and must-visit tourist spots.</p>
      </div>

      <div className='flex flex-col gap-24' >







      <div  data-aos="fade-up" data-aos-duration="2000">

      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center md:justify-center lg:justify-center xl:justify-center'>

      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-12 '>


      <div className='flex flex-col gap-2 items-center md:items-center lg:items-center xl:items-start'>
      <p className='text-[#b95c47] text-[25px] font-bold text-center md:text-center lg:text-center xl:text-start'>France</p>
      <h2 className='text-[25px] md:text-[35px] xl:text-[45px] text-white w-[90%] md:w-[90%] xl:w-[550px] text-center md:text-center lg:text-center xl:text-start'>Bonjour, France: A Journey Through Timeless Beauty</h2>
      <p className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-[#FFFFFF99] leading-[30px] text-center md:text-center lg:text-center xl:text-start' >France, a land of timeless beauty, beckons with its exquisite landscapes, rich history, and vibrant culture. From the iconic Eiffel Tower in Paris to the sun-drenched vineyards of Provence, every corner of this enchanting country holds a story waiting to be discovered. Whether you're drawn to its world-renowned cuisine, charming villages, or historic landmarks, France promises an unforgettable journey filled with romance, adventure, and endless possibilities. Explore the heart of Europe and uncover the magic of France.</p>
      </div>

      <div className=" p-4 bg-cover bg-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[450px] h-[400px] xl:h-[400px] relative group rounded-lg hover:scale-95 duration-1000 mx-auto md:mx-auto lg:mx-auto xl:mx-none "  style={{backgroundImage: `url(${france})`}}>
        <button className="opacity-0 group-hover:opacity-100 duration-700 ease-in-out absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 font-bold hover:bg-opacity-70 hover:text-black hover:bg-white ">Show All Tourist Spot</button>
      </div>
      

      </div>
      </div>

      </div>






      <div  data-aos="fade-up" data-aos-duration="2000">

      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center md:justify-center lg:justify-center xl:justify-center'>
      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-12'>

      <div className=" p-4 bg-cover bg-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[450px] h-[400px] xl:h-[400px] relative group rounded-lg hover:scale-95 duration-1000 mx-auto md:mx-auto lg:mx-auto xl:mx-none order-2 xl:order-1"  style={{backgroundImage: `url(${italy})`}}>
      <button className="opacity-0 group-hover:opacity-100 duration-700 ease-in-out absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 font-bold hover:bg-opacity-70 hover:text-black hover:bg-white ">Show All Tourist Spot</button>
      </div>

      <div className='flex flex-col gap-2 items-center md:items-center lg:items-center xl:items-start order-1 xl:order-2'>
      <p className='text-[#b95c47] text-[25px] font-bold text-center md:text-center lg:text-center xl:text-start'>Italy</p>
      <h2 className='text-[25px] md:text-[35px] xl:text-[45px] text-white w-[90%] md:w-[90%] xl:w-[550px] text-center md:text-center lg:text-center xl:text-start'>Italian Splendor: Discover the Charms of Italy</h2>
      <p className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-[#FFFFFF99] leading-[30px] text-center md:text-center lg:text-center xl:text-start' >Italy, a land of timeless charm, beckons with its rich history, stunning landscapes, and vibrant culture. From the iconic landmarks of Rome to the picturesque coastlines of the Amalfi Coast, every corner of this enchanting country offers an unforgettable journey filled with romance, adventure, and endless possibilities. Explore Italy and discover its magic.</p>
      </div>

      </div>
      </div>

      </div>








      <div  data-aos="fade-up" data-aos-duration="2000">

      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center md:justify-center lg:justify-center xl:justify-center'>

      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-12'>

      

      <div className='flex flex-col gap-2 items-center md:items-center lg:items-center xl:items-start '>
      <p className='text-[#b95c47] text-[25px] font-bold text-center md:text-center lg:text-center xl:text-start'>Spain</p>
      <h2 className='text-[25px] md:text-[35px] xl:text-[45px] text-white w-[90%] md:w-[90%] xl:w-[550px] text-center md:text-center lg:text-center xl:text-start'>Sizzling Spain: Discover the Allure of the Iberian Peninsula</h2>
      <p className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-[#FFFFFF99] leading-[30px] text-center md:text-center lg:text-center xl:text-start'>Spain, a country of vibrant culture and captivating beauty, invites you to explore its diverse landscapes and rich heritage. From the bustling streets of Barcelona to the majestic architecture of Madrid, every corner of this enchanting country exudes a unique charm. Indulge in the fiery rhythms of flamenco, savor the flavors of Spanish cuisine, and immerse yourself in centuries of history and tradition. Experience the passion and allure of Spain.</p>
      </div>

      <div className="p-4 bg-cover bg-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[450px] h-[400px] xl:h-[400px] relative group rounded-lg hover:scale-95 duration-1000 mx-auto md:mx-auto lg:mx-auto xl:mx-none"  style={{backgroundImage: `url(${spain})`}}>
      <button className="opacity-0 group-hover:opacity-100 duration-700 ease-in-out absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 font-bold hover:bg-opacity-70 hover:text-black hover:bg-white ">Show All Tourist Spot</button>
      </div>

      </div>
      </div>

      </div>





      <div  data-aos="fade-up" data-aos-duration="2000">

    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center md:justify-center lg:justify-center xl:justify-center'>
    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-12'>

    <div className=" p-4 bg-cover bg-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[450px] h-[400px] xl:h-[400px] relative group rounded-lg hover:scale-95 duration-1000 mx-auto md:mx-auto lg:mx-auto xl:mx-none order-2 xl:order-1"  style={{backgroundImage: `url(${england})`}}>
    <button className="opacity-0 group-hover:opacity-100 duration-700 ease-in-out absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 font-bold hover:bg-opacity-70 hover:text-black hover:bg-white ">Show All Tourist Spot</button>
    </div>

    <div className='flex flex-col gap-2 items-center md:items-center lg:items-center xl:items-start order-1 xl:order-2'>
    <p className='text-[#b95c47] text-[25px] font-bold text-center md:text-center lg:text-center xl:text-start'>England</p>
    <h2 className='text-[25px] md:text-[35px] xl:text-[45px] text-white w-[90%] md:w-[90%] xl:w-[550px] text-center md:text-center lg:text-center xl:text-start'>British Elegance: Uncover the Charms of England</h2>
    <p className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-[#FFFFFF99] leading-[30px] text-center md:text-center lg:text-center xl:text-start' >England, a land of timeless elegance and rich history, awaits your discovery. From the iconic landmarks of London, including Big Ben and Buckingham Palace, to the rolling green hills of the countryside, every corner of this historic nation offers a blend of tradition and modernity. Immerse yourself in the literary heritage of Shakespeare's birthplace, wander through charming villages steeped in folklore, and enjoy afternoon tea in historic tearooms. Explore the charm and sophistication of England.</p>
    </div>

    </div>
    </div>

    </div>




    <div  data-aos="fade-up" data-aos-duration="2000">

    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center md:justify-center lg:justify-center xl:justify-center'>

    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-12'>



    <div className='flex flex-col gap-2 items-center md:items-center lg:items-center xl:items-start '>
    <p className='text-[#b95c47] text-[25px] font-bold text-center md:text-center lg:text-center xl:text-start'>Netherland</p>
    <h2 className='text-[25px] md:text-[35px] xl:text-[45px] text-white w-[90%] md:w-[90%] xl:w-[550px] text-center md:text-center lg:text-center xl:text-start'>Enchanting Netherlands: Explore Dutch Delights</h2>
    <p className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-[#FFFFFF99] leading-[30px] text-center md:text-center lg:text-center xl:text-start'>The Netherlands, a country of picturesque beauty and cultural richness, invites you to explore its charming landscapes and vibrant cities. From the iconic windmills of Kinderdijk to the historic canals of Amsterdam, every corner of this enchanting nation tells a story of innovation and tradition. Immerse yourself in the world-renowned art of Dutch masters, cycle through tulip fields ablaze with color, and experience the warmth of Dutch hospitality in cozy cafes. Discover the magic of the Netherlands.</p>
    </div>

    <div className="p-4 bg-cover bg-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[450px] h-[400px] xl:h-[400px] relative group rounded-lg hover:scale-95 duration-1000 mx-auto md:mx-auto lg:mx-auto xl:mx-none"  style={{backgroundImage: `url(${netherland})`}}>
    <button className="opacity-0 group-hover:opacity-100 duration-700 ease-in-out absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 font-bold hover:bg-opacity-70 hover:text-black hover:bg-white ">Show All Tourist Spot</button>
    </div>

    </div>
    </div>

    </div>





    <div  data-aos="fade-up" data-aos-duration="2000">

    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center md:justify-center lg:justify-center xl:justify-center'>
    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-12'>

    <div className=" p-4 bg-cover bg-center w-[90%] md:w-[90%] lg:w-[90%] xl:w-[450px] h-[400px] xl:h-[400px] relative group rounded-lg hover:scale-95 duration-1000 mx-auto md:mx-auto lg:mx-auto xl:mx-none order-2 xl:order-1"  style={{backgroundImage: `url(${switzerland})`}}>
    <button className="opacity-0 group-hover:opacity-100 duration-700 ease-in-out absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 font-bold hover:bg-opacity-70 hover:text-black hover:bg-white ">Show All Tourist Spot</button>
    </div>

    <div className='flex flex-col gap-2 items-center md:items-center lg:items-center xl:items-start order-1 xl:order-2'>
    <p className='text-[#b95c47] text-[25px] font-bold text-center md:text-center lg:text-center xl:text-start'>Switzerland</p>
    <h2 className='text-[25px] md:text-[35px] xl:text-[45px] text-white w-[90%] md:w-[90%] xl:w-[550px] text-center md:text-center lg:text-center xl:text-start'>Swiss Serenity: Explore the Charms of Switzerland</h2>
    <p className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[500px] text-[#FFFFFF99] leading-[30px] text-center md:text-center lg:text-center xl:text-start' >Switzerland, a country of breathtaking beauty and timeless charm, invites you to explore its Alpine landscapes and pristine lakes. From the snow-capped peaks of the Swiss Alps to the picturesque villages of the countryside, every corner of this enchanting nation offers a glimpse of natural splendor. Indulge in world-class skiing, savor Swiss chocolates and cheeses, and embark on scenic train journeys through the heart of the mountains. Discover the magic of Switzerland.</p>
    </div>

    </div>
    </div>

    </div>







      









      

      </div>
      </div>
      
    </div>
  );
};

export default Countries;