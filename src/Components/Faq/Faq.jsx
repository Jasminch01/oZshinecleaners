import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "How do I request a cleaning service?",
      content: `You can easily request a service by contacting us through our
      website, phone, or email. Our friendly team will guide you
      through the process and schedule a convenient time for your
      cleaning.`,
    },
    {
      title: "How do you ensure quality and satisfaction?",
      content: `We prioritize quality and satisfaction by employing experienced
      professionals, using top-notch cleaning products, and conducting
      thorough inspections. If you ever have concerns, we're here to
      address them promptly.`,
    },
    {
      title: "Can I customize my cleaning service?",
      content: `Yes, you can customize your cleaning service according to your
      specific needs. Contact us, and our team will work with you to
      tailor our services to meet your requirements.`,
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div id="faq" className="py-20 px-5 min-h-[80vh] md:px-0 lg:px-0">
      <div className="mb-20">
        <p className="text-center font-bold text-4xl lg:text-5xl">FAQ</p>
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
              <h2 className="text-lg font-semibold">{section.title}</h2>
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
