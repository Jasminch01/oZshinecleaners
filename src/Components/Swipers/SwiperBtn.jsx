import { useSwiper } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";

const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between ">
      <div
        onClick={() => swiper.slidePrev()}
        className="bg-slate-400/60 p-3 rounded-full cursor-pointer absolute top-48 n z-10 left-0"
      >
        <GrPrevious className={`text-3xl text-white`} />
      </div>
      <div
        onClick={() => swiper.slideNext()}
        className="bg-slate-400/60 p-3 rounded-full cursor-pointer absolute top-48 n z-10 right-0"
      >
        <GrNext className={`text-3xl text-white`} />
      </div>
    </div>
  );
};

export default SwiperBtn;
