import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { useEffect, useState } from "react";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

import { Pagination, Autoplay, FreeMode } from "swiper/modules";

const Swipers = () => {
  return (
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
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/DVTx5TD/385533452-223844757251186-113632624979961177-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/cFGR0DM/398342061-270756539298381-2602559160872464969-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/DYS5qqc/373459317-680199404215787-1398689710154093893-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/hLCb8mm/385520476-666273525313135-6907312204029216496-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/sg3pjzr/370229529-1047395529627426-3146268392045766140-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/G2j3N32/371538856-258782526779209-6395254326969581677-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/wBmHPjj/385530684-916245159552538-6028996942116147883-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/DVTx5TD/385533452-223844757251186-113632624979961177-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/q7MCgR8/394707459-717568363574111-8417360135735479615-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/tXNNmcy/396709205-751509833455149-581609659435599025-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="bg-cover object-cover h-[435px] w-full rounded-lg shadow-lg"
            src="https://i.ibb.co/cbvhWS0/396760447-2293119544231333-4776704445812488759-n.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
