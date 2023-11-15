import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-secendary-c font-kdam">
      <Navbar></Navbar> 
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
