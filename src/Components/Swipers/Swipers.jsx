import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { useEffect, useState } from "react";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

import { Pagination, FreeMode } from "swiper/modules";

const Swipers = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <img className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/DVTx5TD/385533452-223844757251186-113632624979961177-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/cFGR0DM/398342061-270756539298381-2602559160872464969-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/DYS5qqc/373459317-680199404215787-1398689710154093893-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/DVTx5TD/385533452-223844757251186-113632624979961177-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/cFGR0DM/398342061-270756539298381-2602559160872464969-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/DYS5qqc/373459317-680199404215787-1398689710154093893-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
