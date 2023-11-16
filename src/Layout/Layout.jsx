import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="font-Roboto">
    <Toaster/>
      <Navbar></Navbar> 
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
