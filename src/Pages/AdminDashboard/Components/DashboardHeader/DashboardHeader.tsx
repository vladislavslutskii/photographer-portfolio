import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IoLogInOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from "./DashboardHeader.module.scss";

import classnames from "classnames";

function DashboardHeader() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const names = {
    menuActive: "nav-menu active",
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={styles.navBar}>
          <div className={styles.navBar_leftSide}>
            <Link to="#" className={styles.leftSide_openButton}>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <div className={styles.leftSide_title}>Admin Dashboard </div>
            <div className={styles.leftSide_logOut}>
              <IoLogInOutline size={"2.2em"} />
            </div>
          </div>
        </div>
        <nav
          className={classnames(styles.navMenu, {
            [styles.navMenu_active]: sidebar,
          })}
        >
          <ul className={styles.navMenu_items} onClick={showSidebar}>
            <li className={styles.navBar_toggle}>
              <Link to="#" className={styles.menuBars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default DashboardHeader;
