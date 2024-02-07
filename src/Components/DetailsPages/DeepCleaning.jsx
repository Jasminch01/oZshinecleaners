import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Reviews from "../Reviews/Reviews";
import { RiCheckboxCircleFill } from "react-icons/ri";

const DeepCleaning = () => {
  const commonAreas = [
    {
      task: "Clean light switches and doorknobs",
    },
    {
      task: "Clean hallways and staircases",
    },
    {
      task: "Vacuum and mop all floors",
    },
    {
      task: "Dust and wipe down all surfaces",
    },
    {
      task: "Empty bins",
    },
    {
      task: "Make beds upon request",
    },
    {
      task: "Dust furniture",
    },
    {
      task: "Clean window ledges",
    },
    {
      task: "Quick declutter of floors",
    },
    {
      task: "Clean cobwebs",
    },
    {
      task: "Wipe down electronics",
    },
    {
      task: "Clean mirrors",
    },
    {
      task: "Detail skirting boards",
    },
    {
      task: "Detail all doors and door frames",
    },
    {
      task: "Clean ceiling fans and A.C vents",
    },
    {
      task: "Clean inside cabinets, drawers, and shelves",
    },
    {
      task: "Clean inside windows and window tracks",
    },
    {
      task: "Clean both inside and outside of sliding doors, including tracks",
    },
  ];
  const kitchen = [
    {
      task: "Stack and run dishwasher upon request",
    },
    {
      task: "Wipe down the outside of appliances",
    },
    {
      task: "Wet wipe the outside of the fridge",
    },
    {
      task: "Wet wipe the outside of the oven",
    },
    {
      task: "Clean the outside of cabinets and drawers",
    },
    {
      task: "Clean all surfaces",
    },
    {
      task: "Clean the sink",
    },
    {
      task: "Clean the stove",
    },
    {
      task: "Vacuum and mop floors",
    },
    {
      task: "Clean inside the oven",
    },
    {
      task: "Clean the range hood and filters",
    },
    {
      task: "Clean inside cabinets, shelves, and drawers",
    },
  ];
  const bathroom = [
    {
      task: "Clean floors",
    },
    {
      task: "Scrub toilets",
    },
    {
      task: "Clean outside of cabinets and drawers",
    },
    {
      task: "Clean bathtub and shower",
    },
    {
      task: "Clean sink and taps",
    },
    {
      task: "Clean mirrors",
    },
    {
      task: "Clean inside of cabinets and drawers",
    },
  ];
  const laundryArea = [
    {
      task: "Remove all dust and lint",
    },
    {
      task: "Remove dust from skirting boards",
    },
    {
      task: "Clean and dry buff sink/tub and taps",
    },
    {
      task: "Remove all lint from the exhaust fan",
    },
    {
      task: "Clean and wipe down all bench-top surfaces",
    },
  ];
  window.scrollTo(0, 0);
  useEffect(() => {
    // Get a reference to the target section
    const targetSection = document.getElementById('deep-cleaning');

    // Scroll to the target section
    if (targetSection) {
      targetSection.scrollIntoView({
        // behavior: 'smooth',
        block : 'start'
      });
    }
  }, []);

  return (
    <div>
      <Banner title={`Deep Cleaning`} size={`md:text-5xl`}></Banner>
      <div className="bg-slate-800 text-white" id="deep-cleaning">
        <div className="text-center pt-10 px-2 md:px-0">
          <p className="text-3xl md:text-5xl font-bold text-center">
            Our Deep Cleaning Services Include
          </p>
          <p className="md:w-1/2 text-center mx-auto mt-2 text-gray-300">
            We understand the importance of a clean and healthy living
            environment. Our deep cleaning services are designed to provide a
            thorough and comprehensive cleaning experience, ensuring your home
            is free from dirt, allergens, and germs.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 text-gray-300 my-10 gap-5 p-5 md:p-0">
            <div className="border-2 p-5 rounded-lg">
              <div className="flex justify-center">
                <img src="https://i.ibb.co/zr5t5y9/mattress.png" alt="bedroom" className="w-20 h-20" />
              </div>
              <p className="text-xl font-bold mb-5 text-center">
                Bedrooms, Living Rooms and All Common Areas
              </p>{" "}
              <div className="space-y-3">
                {commonAreas.map((item, idx) => {
                  return (
                    <div
                      className="list-none flex md:items-center gap-3"
                      key={idx}
                    >
                      <p>
                        <RiCheckboxCircleFill size={20} />
                      </p>
                      <p>{item.task}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-2 p-5 rounded-lg">
              <div className=" flex justify-center">
                <img src="https://i.ibb.co/8MtWMgv/cooking.png" className="w-20 h-20" alt="" />
              </div>
                <p className="text-xl font-bold mb-5 text-center">Kitchen Area</p>
              <div className="space-y-3">
                {kitchen.map((item, idx) => (
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
              <div className="flex justify-center">
                <img src="https://i.ibb.co/Gv4Th7L/shower-3581467.png" alt="" className="w-20 h-20" />
              </div>
              <p className="text-xl font-bold mb-5 text-center">Bathroom</p>
              <div className="space-y-3">
                {bathroom.map((item, idx) => (
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
              <div className="flex justify-center">
                <img src="https://i.ibb.co/hdmyK6v/shelf-13519278.png" alt="laundry-room" className="w-30 h-20" />
              </div>
              <p className="text-xl font-bold mb-5 text-center">Laundry Room </p>
              <div className="space-y-3">
                {laundryArea.map((item, idx) => (
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

export default DeepCleaning;
