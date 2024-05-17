import "./NavBar.css";
import { Drawer, Button } from "antd";
import React, { useState, useEffect } from "react";
import { MenuOutlined, FieldBinaryOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES_BY_CATEGORY } from "../utils/NavItem";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 992); // Adjust the threshold as needed
    };

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <Button
          className="home"
          icon={<FieldBinaryOutlined />}
        />
      </Link>
      
      {showButton && ( 
        <Button
          className="menu"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
      )}
      
      <Drawer
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        open={visible}   
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
      </Drawer>
    </nav>
  );
};
export default NavBar;