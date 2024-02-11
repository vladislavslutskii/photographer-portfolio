import classNames from "classnames";
import styles from "./PagesWrapper.module.scss";
import Home from "../Home";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { PathNames } from "../Router";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const PagesWrapper = () => {
  const location = useLocation();
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.app, {
        [styles.app_dark]: isDarkTheme,
      })}
    >
      {location.pathname === PathNames.Home ||
      location.pathname === PathNames.SignUp ||
      location.pathname === PathNames.SignIn ? null : (
        <Header></Header>
      )}

      {location.pathname === PathNames.Home ? <Home></Home> : <Outlet></Outlet>}
      {location.pathname === PathNames.Contact ? <Footer></Footer> : null}
      {location.pathname === PathNames.About ? <Footer></Footer> : null}
    </div>
  );
};

export default PagesWrapper;
