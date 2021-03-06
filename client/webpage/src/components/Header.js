import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <div className="header">
      <div className="header--logo">
        <img src={logo} alt="" />
      </div>

      <div className="menu--icon">
        <MenuIcon className="menu" onClick={toggle} />
      </div>

      <div>
        <h1>Welcome, Customer ID</h1>
      </div>

      <nav>
        <ul className={active ? "list--items active" : "list--items"}>
          <div className="menu--close">
            <CloseIcon className="close" onClick={toggle} />
          </div>

          <li>
            <Link to="/home"> Home</Link>
          </li>

          <li>
            <Link to="/account"> Account</Link>
          </li>

          <li>
            <Link to="/loans"> Loans</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
