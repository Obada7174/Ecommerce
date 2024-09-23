import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    require("../../images/slider-01.jpg"),
    require("../../images/slider-02.jpg"),
    require("../../images/slider-03.jpg"),
  ];

  return (
    <div
      id="slider"
      className=" h-[530px] slide-swp mySwiper !relative w-[calc(100%-330px)] overflow-hidden "
    >
      <Swiper
        modules={[Pagination, Autoplay, Mousewheel, Keyboard]}
        pagination={{
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        mousewheel={{ invert: true }}
        keyboard={{ enabled: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href="#">
              <img
                className="w-full h-full object-cover object-left-top"
                src={slide}
                alt={`slide_${index + 1}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;
