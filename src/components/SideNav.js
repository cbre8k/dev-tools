import React from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
import { ROUTES_BY_CATEGORY } from "../utils/SideNavItem";

const SideNav = () => {
  
  return (
    <div className="container">
      {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
        <div key={i}>
          {title && <h6 className={styles.title}>{title.toUpperCase()}</h6>}
          <ul className={styles.list}>
            {routes.map(({ path, title }) => (
              <li className={styles.listItem} key={path}>
                <Link className={styles.link} to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
