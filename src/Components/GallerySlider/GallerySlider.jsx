import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../GallerySlider/GallerySlider.css";
import { useNavigate } from "react-router-dom";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../GallerySlider/img_1.jpg";
import slide_image_2 from "../../Assets/Photos/background.png";
import slide_image_3 from "../../Assets/Photos/background1.png";
import slide_image_4 from "../../Assets/Photos/images.jpg";
import slide_image_5 from "../../Assets/Photos/photo1.jpg";

import { SliderArrowLeft, SliderArrowRight } from "../../Assets/Icons";

const GallerySlider = ({ cardList }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {cardList.map((post) => {
          const onCardClick = () => {
            navigate(`/gallery/albums/${post.id}/photos`);
          };
          return (
            <SwiperSlide key={post.id} onClick={onCardClick}>
              <img src={post.albumUrl} alt="slide_image" />
            </SwiperSlide>
          );
        })}
        <div className="div"></div>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <SliderArrowLeft width={25} height={25}></SliderArrowLeft>
          </div>
          <div className="swiper-button-next slider-arrow">
            <SliderArrowRight width={25} height={25}></SliderArrowRight>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default GallerySlider;
{
  /* <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide> */
}
