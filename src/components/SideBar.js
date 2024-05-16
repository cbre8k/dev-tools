import "./SideBar.css"
import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { ROUTES_BY_CATEGORY } from "../utils/NavItem";

const SideBar = () => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
        <div key={i}>
          {title && <h4 className="title">{title.toUpperCase()}</h4>}
          <ul>
            {routes.map(({ path, title }) => (
              <li key={path}>
                <Link className="link" to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout.Sider>
  );
};

export default SideBar;
