import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { TiStarFullOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReviewSwiper = ({ reviews }) => {
  const [showFullContentMap, setShowFullContentMap] = useState({});

  const handleToggleContent = (reviewId) => {
    setShowFullContentMap((prevShowFullContentMap) => {
      return {
        ...prevShowFullContentMap,
        [reviewId]: !prevShowFullContentMap[reviewId],
      };
    });
  };

  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: 1,
          },
          400: {
            slidesPerView: 1,
            grid: 1,
          },
          639: {
            slidesPerView: 1,
            grid: 1,
          },
          865: {
            slidesPerView: 2,
            grid: 2,
          },
          1000: {
            slidesPerView: 3,
            grid: 3,
          },
          1500: {
            slidesPerView: 3,
            grid: 3,
          },
          1700: {
            slidesPerView: 3,
            grid: 3,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        allowTouchMove={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        <div>
          {reviews.map((review) => {
            const truncatedReview =
              review.review.length === 118
                ? review.review
                : review.review.slice(0, 119);

            const showFullContent = showFullContentMap[review.id];

            return (
              <SwiperSlide key={review.clientName}>
                <div className="space-y-10 border-2 p-10 rounded-lg transition-all">
                  <div>
                    <img
                      src="https://i.ibb.co/S7bmTTJ/307abac1c2751b920c46a4b4fd0910d8.png"
                      alt=""
                      className="w-10 bg-primary-c rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-gray-500">
                      {showFullContent
                        ? review.review
                        : truncatedReview + "..."}
                    </p>
                    {review.review.length > 118 && (
                      <button
                        onClick={() => handleToggleContent(review.id)}
                        className="font-bold"
                      >
                        {showFullContent ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <img
                        className="rounded-full w-10"
                        src={review.clientImg}
                        alt=""
                      />
                      <p>{review.clientName}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Link
                          to={`https://www.google.com/search?q=oz%20shine%20cleaners&rlz=1C1ONGR_enBD1089BD1089&oq=oz%20shi&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIMCAEQABhDGIAEGIoFMgYIAhBFGDkyCAgDEEUYJxg7MgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGDwyBggHEEUYPNIBCDEzMjRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&fbclid=IwAR1X2na6Y7FPwO0dGxYDSXdbp0ic6xndKKxw191JH6vIWjUfwGo_eu8qvg8#lrd=0x6ad64500046398b1:0x270b937`}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                            alt=""
                            className="w-5 h-5"
                          />
                        </Link>
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
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

ReviewSwiper.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewSwiper;
