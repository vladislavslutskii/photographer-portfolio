import React from "react";
import classNames from "classnames";
import styles from "./GallerySlider.module.scss";
import albumPhoto from "../../Assets/Photos/addAlbum.png";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../GallerySlider/GallerySlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Cross, SliderArrowLeft, SliderArrowRight } from "../../Assets/Icons";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../../Redux/reducers/photosReducer";

const GallerySlider = ({ albumsList }: any) => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();

  return (
    <div className="container">
      <Swiper
        // @ts-ignore
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
          // @ts-ignore
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {albumsList.map(
          (post: {
            id: React.Key | null | undefined | number;
            albumUrl: string | undefined;
          }) => {
            const onCardClick = () => {
              navigate(`/gallery/albums/${post.id}/photos`);
            };
            const id = post.id;

            const onDeletePost = () => {
              if (id) {
                dispatch(deleteAlbum({ id }));
              }
              window.location.reload();
            };

            return (
              <SwiperSlide key={post.id}>
                <div className={styles.slideButton} onClick={onDeletePost}>
                  <Cross width={25} height={25}></Cross>
                </div>
                <img
                  onClick={onCardClick}
                  src={post.albumUrl}
                  alt="slide_image"
                />
              </SwiperSlide>
            );
          }
        )}
        <SwiperSlide>
          <img
            className={classNames(styles.addAlbumCard, {
              [styles.addAlbumCard_dark]: isDarkTheme,
            })}
            src={albumPhoto}
            alt="slide_image"
          />
        </SwiperSlide>
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
