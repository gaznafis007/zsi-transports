import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const VehicleSlider = ({ images }) => {
  return (
    <>
      <Swiper slidesPerView={2} spaceBetween={30} loop={true} className="">
        {images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full">
            <Image
              alt="vehicles"
              className="w-full h-full object-cover"
              width={1080}
              height={720}
              src={image}
            /></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VehicleSlider;
