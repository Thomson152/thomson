/* eslint-disable react/jsx-no-comment-textnodes */
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import { EffectFade } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        effect={"fade"}
        speed={1000}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="border border-[#646363] cursor-grab lg:px-10  px-5 py-[3rem] rounded-2xl max-w-[45rem]">
            <div className="">
              <h1 className="text-white text-xl">Paublo Dybala </h1>
              <p className="text-[#646363]">
                CEO of <span className="text-green-500">IBM Global </span>{" "}
              </p>
            </div>
            <p className="text-white mt-5 lg:text-2xl text-[20px] lg:leading-10 leading-9">
              "Thomson - A Developer with a creativity, professional and a
              master of code. Much more than i expect. High quality product &
              flexible price. Recommended!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-[#646363] cursor-grab lg:px-10  px-5 py-[3rem] rounded-2xl max-w-[45rem]">
            <div className="">
              <h1 className="text-white text-xl">Paublo Dybala </h1>
              <p className="text-[#646363]">
                CEO of <span className="text-green-500">IBM Global </span>{" "}
              </p>
            </div>
            <p className="text-white mt-5 lg:text-2xl text-[20px] lg:leading-10 leading-9">
              "Thomson - A Developer with a creativity, professional and a
              master of code. Much more than i expect. High quality product &
              flexible price. Recommended!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-[#646363] cursor-grab lg:px-10  px-5 py-[3rem] rounded-2xl max-w-[45rem]">
            <div className="">
              <h1 className="text-white text-xl">Paublo Dybala </h1>
              <p className="text-[#646363]">
                CEO of <span className="text-green-500">IBM Global </span>{" "}
              </p>
            </div>

            <p className="text-white mt-5 lg:text-2xl text-[20px] lg:leading-10 leading-9">
              "Thomson - A Developer with a creativity, professional and a
              master of code. Much more than i expect. High quality product &
              flexible price. Recommended!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
