import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewSwiper = () => {
  const reviews = [
    {
      clientName: "Afzal Khattak",
      clientImg:
        "https://lh3.googleusercontent.com/a-/ALV-UjVNR5THHVht9Fpg6Hf4wopCT9qYoz9OMxObk7NUFxSyzg=w60-h60-p-rp-mo-ba3-br100",
      review: ` The communication with the company was seamless. They were responsive to my inquiries, and scheduling the service was hassle-free. The pricing was transparent, and there were no hidden fees or surprises.`,
    },
    {
      clientName: "Muhammad Shoaib",
      clientImg:
        "https://lh3.googleusercontent.com/a-/ALV-UjXzariwZMf6rKl4uyJwv9YPGPCnoGgks3k4gwAP3ggkegY=w60-h60-p-rp-mo-br100",
      review: `the team was friendly and approachable, making the entire process a pleasant experience. They were receptive to my specific requests and went above and beyond to ensure I was satisfied with the results.`,
    },
    {
      clientName: "Peter Hanna",
      clientImg:
        "https://lh3.googleusercontent.com/a/ACg8ocJOrlIlBwZUHVpkv5dOv1memp8WoETCGR22bfaMl9Nv=w60-h60-p-rp-mo-br100",
      review: `Outstanding end-of-lease cleaning! Punctual, meticulous, and friendly team. Impressed by their attention to detail. Highly recommend for a stress-free move-out experience! ⭐️⭐️⭐️⭐️⭐️`,
    },
    {
      clientName: "Sarah khattak",
      clientImg:
        "https://lh3.googleusercontent.com/a/ACg8ocJEHolaJzCWxu5KEWcftYoVCOPIzJ4J2ifNrn5IFziM=w60-h60-p-rp-mo-br100",
      review: `I recently hired Oz Shine Cleaners for a deep cleaning service, and I am absolutely thrilled with the results. From the initial contact to the completion of the job, the entire experience was seamless and professional.`,
    },
    {
      clientName: "Maryam Fayyaz",
      clientImg:
        "https://lh3.googleusercontent.com/a/ACg8ocKL5jCbTsb1n8P0FA5qG-iYZqXUw3Ex53vUo5mtnNqZ=w60-h60-p-rp-mo-br100",
      review: `I recently had the pleasure of using their services, and I must say, I am thoroughly impressed. From start to finish, the experience was top-notch.`,
    },
    {
      clientName: "Dawood Haider",
      clientImg:
        "https://lh3.googleusercontent.com/a-/ALV-UjVTKD4SpXnzFFtwT70lbKeS2SSuBTPsLicYQ61kaV_eSQ=w60-h60-p-rp-mo-br100",
      review: `I highly recommend Oz Shine Cleaners to anyone in need of a reliable and thorough cleaning service. They are now my go-to cleaning company, and I look forward to scheduling regular cleanings with them in the future. Thank you, Oz Shine Cleaners, for making my home shine!.`,
    },
    {
      clientName: "Ahmad Jutt",
      clientImg: 'https://lh3.googleusercontent.com/a/ACg8ocIGjNcekGXnq_VHXau26Hu8G2kzE4vT6Jnd3Qz7w51w=w60-h60-p-rp-mo-br100',
      review: `I recently used Oz Shine Cleaners for their services, and I'm extremely satisfied with the results. The team was punctual, professional, and thorough in their cleaning. My space now looks impeccable, and they exceeded my expectations. I highly recommend Oz Shine Cleaners for their top-notch service and attention to detail.`,
    },
    {
      clientName: "Fayyaz ur Rehman",
      clientImg: 'https://lh3.googleusercontent.com/a/ACg8ocKma5p2Uyvnt_WEbmrp1OdHU59_W8DEYALcfDNgm2Dp=w60-h60-p-rp-mo-br100',
      review: `Communication with the team was seamless. They were responsive to my inquiries, provided a transparent quote, and exceeded my expectations in terms of efficiency and thoroughness. It's evident that customer satisfaction is a priority for them.`,
    },
  ];
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
        allowTouchMove={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review.clientName}>
              <div className="space-y-10 border-2 p-10 rounded-lg">
                <img
                  src="https://i.ibb.co/S7bmTTJ/307abac1c2751b920c46a4b4fd0910d8.png"
                  alt=""
                  className="w-10 bg-primary-c rounded-full"
                />
                <p className="text-gray-500">
                  {review.review.length === 118
                    ? review.review
                    : review.review.slice(0, 119) + '...'}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <img className="rounded-full w-10" src={review.clientImg} alt="" />
                    <p>{review.clientName}</p>
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
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
