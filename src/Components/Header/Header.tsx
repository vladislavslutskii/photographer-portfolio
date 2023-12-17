import classNames from "classnames";
import styles from "./Header.module.scss";
import Menu from "../Menu";
import { useEffect, useState } from "react";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { Burger, BurgerOpen, Dark, Sunny } from "../../Assets/Icons";
import { NavLink, useLocation } from "react-router-dom";
import { PathNames } from "../../Pages/Router";

const Header = ({}) => {
  const [menuActive, setMenuActive] = useState(true);
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const location = useLocation();

  useEffect(() => {
    if (!menuActive) {
      const elem = document.getElementById("root");
      // @ts-ignore
      elem.style.overflow = "hidden";
    } else if (menuActive) {
      const elem = document.getElementById("root");
      // @ts-ignore
      elem.style.overflow = "visible";
    }
  }, [menuActive]);

  return (
    <nav
      className={classNames(styles.header, {
        [styles.header_dark]: isDarkTheme,
      })}
    >
      {!menuActive ? (
        <Menu
          onClick={() => setMenuActive(!menuActive)}
          openMenu={menuActive}
        ></Menu>
      ) : null}
      <div
        className={classNames(styles.header_logo, {
          [styles.header_logo_dark]: isDarkTheme,
        })}
      >
        <NavLink
          className={classNames(styles.header_logo_text, {
            [styles.header_logo_dark]: isDarkTheme,
          })}
          to={PathNames.Home}
        >
          Lo
        </NavLink>
        <div className={styles.header_logo_themeButton} onClick={onChangeTheme}>
          {theme === Theme.Light ? (
            <Dark width={30} height={30}></Dark>
          ) : (
            <Sunny width={30} height={30}></Sunny>
          )}
        </div>
      </div>
      <ul className={styles.headerLink}>
        <li
          className={styles.headerLink_burger}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div
            className={classNames(styles.headerLink_burgerButton, {
              [styles.headerLink_burgerButton_dark]: isDarkTheme,
            })}
          >
            {!menuActive ? (
              <BurgerOpen width={44} height={36}></BurgerOpen>
            ) : (
              <Burger width={44} height={36}></Burger>
            )}
          </div>
        </li>
        <li
          className={classNames(styles.headerLink_contact, {
            [styles.headerLink_gallery_dark]: isDarkTheme,
          })}
        >
          <NavLink
            className={classNames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.Contact,
              [styles.activeLink_dark]:
                location.pathname === PathNames.Contact && isDarkTheme,
              [styles.headerLink_navLink_dark]: isDarkTheme,
            })}
            to={PathNames.Contact}
          >
            Контакты
          </NavLink>
        </li>
        <li className={styles.headerLink_gallery}>
          <NavLink
            className={classNames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.Gallery,
              [styles.activeLink_dark]:
                location.pathname === PathNames.Gallery && isDarkTheme,
              [styles.headerLink_navLink_dark]: isDarkTheme,
            })}
            to={PathNames.Gallery}
          >
            Портфолио
          </NavLink>
        </li>
        <li className={styles.headerLink_about}>
          <NavLink
            className={classNames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.About,
              [styles.activeLink_dark]:
                location.pathname === PathNames.About && isDarkTheme,
              [styles.headerLink_navLink_dark]: isDarkTheme,
            })}
            to={PathNames.About}
          >
            Обо мне
          </NavLink>
        </li>
        <li className={styles.headerLink_home}>
          <NavLink
            className={classNames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.Home,
              [styles.activeLink_dark]:
                location.pathname === PathNames.Home && isDarkTheme,
              [styles.headerLink_navLink_dark]: isDarkTheme,
            })}
            to={PathNames.Home}
          >
            Главная
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
