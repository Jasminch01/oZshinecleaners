import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const links = (
    <>
      <li>
        <HashLink smooth to="/#">
          Home
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#service">
          Services
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#about">
          About Us
        </HashLink>
      </li>
    </>
  );
  return (
    <div
      className={
        scrolling
          ? "navbar md:p-10 bg-secendary-c fixed top-0  w-full mx-auto"
          : "md:p-10 fixed top-0 w-full mx-auto navbar transition duration-300 ease-in-out"
      }
    >
      <div className="lg:mx-auto md:w-[80%]">
        <div className={"navbar lg:py-4 fixed top-0 md:w-[80%] mx-auto"}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiMenu
                  className={
                    scrolling ? "text-xl text-black" : "text-xl text-white"
                  }
                ></HiMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
                <li>
                  <Link className=" bg-[#69BB48] text-white">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <a className="md:text-3xl text-lime-500 font-bold">Cleaners</a>
          </div>
          <div
            className={`navbar-center hidden lg:flex ${
              scrolling ? `text-black` : ` text-white`
            }`}
          >
            <ul className="menu menu-horizontal">{links}</ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <Link className="px-3 py-2 rounded-lg bg-primary-c text-white">Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
