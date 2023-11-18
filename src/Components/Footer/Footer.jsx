
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  
  const location = useLocation();
  const links = (
    <>
      <li>
        <HashLink
          smooth
          to="/#services"
          className={`hover:border-b-2 ${
            location.pathname.includes("#services")
              ? " text-primary-c"
              : "border-transparent"
          }`}
        >
          Services
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="/#form"
          className={`hover:border-b-2 ${
            location.pathname.includes("#about")
              ? "text-primary-c"
              : "border-transparent"
          }`}
        >
          Pricing
        </HashLink>
      </li>

      <li>
        <HashLink
          smooth
          to="/#faq"
          className={`hover:border-b-2 ${
            location.pathname.includes("#faq")
              ? "text-primary-c"
              : "border-transparent"
          }`}
        >
          FAQ
        </HashLink>
      </li>
    </>
  );
  return (
    <div className=" bg-black space-y-5 py-20">
      <div className="navbar-center flex justify-center items-center text-white">
        <ul className=" md:menu-horizontal flex flex-wrap flex-col text-center md:space-x-10 ">
          {links}
        </ul>
      </div>
      <div className="flex justify-center">
        <hr className="border md:w-[40%] w-[80%]" />
      </div>
      <div>
        <p className="text-white text-center text-sm">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
