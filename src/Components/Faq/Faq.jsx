import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title:
        "How can I get a free quote for Melbourne cleaning services with OzShine Cleaners Melbourne?",
      content: `Request a free quote effortlessly through our user-friendly online form, ensuring a detailed estimate tailored to your specific cleaning requirements.`,
    },
    {
      title:
        "Can I schedule regular house cleaning services with OzShine Cleaners Melbourne?",
      content: `Absolutely! Customize your cleaning needs with our dedicated team, offering routine house cleaning, deep cleaning, and specialized services.`,
    },
    {
      title: "What sets OzShine Cleaners Melbourne apart as a leading Melbourne cleaning company?      ",
      content: `Radiance Cleaning stands out with reliable professionals, consistent excellence, excellent reviews, and a bond back guarantee—your trusted choice in Melbourne.`,
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div id="faq" className="py-20 px-5 min-h-[80vh] md:px-0 lg:px-0">
      <div className="mb-20">
        <p className="text-center font-bold text-4xl lg:text-5xl xsm:text-2xl">FAQ</p>
        <p className="text-center mt-4 text-gray-500 text-sm lg:text-lg">
          Learn More About Our Expert Cleaning Solutions{" "}
        </p>
      </div>
      <div className="w-full">
        {accordionData.map((section, index) => (
          <div key={index} className="mb-4 space-y-3 ">
            <div
              className={`flex justify-between bg-white rounded-xl p-4 cursor-pointer w-full transition-transform duration-300 ease-in-out${
                openIndex === index ? "bg-gray-200" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-lg font-semibold xsm:text-base">{section.title}</h2>
              {openIndex === index ? (
                <IoMdArrowDropup className="text-lg" />
              ) : (
                <IoMdArrowDropdown className="text-lg" />
              )}
            </div>
            {openIndex === index && (
              <div className="p-4  w-full bg-white rounded-xl transition-transform duration-500 ease-in-out">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
