"use client";
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

interface Props {
  imgs: string[];
  onDelete?: (index: number) => void;
  autoplay?: { delay: number };
}
export const Slider = ({ imgs, onDelete, autoplay }: Props) => {
  return (
    <Swiper
      spaceBetween={10}
      modules={[Autoplay]}
      className="bg-pink-100 rounded-[44px] h-[500px] w-full"
      lazyPreloadPrevNext={1}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{ ...autoplay, pauseOnMouseEnter: true }}
      speed={700}
      grabCursor
      onSlideChange={(swiper) => isNaN(swiper.realIndex) && swiper.slideTo(0)}
    >
      {imgs.map((img, index) => (
        <SwiperSlide key={img}>
          <Image
            className="rounded-[44px]"
            src={img}
            alt=""
            fill
            fetchPriority="high"
            priority
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />

          {onDelete && (
            <button
              type="submit"
              className="text-red-500 hover:text-red-600 absolute top-4 right-4 z-10"
              onClick={() => onDelete(index)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
            </button>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
