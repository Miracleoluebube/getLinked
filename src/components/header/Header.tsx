import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { navLinks } from "../../static";

import logo from "../../assets/header-logo.png";
import menuOpen from "../../assets/menu.svg";
import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <div className="header">
      <div className="container flex">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className={`links flex ${activeMenu ? "active" : ""}`}>
          <div
            className="hemBugger-close"
            onClick={() => setActiveMenu(() => false)}>
            <img src={circle} alt="circle" className="circle" />
            <img src={cross} alt="cross" className="cross" />
          </div>

          {navLinks.map((link: any) => (
            <Link key={link.id} to={link.url}>
              {link.name}
            </Link>
          ))}

          <Link to="/register">
            <button className="p-btn">Register</button>
          </Link>
        </div>

        <div className="hemBugger-open" onClick={() => setActiveMenu(true)}>
          <img src={menuOpen} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
