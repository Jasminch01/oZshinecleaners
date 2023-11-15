const Faq = () => {
  return (
    <div className=" py-20 space-y-5">
        <p className="text-5xl text-center font-bold">FAQ</p>
        <p className="text-center text-sm">Learn More About Our Expert Cleaning Solutions</p>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-lg font-medium">
          How do I request a cleaning service?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            You can easily request a service by contacting us through our
            website, phone, or email. Our friendly team will guide you through
            the process and schedule a convenient time for your cleaning.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-medium">
          Can I customize my cleaning service?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            You can easily request a service by contacting us through our
            website, phone, or email. Our friendly team will guide you through
            the process and schedule a convenient time for your cleaning.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-medium">
          How do you ensure quality and satisfaction?
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            You can easily request a service by contacting us through our
            website, phone, or email. Our friendly team will guide you through
            the process and schedule a convenient time for your cleaning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
