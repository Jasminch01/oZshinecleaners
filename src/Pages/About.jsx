import { HashLink } from "react-router-hash-link";
import Swipers from "../Components/Swipers/Swipers";
const About = () => {
  return (
    <div>
      <div className="bg-slate-800 min-h-screen py-16">
        <div className="pt-28 text-white text-center  md:w-full">
          <h1 className="mb-5 lg:text-6xl leading-[120px] font-bold text-white hidden lg:block">
            Your Ultimate Home Cleaning Partner !
          </h1>

          <h1 className="mb-5 text-5xl font-bold text-white leading-[3.5rem] lg:hidden w-full">
            Your Ultimate Home Cleaning Partner !
          </h1>

          <p className="mb-5 text-gray-300 text-sm lg:text-lg font-medium font-Roboto leading-loose  px-10 md:w-[70%] mx-auto ">
            As your best Melbourne cleaning company, we specialise in a range of
            services designed to cater to your unique needs. From ensuring a
            seamless transition with our meticulous End of Lease cleaning in
            Melbourne to reviving the vibrancy of your carpets through our
            top-notch carpet cleaning services in Melbourne, our commitment to
            excellence is unwavering. With a team of seasoned professionals, we
            bring expertise and reliability to every cleaning endeavour.
          </p>
          <HashLink to="/#form" smooth>
            <button
              className={`px-6 py-3 mt-5 uppercase  bg-primary-c hover:bg-primary-c/80 transition-all text-white rounded-md font-semibold`}
            >
              Get In Touch
            </button>
          </HashLink>

          <div className="mt-14">
            <h2 className="text-3xl font-bold text-primary-c">
              Refreshing Homes With Our Top Cleaning Services
            </h2>
            <div className="bg-gray-500/50 text-gray-100 mt-10 py-10">
              <div
                className=" flex justify-center items-center flex-col px-5 max-w-6xl mx-auto"
                id="bookingsteps"
              >
                <div className="grid md:grid-cols-4 grid-cols-1 gap-20  ">
                  <div
                    className={`flex flex-col justify-start items-center group cursor-pointer `}
                  >
                    <div className="flex justify-center flex-col items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9957/9957478.png"
                        className="w-24"
                        alt=""
                      />
                      <p className={`text-center text-lg font-bold mt-5 `}>
                        End of Lease Cleaning
                      </p>
                      <p className="text-xs leading-loose mt-3  text-gray-400 text-center">
                        Are you moving out? Leave the worry of cleaning behind.
                        Our End of Lease Cleaning Melbourne ensures your old
                        space is not just clean but sparkling, meeting the
                        highest standards for your {`landlord's`} satisfaction.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-start items-center group cursor-pointer `}
                  >
                    <div className="flex justify-center flex-col items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9957/9957478.png"
                        className="w-24"
                        alt=""
                      />
                      <p className={`text-center text-lg font-bold mt-5 `}>
                        Deep Cleaning Solutions
                      </p>
                      <p className="text-xs leading-loose mt-3  text-gray-400 text-center">
                        When your home needs a thorough overhaul, our deep
                        cleaning solutions Melbourne are the answer. We{" "}
                        {`don't`}
                        just clean; we rejuvenate every nook and cranny, leaving
                        your home refreshed and revitalised.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-start items-center group cursor-pointer `}
                  >
                    <div className="flex justify-center flex-col items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9957/9957478.png"
                        className="w-24"
                        alt=""
                      />
                      <p className={`text-center text-lg font-bold mt-5 `}>
                        Carpet Cleaning Services
                      </p>
                      <p className="text-xs leading-loose mt-3  text-gray-400 text-center">
                        Revitalise your carpets with our professional touch. Our
                        carpet cleaning services Melbourne goes beyond surface
                        cleanliness, delving deep to eradicate stubborn stains
                        and allergens, ensuring a healthier living environment
                        for you and your loved ones.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-start items-center group cursor-pointer `}
                  >
                    <div className="flex justify-center flex-col items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9957/9957478.png"
                        className="w-24"
                        alt=""
                      />
                      <p className={`text-center text-lg font-bold mt-5 `}>
                        Regular House Cleaning
                      </p>
                      <p className="text-xs leading-loose mt-3  text-gray-400 text-center">
                        Maintaining a clean home is an ongoing commitment. Our
                        regular house cleaning Melbourne service provides you
                        with consistent, reliable cleaning so you can focus on
                        what matters most to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-slate-800 ">
        <h2 className="text-3xl font-bold text-primary-c text-center mb-5 ">
          Why Do You Need Our Services?
        </h2>
        <p className=" text-gray-300 text-sm lg:text-lg font-medium font-Roboto leading-loose  px-10 md:w-[70%] mx-auto text-center mb-10">
          Our Melbourne residential cleaning services guarantee a meticulous
          approach, emphasising quality in every aspect of our service. Choose
          us for a cleaner, healthier, and more vibrant home. We {`don't`} just
          clean; we transform spaces into havens of hygiene.
        </p>
        <Swipers></Swipers>
      </div>
    </div>
  );
};

export default About;
