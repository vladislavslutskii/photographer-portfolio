import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Menu.module.scss";
import { Link, useLocation } from "react-router-dom";
import { PathNames } from "../../Pages/Router";
import { MenuProps } from "./types";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { CloseMenu } from "../../Assets/Icons";

const Menu: FC<MenuProps> = ({ onClick, openMenu }) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const location = useLocation();

  return (
    <div
      className={classNames(styles.menu, {
        [styles.menu_dark]: isDarkTheme,
      })}
    >
      <div className={styles.menu_themeButton} onClick={onChangeTheme}>
        {theme === Theme.Dark ? "Dark" : "Light"}
      </div>
      <div className={styles.menu_items}>
        <div className={styles.menu_items_item}>
          <Link
            className={classNames(styles.menu_items_link, {
              [styles.menu_items_link_dark]: isDarkTheme,
              [styles.activeLink]: location.pathname === PathNames.Home,
              [styles.activeLink_dark]:
                location.pathname === PathNames.Home && isDarkTheme,
            })}
            onClick={onClick}
            to={PathNames.Home}
          >
            Главная
          </Link>
        </div>
        <div className={styles.menu_items_item}>
          <Link
            className={classNames(styles.menu_items_link, {
              [styles.menu_items_link_dark]: isDarkTheme,
              [styles.activeLink]: location.pathname === PathNames.About,
              [styles.activeLink_dark]:
                location.pathname === PathNames.About && isDarkTheme,
            })}
            onClick={onClick}
            to={PathNames.About}
          >
            Обо мне
          </Link>
        </div>

        <div className={styles.menu_items_item}>
          <Link
            className={classNames(styles.menu_items_link, {
              [styles.menu_items_link_dark]: isDarkTheme,
              [styles.activeLink]: location.pathname === PathNames.Gallery,
              [styles.activeLink_dark]:
                location.pathname === PathNames.Gallery && isDarkTheme,
            })}
            onClick={onClick}
            to={PathNames.Gallery}
          >
            Портфолио
          </Link>
        </div>
        <div className={styles.menu_items_item}>
          <Link
            className={classNames(styles.menu_items_link, {
              [styles.menu_items_link_dark]: isDarkTheme,
              [styles.activeLink]: location.pathname === PathNames.Contact,
              [styles.activeLink_dark]:
                location.pathname === PathNames.Contact && isDarkTheme,
            })}
            onClick={onClick}
            to={PathNames.Contact}
          >
            Контакты
          </Link>
        </div>
      </div>
      <div
        className={classNames(styles.menu_closeButton, {
          [styles.menu_closeButton_dark]: isDarkTheme,
        })}
        onClick={onClick}
      >
        <CloseMenu width={28} height={28}></CloseMenu>
      </div>
    </div>
  );
};

export default Menu;
