import video from '../../assets/EXPLORING_EUROPE_-_Cinematic_Travel_Video_-_4K(1080p).mp4'
import image1 from '../../assets/100.jpg'
import image2 from '../../assets/101.jpg'
import image3 from '../../assets/102.avif'
import image4 from '../../assets/103.jpg'
import image5 from '../../assets/104.avif'
import image6 from '../../assets/106.avif'
import './Happiness.css'



const Happiness = () => {
  return (
    <div className="bg-[#000000] w-[100%] h-auto text-white  mt-36">

    <div className='mb-20 flex flex-col justify-center items-center text-center mx-auto container p-8'>
    <h2 className='text-[45px] font-bold mb-8'>Gallery of Happiness</h2>
    <p className='text-lg text-gray-400'>Welcome to our Gallery of Happiness, where each image tells a story of laughter, love, and light. Explore vibrant scenes and heartwarming moments, and let your spirit soar with joy. From serene sunsets to acts of kindness, find inspiration in every frame. Join us in celebrating life's beautiful moments, one smile at a time.</p>
    </div>

     

      <video className=' w-[100%] h-[100%] object-cover ' src={video} autoPlay loop muted></video>
      
      <div className='grid grid-cols-3 gap-12 mx-auto container pt-32 pb-32'>
        <img className='hover:scale-110 duration-1000 transition-all w-[450px] h-[400px] object-cover rounded-lg' src={image1} alt="" />
        <img className='hover:scale-110 duration-1000 transition-all w-[450px] h-[400px] object-cover rounded-lg' src={image2} alt="" />
        <img className='hover:scale-110 duration-1000 transition-all w-[450px] h-[400px] object-cover rounded-lg' src={image3} alt="" />
        <img className='hover:scale-110 duration-1000 transition-all w-[450px] h-[400px] object-cover rounded-lg' src={image4} alt="" />
        <img className='hover:scale-110 duration-1000 transition-all w-[450px] h-[400px] object-cover rounded-lg' src={image5} alt="" />
        <img className='hover:scale-110 duration-1000 transition-all w-[450px] h-[400px] object-cover rounded-lg' src={image6} alt="" />

      </div>

      

    </div>
  );
};

export default Happiness;