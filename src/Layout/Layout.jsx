import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="font-Roboto">
      <Navbar></Navbar> 
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
