import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { Instagram } from "../../Assets/Icons";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const Footer = ({}) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.footer, {
        [styles.footer_dark]: isDarkTheme,
      })}
    >
      <ul className={styles.footer_links}>
        <li className={styles.footer_links_instagram}>
          <Link
            className={classNames(styles.footer_links_link, {
              [styles.footer_links_dark]: isDarkTheme,
              [styles.headerLink_navLink_dark]: isDarkTheme,
            })}
            to={""}
          >
            Instagram
          </Link>
          <Link className={styles.footer_links_icon} to={""}>
            <Instagram width={50} height={50}></Instagram>
          </Link>
        </li>
        <li className={styles.footer_icons_facebook}>
          <Link
            className={classNames(styles.footer_links_link, {
              [styles.footer_links_dark]: isDarkTheme,
            })}
            to={""}
          >
            Facebook
          </Link>
          <Link className={styles.footer_links_icon} to={""}>
            <Instagram width={50} height={50}></Instagram>
          </Link>
        </li>
        <li className={styles.footer_links_unsplash}>
          <Link
            className={classNames(styles.footer_links_link, {
              [styles.footer_links_dark]: isDarkTheme,
            })}
            to={""}
          >
            Unsplash
          </Link>
          <Link className={styles.footer_links_icon} to={""}>
            <Instagram width={50} height={50}></Instagram>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
