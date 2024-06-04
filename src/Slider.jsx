import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
} from "./images";

const Slider = () => {
  const [items] = useState([
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
  ]);

  return (
    <div className="lg:w-3/4 p-6 bg-gray-100 m-auto">
      <div className="flex items-center justify-center text-xl text-gray-600 mb-6 font-medium">
        {"Slider Title"}
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide>
            <div className="w-[150px] h-[150px] bg-cover bg-white rounded-lg shadow-lg px-4 flex items-center justify-center text-gray-800 border border-gray-100">
              <img
                key={item}
                src={item}
                className="w-full h-auto"
                alt="slide"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
