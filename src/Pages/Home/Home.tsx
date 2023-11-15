import styles from "./Home.module.scss";
import background from "../../Assets/Photos/background.png";
import "./Home.module.scss";

import classNames from "classnames";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { Dark, Sunny } from "../../Assets/Icons";
import { changeTheme } from "../../Redux/reducers/themeReducer";
import { Link } from "react-router-dom";
import { PathNames } from "../Router";

const Home = ({}) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.home, {
        [styles.home_dark]: isDarkTheme,
      })}
    >
      <div className={styles.home_wrap}>
        <div className={styles.leftPart}>
          <div
            className={classNames(styles.leftPart_header, {
              [styles.leftPart_header_dark]: isDarkTheme,
            })}
          >
            Lo
            <div
              className={styles.leftPart_header_themeButton}
              onClick={onChangeTheme}
            >
              {theme === Theme.Light ? (
                <Dark width={30} height={30}></Dark>
              ) : (
                <Sunny width={30} height={30}></Sunny>
              )}
            </div>
          </div>
          <div
            className={classNames(styles.leftPart_title, {
              [styles.leftPart_title_dark]: isDarkTheme,
            })}
          >
            My name is Daniil
          </div>
          <div
            className={classNames(styles.leftPart_description, {
              [styles.leftPart_description_dark]: isDarkTheme,
            })}
          >
            and I’m taking awesome photos
          </div>
          <div
            className={classNames(styles.leftPart_buttonGroup, {
              [styles.leftPart_buttonGroup_dark]: isDarkTheme,
            })}
          >
            <Link
              className={classNames(styles.leftPart_buttonGroup_aboutMe, {
                [styles.leftPart_buttonGroup_aboutMe_dark]: isDarkTheme,
              })}
              to={PathNames.About}
            >
              About me
            </Link>
            <Link
              className={classNames(styles.leftPart_buttonGroup_gallery, {
                [styles.leftPart_buttonGroup_gallery_dark]: isDarkTheme,
              })}
              to={PathNames.Gallery}
            >
              Gallery
            </Link>
          </div>
          <div
            className={classNames(styles.leftPart_aName, {
              [styles.leftPart_aName_dark]: isDarkTheme,
            })}
          >
            © 2022 Name
          </div>
        </div>
        <div className={styles.rightPart}>
          <img
            className={styles.rightPart_img}
            src={background}
            alt="MyPhoto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div
      className={classNames(styles.home, {
        [styles.dark]: isDarkTheme,
      })}
    >
      <div className={styles.home_wrap}>
        <div className={styles.leftPart}>
          <img className={styles.leftPart_img} src={port} alt="MyPhoto" />
        </div>
        <div className={styles.rightPart}>
          <div className={styles.rightPart_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laudantium debitis voluptatum inventore, quaerat iusto excepturi
            optio ad quas consequatur aliquam aperiam tempora exercitationem
            omnis vitae laborum nemo sint ullam delectus libero deserunt. Est
            neque minima quisquam nemo facilis saepe at aspernatur, soluta alias
            voluptates blanditiis! Veritatis quibusdam unde ducimus hic totam
            distinctio architecto minus aperiam dolore nobis? Aspernatur rerum
            iusto voluptate laudantium debitis minus?
          </div>
        </div>
      </div>
    </div> */
}
