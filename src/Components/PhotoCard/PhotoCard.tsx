import classNames from "classnames";
import styles from "./PhotoCard.module.scss";
import ImageSlider from "../ImageSlider";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { Arrow } from "../../Assets/Icons";
import { Link } from "react-router-dom";
import { PathNames } from "../../Pages/Router";

const PhotoCard = ({ post }: any) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.photoCard, {
        [styles.photoCard_dark]: isDarkTheme,
      })}
    >
      <div
        className={classNames(styles.photoCard_wrap, {
          [styles.photoCard_wrap_dark]: isDarkTheme,
        })}
      >
        <div className={styles.photoCard_wrap_leftSide}>
          <ImageSlider slides={post} />
        </div>
        <div className={styles.photoCard_wrap_rightSide}>
          <div
            className={classNames(styles.photoCard_wrap_rightSide_title, {
              [styles.photoCard_wrap_rightSide_title_dark]: isDarkTheme,
            })}
          >
            {post[0] != null ? post[0].title : "Hello"}
          </div>
          <div
            className={classNames(styles.photoCard_wrap_rightSide_text, {
              [styles.photoCard_wrap_rightSide_text_dark]: isDarkTheme,
            })}
          >
            {post[0] != null ? post[0].title : "Hello"}
          </div>
        </div>
      </div>
      <div className={styles.photoCard_goBack}>
        <Link
          className={classNames(styles.photoCard_goBack_text, {
            [styles.photoCard_goBack_text_dark]: isDarkTheme,
          })}
          to={PathNames.Gallery}
        >
          <div className={styles.photoCard_goBack_arrow}>
            <Arrow width={30} height={23}></Arrow>
          </div>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default PhotoCard;
