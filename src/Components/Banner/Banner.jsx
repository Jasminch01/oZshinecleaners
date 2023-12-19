// import { TiStarFullOutline } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src="https://i.ibb.co/5jKsXYh/banner.jpg"
          className="object-cover h-[900px] w-full bg-banner-bg bg-cover"
        />

        <div className="absolute z-0 inset-0 bg-black opacity-50"></div>

        <div className="absolute z-0 top-[55%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] lg:w-full">
          <h1 className="mb-5 lg:text-6xl leading-[120px] font-bold text-white hidden lg:block w-[80%] mx-auto">
            Your Ultimate Home Cleaning Partner
          </h1>

          <h1 className="mb-5 text-5xl font-bold text-white leading-[3.5rem] lg:hidden w-full">
            Your Ultimate Home Cleaning Partner
          </h1>

          <p className="mb-5 text-gray-200 text-sm lg:text-lg font-medium font-Roboto leading-relaxed px-10">
            {`We're`} Just A Call Away
          </p>

          <HashLink to="#form" smooth>
            <button
              className={`px-6 py-3 mt-5 uppercase  bg-primary-c hover:bg-primary-c/80 transition-all text-white rounded-md font-semibold`}
            >
              REQUEST A FREE QUOTE NOW
            </button>
          </HashLink>

          <div>
            <div className="flex space-y-5 md:space-y-0 items-center font-bold bg-slate-400/20 py-6  justify-center flex-col lg:flex-row  gap-2 lg:gap-10 mt-10">
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
                <p>Top-Rated Reviews</p>
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
