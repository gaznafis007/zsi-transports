'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Reviews = ({reviews}) => {
    return (
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
            delay: 3000,
            // disableOnInteraction: false
        }}
        className="mt-8 mb-12"
      >
        {
            reviews?.map(review =>(
                <SwiperSlide key={review?.id}>
                    <div className="flex flex-col space-y-3 items-center">
                        <div className="bg-slate-900 w-full md:w-1/3 text-yellow-400 p-6">
                            {review?.body}
                        </div>
                        <div className='flex flex-col items-center p-6 pb-8'>
                            <Image className='rounded-full' src={review?.img} alt='user-image' width={150} height={150}/>
                            <h3 className="font-semibold text-slate-900 mt-4 capitalize">{review?.name}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
        </>
    );
};

export default Reviews;