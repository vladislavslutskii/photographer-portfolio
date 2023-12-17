import react from "react";
import classNames from "classnames";
import styles from "./Aboutme.module.scss";
import photo from "../../Assets/Photos/background.png";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { useDispatch } from "react-redux";

const Aboutme = ({}) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(styles.aboutWrap, {
        [styles.aboutWrap_dark]: isDarkTheme,
      })}
    >
      <div
        className={classNames(styles.aboutWrap_title, {
          [styles.aboutWrap_title_dark]: isDarkTheme,
        })}
      >
        Немного обо мне
      </div>
      <div className={styles.aboutWrap_topSection}>
        <div className={styles.aboutWrap_topSection_photoWrap}>
          <img
            className={styles.aboutWrap_topSection_photoWrap_photo}
            src={photo}
            alt=""
          />
        </div>
        <div
          className={classNames(styles.aboutWrap_topSection_text, {
            [styles.aboutWrap_topSection_text_dark]: isDarkTheme,
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae cum
          similique modi maxime iste quam itaque illum dolor aspernatur
          consequuntur nesciunt enim, maiores qui, facilis nostrum nam aliquid
          assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rem vitae cum similique modi maxime iste quam itaque illum dolor
          aspernatur consequuntur nesciunt enim, maiores qui, facilis nostrum
          nam aliquid assumenda. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </div>
      </div>
      <div className={styles.aboutWrap_bottomSection}>
        <div
          className={classNames(styles.aboutWrap_bottomSection_text, {
            [styles.aboutWrap_bottomSection_text_dark]: isDarkTheme,
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae cum
          similique modi maxime iste quam itaque illum dolor aspernatur
          consequuntur nesciunt enim, maiores qui, facilis nostrum nam aliquid
          assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rem vitae cum similique modi maxime iste quam itaque illum dolor
          aspernatur consequuntur nesciunt enim, maiores qui, facilis nostrum
          nam aliquid assumenda. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </div>
        <div className={styles.aboutWrap_bottomSection_photoWrap}>
          <img
            className={styles.aboutWrap_bottomSection_photoWrap_photo}
            src={photo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
