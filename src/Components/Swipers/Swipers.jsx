import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import { Pagination, Navigation, FreeMode } from "swiper/modules";

const Swipers = () => {
  // https://i.ibb.co/rcbvCmy/before-6jpg.jpg
  // https://i.ibb.co/6sWswph/before-7.jpg
  // https://i.ibb.co/NK11sKJ/before-8.jpg
  // https://i.ibb.co/Qkdf2bH/before-9.jpg
  // https://i.ibb.co/WG4Wtb9/before-10jpg.jpg
  // https://i.ibb.co/Kj8vWc7/before-11.jpg
  const images = [
    {
      before: "https://i.ibb.co/DRSwVMK/before-1.jpg",
      after: "https://i.ibb.co/YZN9HD6/after-5.jpg",
    },
    {
      before: " https://i.ibb.co/x3m4gdH/before-2.jpg",
      after: "https://i.ibb.co/R4HYnWL/after-8.jpg",
    },
    {
      before: "https://i.ibb.co/jLCNy7Z/before-3.jpg",
      after: "https://i.ibb.co/R3VTT07/after-6.jpg",
    },
    {
      before: "https://i.ibb.co/K73Ltk6/before-4.jpg",
      after: "https://i.ibb.co/2sJSZ3f/after-4.jpg",
    },
    {
      before: "https://i.ibb.co/xY7HPSN/before-5.jpg",
      after:
        "https://i.ibb.co/cFGR0DM/398342061-270756539298381-2602559160872464969-n.jpg",
    },
    {
      before: "https://i.ibb.co/NK11sKJ/before-8.jpg",
      after:
        "https://i.ibb.co/VSJHWKP/398491164-304463795811214-5757020603072236832-n.jpg",
    },
    {
      before: "https://i.ibb.co/WG4Wtb9/before-10jpg.jpg",
      after:
        "https://i.ibb.co/HpTZRXg/after-1.jpg"
    }
  ];
  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 1,
          },
          865: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        allowTouchMove={false}
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <ReactCompareSlider
              className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
              itemOne={<ReactCompareSliderImage src={img.before} />}
              itemTwo={<ReactCompareSliderImage src={img.after} />}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipers;
