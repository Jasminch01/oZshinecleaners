import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, []);
  const links = (
    <>
      <li>
        <HashLink
          smooth
          to="/#home"
          className={`hover:border-b-2 ${
            currentHash === "#about"
              ? " border-b-2 border-red-500"
              : "border-transparent"
          }`}
        >
          Home
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="/#services"
          className={`hover:border-b-2 ${
            currentHash === "#about"
              ? " border-b-2 border-red-500"
              : "border-transparent"
          }`}
        >
          Services
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="/#about"
          className={`hover:border-b-2 ${
            currentHash === "#about" ? "border-red-500" : "border-transparent"
          }`}
        >
          About Us
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
