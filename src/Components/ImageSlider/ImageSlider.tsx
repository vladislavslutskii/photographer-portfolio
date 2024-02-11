//   const deletePosts = (slide: Slide) => {
//     dispatch(deleteAlbum(slide));
//   };

//   return (
//     <div className={styles.sliderStyles}>
//       <div>
//         <div
//           onClick={goToPrevious}
//           className={
//             isDarkTheme ? styles.leftArrowStyles_dark : styles.leftArrowStyles
//           }
//         >
//           <SliderArrowLeft />
//         </div>
//         <div
//           onClick={goToNext}
//           className={
//             isDarkTheme ? styles.rightArrowStyles_dark : styles.rightArrowStyles
//           }
//         >
//           <SliderArrowRight />
//         </div>
//       </div>
//       <div className={styles.slidesContainerOverflowStyles}>
//         <div style={getSlidesContainerStylesWithWidth()}>
//           {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               className={styles.slid}
//               style={getSlideStylesWithBackground(slideIndex)}
//             >
//               <button className={styles.buttons}>Update</button>
//               <button
//                 className={styles.buttons}
//                 onClick={() => deletePosts(slide)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={styles.dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             className={`${styles.dotStyle}  ${
//               currentIndex === slideIndex
//                 ? styles.dotStyle_active
//                 : styles.dotStyle
//             }`}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

// import "./ImageSlider.css";
// import "swiper/css/effect-coverflow";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { useNavigate } from "react-router-dom";
// import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
// import { useDispatch } from "react-redux";
// import { SliderArrowLeft, SliderArrowRight } from "../../Assets/Icons";
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const ImageSlider = ({ slides }: any) => {
//   const navigate = useNavigate();
//   const { theme } = useThemeContext();
//   const isDarkTheme = theme === Theme.Dark;
//   const dispatch = useDispatch();

//   return (
//     <div className="container">
//       <Swiper // @ts-ignore
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         // loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: ".swiper-pagination", clickable: true }}
//         navigation={{
//           nextEl: ".buttonLeft",
//           prevEl: ".buttonRight",
//           // @ts-ignore
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="sliderStyles"
//       >
//         {slides.map((slide: any, slideIndex: any) => {
//           return (
//             <SwiperSlide key={slideIndex}>
//               <img src={slide.url} alt="slide_image" />
//             </SwiperSlide>
//           );
//         })}

//         <div className="sliderControler">
//           <div className={isDarkTheme ? "buttonLeft_dark" : "buttonLeft"}>
//             <SliderArrowLeft width={25} height={25}></SliderArrowLeft>
//           </div>
//           <div className={isDarkTheme ? "buttonRight_dark" : "buttonRight"}>
//             <SliderArrowRight width={25} height={25}></SliderArrowRight>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;

import "./ImageSlider.css";
import { useState } from "react";
import { SliderArrowLeft, SliderArrowRight } from "../../Assets/Icons";
// @ts-ignore
import Slider from "react-slick";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const ImageSlider = ({ slides }: any) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const NextArrow = ({ onClick }: any) => {
    return (
      <div
        className={isDarkTheme ? "arrow buttonRight_dark" : "arrow buttonRight"}
        onClick={onClick}
      >
        <SliderArrowRight width={25} height={25}></SliderArrowRight>
      </div>
    );
  };
  const PrevArrow = ({ onClick }: any) => {
    return (
      <div
        className={isDarkTheme ? "arrow buttonLeft_dark" : "arrow buttonLeft"}
        onClick={onClick}
      >
        <SliderArrowLeft width={25} height={25}></SliderArrowLeft>
      </div>
    );
  };
  const settings = {
    // lazyLoad: true,
    dots: true,
    speed: 300,
    // adaptiveHeight: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // @ts-ignore
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    // @ts-ignore
    <Slider {...settings}>
      {slides.map((slide: any, slideIndex: any) => (
        <div
          key={slideIndex}
          className={slideIndex === imageIndex ? "slide activeSlide" : "slide"}
        >
          <img src={slide.url} alt={slide.url} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
