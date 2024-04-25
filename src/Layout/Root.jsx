import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
  return (
    <div className="font-nunito">
     
      <Outlet></Outlet>
      
    </div>
  );
};

export default Root;