import { TiStarFullOutline } from "react-icons/ti";

const Banner = () => {
  return (
    <div>
      {/* <div className="hero h-[900px] bg-banner-bg bg-cover object-cover">
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Bringing Radiance to
            </h1>
            <h1 className="mb-5 text-5xl font-bold text-white">Your Space</h1>
            <p className="mb-5 text-white">
              Elevate Your Melbourne Space with Radiance{"Cleaning's"} Expertise
              and Care
            </p>
            <button className="px-3 py-2  bg-primary-c rounded-lg text-white">
              Book Now{" "}
            </button>
          </div>
        </div>
      </div> */}

      <div className="relative overflow-hidden">
        <img
          src="https://i.ibb.co/5jKsXYh/banner.jpg"
          className="object-cover h-[900px] w-full bg-banner-bg bg-cover"
        />

        <div className="absolute z-0 inset-0 bg-black opacity-50"></div>

        <div className="absolute z-0 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] lg:w-full">
          <h1 className="mb-5 lg:text-7xl leading-[80px] font-bold text-white hidden lg:block">
            Bringing Radiance to <br /> Your Space
          </h1>

          <h1 className="mb-5 text-5xl font-bold text-white leading-[3.5rem] lg:hidden w-full">
            Bringing Radiance to Your Space
          </h1>
         
          <p className="mb-5 text-gray-200 text-sm lg:text-lg font-medium font-Roboto leading-relaxed px-10">
            Elevate Your Melbourne Space with Radiance {"Cleaning's"} Expertise
            and Care
          </p>
          <button
             
              className={`px-6 py-3 mt-5 uppercase  bg-primary-c hover:bg-primary-c/80 transition-all text-white rounded-md font-semibold`}
            >
              Get a Free Quote
            </button>

            <div>
            <div className="flex space-y-5 md:space-y-0 items-center lg:items-start justify-center flex-col lg:flex-row  gap-2 lg:gap-10 mt-10">
            <div className="flex gap-1 items-center justify-center">
              <img src="/verify.svg" alt="" />
              <p>Trusted Cleaners</p>
            </div>
            <div className="">
              <p className="text-center font-bold">5 Star Rated Service</p>
              <div className="flex justify-center ">
                <div className="flex items-center">
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <img src="/verify.svg" alt="" />
              <p>Full Satisfaction</p>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
