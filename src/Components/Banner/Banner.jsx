// import { TiStarFullOutline } from "react-icons/ti";
import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Banner = ({ title, size, }) => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src="https://i.ibb.co/5jKsXYh/banner.jpg"
          className="object-cover h-[900px] w-full bg-banner-bg bg-cover"
        />

        <div className="absolute z-0 inset-0 bg-black opacity-50"></div>

        <div className="absolute z-0 top-[55%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] lg:w-full">
          <p className={`mb-5 ${size} leading-[120px] font-bold text-white hidden md:block w-[80%] mx-auto`}>
            {/* Your Ultimate Home Cleaning Partner */}
            {title}
          </p>

          <h1 className="mb-5 text-5xl xsm:text-4xl font-bold text-white leading-[3.5rem] md:hidden w-full">
            {/* Your Ultimate Home Cleaning Partner */}
            {title}
          </h1>

          {/* <p
            href="tel:+61452679582"
            className=" px-6 py-3 bg-primary-c hover:bg-primary-c/80 mb-5 text-gray-200 text-sm lg:text-lg font-medium font-Roboto leading-relaxed "
          >
            {/* {`We're`} Just A Call Away */}
          {/* <button>Call us +61452679582</button> */}
          {/* </p> */}

          <Link to={`tel:+61452679582`} smooth>
            <button
              className={`md:px-6 md:py-3 px-3 py-2 mt-5 uppercase  bg-primary-c hover:bg-primary-c/80 transition-all text-white rounded-md text-sm md:text-lg font-semibold xsm:text-sm xsm:px-3 md:mr-5`}
            >
              Call Us +61452679582
            </button>
          </Link>

          <HashLink to="/#form" smooth>
            <button
              className={`md:px-6 md:py-3 px-3 py-2 mt-5 uppercase  bg-primary-c hover:bg-primary-c/80 transition-all text-white rounded-md text-sm md:text-lg font-semibold xsm:text-sm xsm:px-3`}
            >
              REQUEST A FREE QUOTE NOW
            </button>
          </HashLink>

          <div>
            <div className="flex space-y-5 md:space-y-0 items-center font-bold bg-slate-400/20 py-6  justify-center flex-col lg:flex-row  gap-2 lg:gap-10 mt-10 xsm:mb-32">
              <div className="flex gap-1 items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1161/1161388.png"
                  className="w-14"
                  alt=""
                />
                <p>Reliable Cleaners</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9464/9464085.png"
                  className="w-14 mx-2"
                  alt=""
                />
                <p>Top-Rated Google Reviews</p>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10809/10809834.png"
                  className="w-14"
                  alt=""
                />
                <p>100% Guaranteed Bond Back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
