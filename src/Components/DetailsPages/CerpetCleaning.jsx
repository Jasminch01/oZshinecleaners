import { RiCheckboxCircleFill } from "react-icons/ri";
import Faq from "../Faq/Faq";
import Reviews from "../Reviews/Reviews";
import Banner from "../Banner/Banner";
import { useEffect } from "react";

const CerpetCleaning = () => {
  const carpet = [
    {
      task: "Advanced techniques to remove deep-seated stains and odors from carpets",
    },
    {
      task: "Thorough vacuuming to remove surface dirt and debris",
    },
    {
      task: "Pre-treatment of stains and high-traffic areas for maximum effectiveness",
    },
    {
      task: "Hot water extraction method to deep clean and sanitize carpets",
    },
    {
      task: "Eco-friendly cleaning products safe for your family and pets",
    },
    {
      task: "High-pressure steam cleaning for a thorough and efficient deep clean",
    },
  ];
  const carpet1 = [
    {
      task: "Fast drying times to minimize disruption to your routine",
    },
    {
      task: "Revitalization of carpets, restoring their original beauty and freshness",
    },
    {
      task: "Professional advice on carpet maintenance to prolong their lifespan. add more items",
    },
    {
      task: "Application of carpet protectant to guard against future stains",
    },
    {
      task: "Deodorization to eliminate unpleasant odors and leave carpets smelling fresh",
    },
    {
      task: "Spot treatment for specific stains, ensuring comprehensive cleaning",
    },
    {
      task: "Pet stain and odor removal for a clean and hygienic environment",
    },
    {
      task: "Inspection and evaluation of carpet condition to determine the most suitable cleaning approach",
    },
    {
      task: "Follow-up maintenance services to keep your carpets looking their best",
    },
  ];

  window.scrollTo(0, 0)
  // useEffect(() => {
  //   // Get a reference to the target section
  //   const targetSection = document.getElementById('carpet-cleaning');

  //   // Scroll to the target section
  //   if (targetSection) {
  //     targetSection.scrollIntoView({
  //       // behavior: 'smooth',
  //       block : 'start'
  //     });
  //   }
  // }, []);

  return (
    <div>
      <Banner title={`Carpet Cleaning`} size={`md:text-5xl`}></Banner>
      <div className="bg-slate-800 text-white" id="carpet-cleaning">
        <div className="text-center md:pt-10 px-2 md:px-0">
          <p className="text-3xl md:text-5xl font-bold text-center">
            Our Carpet Cleaning Services Include
          </p>
          <p className="md:w-1/2 text-center mx-auto mt-2 text-gray-300">
            We understand the importance of a clean and healthy living
            environment. Our carpet cleaning services are designed to provide a
            thorough and comprehensive cleaning experience, ensuring your home
            is free from dirt, allergens, and germs.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 text-gray-300 my-10 gap-5 p-5 md:p-0">
            <div className="border-2 p-5 rounded-lg">
              <div className=" flex justify-center">
                <img
                  src="https://i.ibb.co/nQxmSqd/boy-13264896.png"
                  className="w-20 h-20"
                  alt=""
                />
              </div>
              <p className="text-xl font-bold mb-5 text-center">
                Professional Carpet Care Solutions
              </p>
              <div className="space-y-3">
                {carpet1.map((item, idx) => (
                  <div
                    className="list-none flex md:items-center gap-3"
                    key={idx}
                  >
                    <p>
                      <RiCheckboxCircleFill size={20} />
                    </p>
                    <p>{item.task}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 p-5 rounded-lg">
              <div className=" flex justify-center">
                <img
                  src="https://i.ibb.co/tCcYvKm/carpet-cleaner-3343526.png"
                  className="w-20 h-20"
                  alt=""
                />
              </div>
              <p className="text-xl font-bold mb-5 text-center">
                Comprehensive Carpet Cleaning
              </p>
              <div className="space-y-3">
                {carpet.map((item, idx) => (
                  <div
                    className="list-none flex md:items-center gap-3"
                    key={idx}
                  >
                    <p>
                      <RiCheckboxCircleFill size={20} />
                    </p>
                    <p>{item.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Reviews textColor={`text-gray-300`} />
          <Faq textColor={`text-black`} />
        </div>
      </div>
    </div>
  );
};

export default CerpetCleaning;
