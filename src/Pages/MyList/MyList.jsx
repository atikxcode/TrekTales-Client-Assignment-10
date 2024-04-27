import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import List from "./List";
import Aos from "aos";


const MyList = () => {

  const {user} = useContext(AuthContext);







  useEffect(() => {
    Aos.init();
  },[])

  const [myList, setMyList] = useState([]);

useEffect(() => {

  if(!user || !user.email){
    return;
  }
 fetch('http://localhost:5000/touristspot')
 .then(res => res.json())
 .then(data => {
  const filteredList = data?.filter(item => item?.user_email === user?.email);
      setMyList(filteredList);
      console.log(filteredList);
 })
 .catch(error => {
  console.error('Error fetching data: ', error);
 })
}, [user?.email, user])





 

  return (
    <div className="bg-[#000000] " >
    <Helmet>
    <meta charSet="utf-8" />
    <title>All Tourist Spot - TrekTales</title>

    </Helmet>
    <Navbar></Navbar>
    
    <div className="my-10 mx-auto container">

      <div className="grid grid-cols-3 gap-4">
        {
          myList.map(lists => <List key={lists._id} lists={lists}></List>)
        }
      </div>

    </div>

    <Footer></Footer>
 
  </div>
  );
};

export default MyList;