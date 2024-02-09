import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import { Pagination, Navigation, FreeMode } from "swiper/modules";
import SwiperBtn from "./SwiperBtn";
import { Link } from "react-router-dom";

const Swipers = () => {
  const images = [
    {
      before: " https://i.ibb.co/x3m4gdH/before-2.jpg",
      after: "https://i.ibb.co/R4HYnWL/after-8.jpg",
    },
    {
      before: "https://i.ibb.co/Qkdf2bH/before-9.jpg",
      after: "https://i.ibb.co/jzNC24C/after-7.jpg",
    },
    // {
    //   before: "https://i.ibb.co/jLCNy7Z/before-3.jpg",
    //   after: "https://i.ibb.co/2sJSZ3f/after-4.jpg",
    // },
    {
      before: "https://i.ibb.co/xY7HPSN/before-5.jpg",
      after:
        "https://i.ibb.co/cFGR0DM/398342061-270756539298381-2602559160872464969-n.jpg",
    },
    {
      before: "https://i.ibb.co/WG4Wtb9/before-10jpg.jpg",
      after: "https://i.ibb.co/HpTZRXg/after-1.jpg",
    },
    {
      before: "https://i.ibb.co/4p0TBgH/before12.jpg",
      after: "https://i.ibb.co/kDNWdkY/after12.jpg",
    },
    {
      before: "https://i.ibb.co/mS0X4T8/before13.jpg",
      after: "https://i.ibb.co/f43h2Fq/after13.jpg",
    },
    {
      before: "https://i.ibb.co/DRSwVMK/before-1.jpg",
      after: "https://i.ibb.co/YZN9HD6/after-5.jpg",
    },
  ];
  return (
    <div className="relative">
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
          // navigation={true}
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
          <SwiperBtn></SwiperBtn>
          <div className="h-10"></div>
        </Swiper>
        <div className="text-center">
          <Link to={`/gallery`}>
            <button className="text-center py-2 px-3 bg-primary-c rounded-full text-white">
              Explore Sparkle Gallery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Swipers;
