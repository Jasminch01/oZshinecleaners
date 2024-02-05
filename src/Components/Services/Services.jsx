// import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="py-20 flex justify-center items-center flex-col px-5 lg:px-0 max-w-6xl mx-auto"
      id="services"
    >
      <p className="text-center font-bold text-4xl lg:text-5xl xsm:text-2xl">
        Consistent Excellence in Melbourne Cleaning Services
      </p>
      <p className="text-center text-sm lg:text-lg mt-4 text-gray-500">
        We Always Deliver Superior Service for Your Varied Cleaning Requirements
        in Melbourne
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-20 ">
        {/* <Link to={`/deep-cleaning`}> */}
        
        <div
          className={`transform transition-transform  hover:text-primary-c group cursor-pointer `}
        >
          <img
            className="rounded-lg shadow-lg  transition-all object-cover "
            src="https://i.ibb.co/yNtZdWj/e0d63c7b97a8516fb5693135f3708712.jpg"
            alt=""
          />
          <div className="flex justify-center">
            <p
              className={`text-center text-xl font-medium mt-5 underline underline-offset-8 group-hover:underline-offset-[15px] transition-all duration-300 hover:border-primary-c group-hover:text-primary-c: `}
            >
              Deep Cleaning
            </p>
          </div>
        </div>
        {/* </Link> */}
        
        {/* <Link to={`/endOfLease-cleaning`}> */}
        <div
          className={`transform transition-transform  hover:text-primary-c group cursor-pointer `}
        >
          <img
            className="rounded-lg shadow-lg  transition-all object-cover "
            src="https://i.ibb.co/V3fbX2r/cf5ed418a3ea38e294e5a538b107ff85.jpg"
            alt=""
          />
          <div className="flex justify-center">
            <p
              className={`text-center text-xl font-medium mt-5 underline underline-offset-8 group-hover:underline-offset-[15px] transition-all duration-300 hover:border-primary-c group-hover:text-primary-c: `}
            >
              End of Lease Cleaning
            </p>
          </div>
        </div>
        {/* </Link> */}
        {/* <Link to={`/carpet-cleaning`}> */}
        <div
          className={`transform transition-transform  hover:text-primary-c group cursor-pointer `}
        >
          <img
            className="rounded-lg shadow-lg  transition-all object-cover "
            src="https://i.ibb.co/pRSRb74/a03ff70844c50624d360e746938d95b7.jpg"
            alt=""
          />
          <div className="flex justify-center">
            <p
              className={`text-center text-xl font-medium mt-5 underline underline-offset-8 group-hover:underline-offset-[15px] transition-all duration-300 hover:border-primary-c group-hover:text-primary-c: `}
            >
              Carpet Cleaning
            </p>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Services;
