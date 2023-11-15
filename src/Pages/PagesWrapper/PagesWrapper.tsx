import styles from "./PagesWrapper.module.scss";
import classNames from "classnames";
import { Outlet, useLocation } from "react-router-dom";
import { PathNames } from "../Router";
import Home from "../Home";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";
import { useState } from "react";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const PagesWrapper = () => {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(true);
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  // const divStyle = {
  //   backgroundImage: `url(${background})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "100%",
  //   backgroundRepeat: "no-repeat",
  // };
  //style={divStyle}
  return (
    <div className={styles.app}>
      {location.pathname === PathNames.Home ? null : (
        <div className={styles.app_header}>
          <Header></Header>
        </div>
      )}

      <div
        className={classNames(styles.app_main, {
          [styles.app_mains]: location.pathname !== PathNames.Home,
          [styles.app_main_dark]: isDarkTheme,
        })}
      >
        {!menuActive ? (
          <Menu
            onClick={() => setMenuActive(!menuActive)}
            openMenu={menuActive}
          ></Menu>
        ) : null}
        {location.pathname === PathNames.Home ? (
          <Home></Home>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      {location.pathname === PathNames.Contact ? (
        <div className={styles.app_footer}>
          <Footer></Footer>
        </div>
      ) : null}
      {location.pathname === PathNames.About ? (
        <div className={styles.app_footer}>
          <Footer></Footer>
        </div>
      ) : null}
    </div>
  );
};

export default PagesWrapper;
