import React, { useState } from "react";
import "./Header.css";
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

      <nav>
        <ul className={active ? "list--items active" : "list--items"}>
          <div className="menu--close">
            <CloseIcon className="close" onClick={toggle} />
          </div>

          <li>
            <h1>Home</h1>
          </li>

          <li>
            <h1>Account</h1>
          </li>

          <li>
            <h1>Loans</h1>
          </li>

          <li>
            <h1>Login/SignUp</h1>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
