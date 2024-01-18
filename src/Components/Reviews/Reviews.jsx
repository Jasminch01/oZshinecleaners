import ReviewSwiper from "../Swipers/ReviewSwiper";
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
      <ReviewSwiper/>
    </div>
  );
};

export default Reviews;
