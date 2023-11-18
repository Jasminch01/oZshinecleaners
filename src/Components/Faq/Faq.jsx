import React, { useState } from "react";

const Faq = () => {
  const [selectedOption, setSelectedOption] = useState("my-accordion-3-1");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div id="faq" className="py-20  h-[80vh] flex justify-center items-center px-5 lg:px-0">
      <div >
        <p className="text-center font-bold text-4xl lg:text-5xl">FAQ</p>
        <p className="text-center mt-4 text-gray-500 text-sm lg:text-lg" >
          Learn More About Our Expert Cleaning Solutions
        </p>
        <div className="mt-20 space-y-5">
          <div className="collapse collapse-plus bg-white ">
            <input
              type="radio"
              id="my-accordion-3-1"
              name="my-accordion-3"
              checked={selectedOption === "my-accordion-3-1"}
              onChange={() => handleOptionChange("my-accordion-3-1")}
            />
            <div className="collapse-title text-lg font-bold">
              How do I request a cleaning service?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                You can easily request a service by contacting us through our
                website, phone, or email. Our friendly team will guide you
                through the process and schedule a convenient time for your
                cleaning.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white">
            <input
              type="radio"
              id="my-accordion-3-2"
              name="my-accordion-3"
              checked={selectedOption === "my-accordion-3-2"}
              onChange={() => handleOptionChange("my-accordion-3-2")}
            />
            <div className="collapse-title text-lg font-bold">
              Can I customize my cleaning service?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Yes, you can customize your cleaning service according to your
                specific needs. Contact us, and our team will work with you to
                tailor our services to meet your requirements.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white">
            <input
              type="radio"
              id="my-accordion-3-3"
              name="my-accordion-3"
              checked={selectedOption === "my-accordion-3-3"}
              onChange={() => handleOptionChange("my-accordion-3-3")}
            />
            <div className="collapse-title text-lg font-bold">
              How do you ensure quality and satisfaction?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                We prioritize quality and satisfaction by employing experienced
                professionals, using top-notch cleaning products, and conducting
                thorough inspections. If you ever have concerns, we're here to
                address them promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
