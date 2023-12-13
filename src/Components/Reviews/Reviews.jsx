import { TiStarFullOutline } from "react-icons/ti";
const Reviews = () => {
  return (
    <div className="py-20 px-5 lg:px-0">
      <p className="text-center font-bold text-4xl lg:text-5xl">
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
            OzShine Cleaners did an amazing job! Our home looks super clean now.
            They were really nice and careful with everything. I totally
            recommend them!
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-10" src="/client/1.jpeg" alt="" />
              <p>Wyat Morgan</p>
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
            Wow, OzShine Cleaners is awesome! They made our place so clean and
            shiny. They came on time, were really friendly, and did a great job.
            So happy with them!
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-10" src="/client/2.jpeg" alt="" />
              <p>Mia Rodriguez</p>
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
            OzShine Cleaners is the best! Our office is super clean now. They
            worked really hard, and everyone is happy with how nice it looks.
            They're really good at cleaning!
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-10" src="/client/3.jpeg" alt="" />
              <p>Emma Thompson</p>
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
