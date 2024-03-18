import { useEffect } from "react";
import Banner from "./Banner/Banner";
import Reviews from "./Reviews/Reviews";

const Gallery = () => {
  const imgs = [
    {
      after: "https://i.ibb.co/NrTwDTy/after-2.jpg",
    },
    {
      after:
        "https://i.ibb.co/5xj7s3t/371503265-332121889511832-6774424678126581913-n.jpg",
    },
    {
      after:
        "https://i.ibb.co/5xj7s3t/371503265-332121889511832-6774424678126581913-n.jpg",
    },
    {
      after:
        "https://i.ibb.co/5xj7s3t/371503265-332121889511832-6774424678126581913-n.jpg",
    },
    {
      after:
        "https://i.ibb.co/5hM2Fwb/371523325-887028876413032-5383312431539580248-n.jpg",
    },
    {
      after:
        "https://i.ibb.co/YPBzK23/385520751-5150415578415827-3262978571066248626-n.jpg",
    },
    {
      after:
        "https://i.ibb.co/pvqCqxH/398296636-727015155428244-483091416719634879-n.jpg",
    },
    {
      after:
        "https://i.ibb.co/zRrRY4q/396757689-1065408811295289-3446705891613813324-n.jpg",
    },
    {
      after:
        "https://i.ibb.co/f2n6CGQ/398317713-906494794140088-1790083066836440075-n.jpg",
    },
    {
      after: "https://i.ibb.co/R4HYnWL/after-8.jpg",
    },
    {
      after:
        "https://i.ibb.co/zFKgxyW/398353964-279518981739955-905915658297598331-n.jpg",
    },
    {
      after: "https://i.ibb.co/Jsz7JhS/after-3.jpg",
    },
    {
      after:
        "https://i.ibb.co/w4dvsNL/398336393-975943313506047-7546500795428289705-n.jpg",
    },
    {
      after: "https://i.ibb.co/kDNWdkY/after12.jpg",
    },
    {
      after:
        "https://i.ibb.co/nrs6SrY/398384669-704701004940095-9178911853678328998-n.jpg",
    },
    {
      after: "https://i.ibb.co/R3VTT07/after-6.jpg",
    },
    {
      after:
        "https://i.ibb.co/k3N1CC2/398404183-2066779953705090-451765971204980125-n.jpg",
    },
    {
      after: "https://i.ibb.co/55vpQp2/after-9.jpg",
    },
    {
      after:
        "https://i.ibb.co/xzN3ZCw/371485131-1389681788289230-4331621927315083729-n.jpg",
    },
    {
      after: "https://i.ibb.co/HpTZRXg/after-1.jpg",
    },
    {
      after:
        "https://i.ibb.co/ygMNG4F/370196122-7707171522633553-5200323163696105658-n-1.jpg",
    },
  ];

  window.scrollTo(0, 0);
  // useEffect(() => {
  //   const targetSection = document.getElementById("gallery");
  //   if (targetSection) {
  //     targetSection.scrollIntoView({
  //       block: "start",
  //       // behavior: "smooth",
  //     });
  //   }
  // }, []);

  return (
    <div className="bg-secendary-c h-full">
      <Banner
        title={` A Showcase of Sparkling Cleanliness`}
        size={`md:text-6xl`}
      />
      <div className="mt-10 max-w-6xl mx-auto px-5 md:px-0" id="gallery">
        <div className="columns-1 gap-5 lg:gap-3 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {imgs.map((img, idx) => (
            <img className="rounded" key={idx} src={img.after} alt="cleaning-image"></img>
          ))}
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Gallery;
