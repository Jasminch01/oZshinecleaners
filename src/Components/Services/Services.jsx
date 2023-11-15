import { useState } from "react";

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="my-20" id="services">
      <p className="text-center font-bold text-4xl">
        Always Provide The Best Service
      </p>
      <p className="text-center">
        We Consistently Deliver the Best Service for Your Cleaning Needs in
        Melbourne
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10 ">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`transform transition-transform duration-300 hover:scale-95 hover:text-primary-c $is`}
        >
          <img
            className="rounded-lg shadow-lg"
            src="https://i.ibb.co/yNtZdWj/e0d63c7b97a8516fb5693135f3708712.jpg"
            alt=""
          />
          <div className="flex justify-center">
            <p
              className={`text-center text-lg mt-5 border-b-2 border-black transition-all duration-300 hover:border-primary-c ${
                isHovered ? `border-primary-c` : `border-black`
              }`}
            >
              Deep Cleaning
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`transform transition-transform duration-300 hover:scale-95 hover:text-primary-c $is`}
        >
          <img
            className="rounded-lg shadow-lg"
            src="https://i.ibb.co/V3fbX2r/cf5ed418a3ea38e294e5a538b107ff85.jpg"
            alt=""
          />
          <div className="flex justify-center">
            <p
              className={`text-center text-lg mt-5 border-b-2 border-black transition-all duration-300 hover:border-primary-c ${
                isHovered ? `border-primary-c` : `border-black`
              }`}
            >
              Office Cleaning
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`transform transition-transform duration-300 hover:scale-95 hover:text-primary-c $is`}
        >
          <img
            className="rounded-lg shadow-lg"
            src="https://i.ibb.co/pRSRb74/a03ff70844c50624d360e746938d95b7.jpg"
            alt=""
          />
          <div className="flex justify-center">
            <p
              className={`text-center text-lg mt-5 border-b-2 border-black transition-all duration-300 hover:border-primary-c ${
                isHovered ? `border-primary-c` : `border-black`
              }`}
            >
              Kitchen Cleaning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
