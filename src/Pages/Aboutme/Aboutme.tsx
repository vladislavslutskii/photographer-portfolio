import react from "react";
import styles from "./Aboutme.module.scss";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import classNames from "classnames";
import photo from "../../Assets/Photos/background1.png";
import { useDispatch } from "react-redux";

const Aboutme = ({}) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();

  // dispatch(isDarkTheme);
  return (
    <div
      className={classNames(styles.aboutMe, {
        [styles.aboutMe_dark]: isDarkTheme,
      })}
    >
      <div className={classNames(styles.aboutMe_wrap, {})}>
        <div
          className={classNames(styles.aboutMe_wrapLeft, {
            [styles.aboutMe_wrapLeft_dark]: isDarkTheme,
          })}
        >
          <div className={classNames(styles.aboutMe_wrapLeft_text, {})}>
            BIO Bali is a Portrait & Documentary photographer based out of New
            Delhi. He provides compelling imagery for clients spanning the
            editorial and commercial markets. He briefly assisted vii agency
            photographer John Stanmeyer on a National Geographic assignment ,
            and then studied Creative photography for a year. Selected editorial
            clients - Porter Magazine, T magazine NYT, GQ India, Elle, Vogue
            India, Vanity Fair UK, Forbes Asia, Condenast Traveller,
            DestinAsian, UK financial times, Rhapsody New York Selected
            Companies/Organisations - Netflix, Sequoia Capital, Assa Abloy,
            Oracle, Hike, World Health Organisation, University of Sydney.{" "}
          </div>
        </div>
        <div className={classNames(styles.aboutMe_wrapRight, {})}>
          <img
            className={classNames(styles.aboutMe_wrapRight_photo, {})}
            src={photo}
            alt="ds"
          />
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
