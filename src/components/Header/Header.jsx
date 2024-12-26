"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          // disableOnInteraction: false
        }}
        className=""
      >
        <SwiperSlide>
          <div className="w-full h-[400px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="header-car"
              className="w-full h-full object-cover"
              width={1080}
              height={720}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="header-car"
              className="w-full h-full object-cover"
              width={1080}
              height={720}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
