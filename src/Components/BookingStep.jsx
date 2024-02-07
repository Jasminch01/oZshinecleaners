import Reliablity from "./Reliablity";

const BookingStep = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      <div
        className=" flex justify-center items-center flex-col px-5 lg:px-0  py-20 max-w-6xl mx-auto"
        id="bookingsteps"
      >
        <p className="text-center font-bold text-4xl lg:text-5xl xsm:text-2xl">
          Streamlined 3-Step House Cleaning Melbourne Process
        </p>
        <p className="text-center text-sm lg:text-lg mt-4 text-gray-300">
          Discover the Effortless Process of our Cleaning Service with just
          three simple steps:
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20  mt-20">
          <div
            className={`flex flex-col justify-center items-center group cursor-pointer `}
          >
            <img
              className=" w-24 text-center   "
              src="https://cdn-icons-png.flaticon.com/128/3815/3815596.png"
              alt=""
            />
            <div className="flex justify-center flex-col">
              <p
                className={`text-center text-2xl font-bold mt-5  xsm:text-2xl`}
              >
                1. Calculate Cost for Free
              </p>
              <p className="text-base mt-3  text-gray-400 text-center">
                Use our user-friendly online form to instantly calculate the
                cost of your cleaning needs.
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center group cursor-pointer  `}
          >
            <img
              className=" w-24 text-center   "
              src="https://cdn-icons-png.flaticon.com/128/1000/1000389.png"
              alt=""
            />
            <div className="flex justify-center flex-col">
              <p
                className={`text-center text-2xl font-bold mt-5 xsm:text-2xl `}
              >
                2. Call for Booking
              </p>
              <p className="text-base mt-3  text-gray-400 text-center">
                Ready to book? Our dedicated team is here to assist you in your
                cleaning appointment.
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center group cursor-pointer `}
          >
            <img
              className=" w-24 text-center   "
              src="https://cdn-icons-png.flaticon.com/128/2954/2954872.png"
              alt=""
            />
            <div className="flex justify-center flex-col">
              <p
                className={`text-center text-2xl font-bold mt-5 xsm:text-2xl `}
              >
                3. We Come and Clean
              </p>
              <p className="text-base mt-3  text-gray-400 text-center">
                Our experienced and reliable cleaning professionals arrive at
                your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
     <Reliablity></Reliablity>
    </div>
  );
};

export default BookingStep;
