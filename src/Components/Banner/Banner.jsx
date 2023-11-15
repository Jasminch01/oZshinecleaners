const Banner = () => {
  return (
    <div>
      {/* <div className="hero h-[900px] bg-banner-bg bg-cover object-cover">
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Bringing Radiance to
            </h1>
            <h1 className="mb-5 text-5xl font-bold text-white">Your Space</h1>
            <p className="mb-5 text-white">
              Elevate Your Melbourne Space with Radiance{"Cleaning's"} Expertise
              and Care
            </p>
            <button className="px-3 py-2  bg-primary-c rounded-lg text-white">
              Book Now{" "}
            </button>
          </div>
        </div>
      </div> */}

      <div className="relative">
        <img
          src="https://i.ibb.co/dW3ZDMH/Industries-bg.jpg"
          className="object-cover h-[900px] w-full bg-banner-bg bg-cover"
        />

        <div className="absolute z-0 inset-0 bg-black opacity-50"></div>

        <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="mb-5 text-6xl font-bold text-white">
            Bringing Radiance to
          </h1>
          <h1 className="mb-5 text-5xl font-bold text-white">Your Space</h1>
          <p className="mb-5 text-white">
            Elevate Your Melbourne Space with Radiance{"Cleaning's"} Expertise
            and Care
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
