import classNames from "classnames";
import styles from "./HomeButtons.module.scss";
import { Link } from "react-router-dom";
import { PathNames } from "../../Pages/Router";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const HomeButtons = ({}) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.buttonsWrap, {
        [styles.leftPart_buttonGroup_dark]: isDarkTheme,
      })}
    >
      <Link
        className={classNames(styles.buttonsWrap_aboutButton, {
          [styles.buttonsWrap_aboutButton_dark]: isDarkTheme,
        })}
        to={PathNames.About}
      >
        Обо мне
      </Link>
      <Link
        className={classNames(styles.buttonsWrap_galleryButton, {
          [styles.buttonsWrap_galleryButton_dark]: isDarkTheme,
        })}
        to={PathNames.Gallery}
      >
        Портфолио
      </Link>
    </div>
  );
};

export default HomeButtons;
