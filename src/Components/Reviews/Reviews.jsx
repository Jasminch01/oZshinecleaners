import { TiStarFullOutline } from "react-icons/ti";
const Reviews = () => {
  return (
    <div className="py-20 px-5 lg:px-0">
      <p className="text-center font-bold text-4xl lg:text-5xl xsm:text-2xl">
        What Our Client {"Say’s"}
      </p>
      <p className="text-center text-sm lg:text-lg mt-4 text-gray-500 mb-20 ">
        This is what clients have been saying after using the great service we
        do for clients
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="space-y-10 border-2 p-10 rounded-lg">
          <img
            src="https://i.ibb.co/S7bmTTJ/307abac1c2751b920c46a4b4fd0910d8.png"
            alt=""
            className="w-10 bg-primary-c rounded-full"
          />
          <p className="text-gray-500">
          The communication with the company was seamless. They were responsive to my inquiries, and scheduling the service was hassle-free. The pricing was transparent, and there were no hidden fees or surprises.
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-10" src="https://lh3.googleusercontent.com/a-/ALV-UjVNR5THHVht9Fpg6Hf4wopCT9qYoz9OMxObk7NUFxSyzg=w60-h60-p-rp-mo-ba3-br100" alt="" />
              <p>Afzal Khattak</p>
            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
            </div>
          </div>
        </div>
        <div className="space-y-10 border-2 p-10 rounded-lg">
          <img
            src="https://i.ibb.co/S7bmTTJ/307abac1c2751b920c46a4b4fd0910d8.png"
            alt=""
            className="w-10 bg-primary-c rounded-full"
          />
           <p className="text-gray-500">
           the team was friendly and approachable, making the entire process a pleasant experience. They were receptive to my specific requests and went above and beyond to ensure I was satisfied with the results.
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-10" src="https://lh3.googleusercontent.com/a-/ALV-UjXzariwZMf6rKl4uyJwv9YPGPCnoGgks3k4gwAP3ggkegY=w60-h60-p-rp-mo-br100" alt="" />
              <p>Muhammad Shoaib</p>
            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
            </div>
          </div>
        </div>
        <div className="space-y-10 border-2 p-10 rounded-lg">
          <img
            src="https://i.ibb.co/S7bmTTJ/307abac1c2751b920c46a4b4fd0910d8.png"
            alt=""
            className="w-10 bg-primary-c rounded-full"
          />
           <p className="text-gray-500">
           Their team is highly professional and efficient. They arrived on time, well-equipped with top-notch cleaning supplies and a friendly attitude. The attention to detail they exhibited was truly remarkable. Every nook and cranny was thoroughly cleaned, leaving my home spotless and refreshed.
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-10" src="https://lh3.googleusercontent.com/a-/ALV-UjVERys01lq1_Yr-23F3whhY5TokegsYPBhGN6Wj4GMpGy8=w60-h60-p-rp-mo-br100" alt="" />
              <p>Muhammad Khan</p>
            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
              <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
