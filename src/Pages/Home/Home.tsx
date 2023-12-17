import classNames from "classnames";
import styles from "./Home.module.scss";
import background from "../../Assets/Photos/background.png";
import HomeButtons from "../../Components/HomeButtons";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { Dark, Sunny } from "../../Assets/Icons";

const Home = ({}) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.homeContainer, {
        [styles.homeContainer_dark]: isDarkTheme,
      })}
    >
      <div className={styles.homeContainer_imgWrap}>
        <img src={background} alt="MyPhoto"></img>
      </div>
      <div className={styles.leftSide}>
        <div
          className={classNames(styles.leftSide_header, {
            [styles.leftSide_header_dark]: isDarkTheme,
          })}
        >
          Lo
          <div
            className={styles.leftSide_header_themeButton}
            onClick={onChangeTheme}
          >
            {theme === Theme.Light ? (
              <Dark width={30} height={30}></Dark>
            ) : (
              <Sunny width={30} height={30}></Sunny>
            )}
          </div>
        </div>
        <div className={styles.leftSide_aboutWrap}>
          <div
            className={classNames(styles.leftSide_aboutWrap_title, {
              [styles.leftSide_aboutWrap_title_dark]: isDarkTheme,
            })}
          >
            My name is Daniil
          </div>
          <div
            className={classNames(styles.leftSide_aboutWrap_description, {
              [styles.leftSide_aboutWrap_description_dark]: isDarkTheme,
            })}
          >
            и я делаю потрясающие фотографии
          </div>
          <HomeButtons></HomeButtons>
        </div>
        <div
          className={classNames(styles.leftSide_aName, {
            [styles.leftSide_aName_dark]: isDarkTheme,
          })}
        >
          © 2022 Name
        </div>
      </div>
      <div className={styles.rightSide}>
        <img className={styles.rightSide_img} src={background} alt="MyPhoto" />
      </div>
    </div>
  );
};

export default Home;

/* 
>

		
			
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
</div> */
