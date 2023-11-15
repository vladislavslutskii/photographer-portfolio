import { useCallback, useEffect, useRef, useState } from "react";
import { SliderArrowLeft, SliderArrowRight } from "../../Assets/Icons";
import styles from "./ImageSlider.module.scss";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../Redux/reducers/postsreducer";
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderTopLeftRadius: "40px",
  borderBottomLeftRadius: "38px",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform  0.3s",
};

const ImageSlider = ({ slides, parentWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  console.log(slides);
  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: parentWidth,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });
  const deletePosts = (slide) => {
    dispatch(deletePost(slide));
  };
  return (
    <div className={styles.sliderStyles}>
      <div>
        <div
          onClick={goToPrevious}
          className={
            isDarkTheme ? styles.leftArrowStyles_dark : styles.leftArrowStyles
          }
        >
          <SliderArrowLeft></SliderArrowLeft>
        </div>
        <div
          onClick={goToNext}
          className={
            isDarkTheme ? styles.rightArrowStyles_dark : styles.rightArrowStyles
          }
        >
          <SliderArrowRight></SliderArrowRight>
        </div>
      </div>
      <div className={styles.slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={styles.slid}
              style={getSlideStylesWithBackground(slideIndex)}
            >
              <button className={styles.buttons}>Update</button>
              <button className={styles.buttons} onClick={deletePosts(slide)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={`
              ${styles.dotStyle}  ${
              currentIndex === slideIndex
                ? styles.dotStyle_active
                : styles.dotStyle
            }
            `}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
