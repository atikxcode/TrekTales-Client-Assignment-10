import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

  const place = useLoaderData();

  


  return (
    <div className="bg-[#000000] py-16">
      <h2>{place.name}</h2>
    </div>
  );
};

export default ViewDetails;