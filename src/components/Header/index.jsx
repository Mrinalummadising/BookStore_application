import React from "react";
import { useState } from "react";
import { FaBook, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const [isDifferentTheme, setIsDifferentTheme] = useState(false);

  const toggleTheme = () => {
    setIsDifferentTheme((prevTheme) => !prevTheme);
    document.body.className = isDifferentTheme ? "light-theme" : "dark-theme";
  };

  return (
    <nav className="header-container">
      <div className="header-content-container">
        <Link to="/" className="nav-link">
          <div className="logo-container">
            <div className="logo">C</div>
            CROSSWORD
          </div>
        </Link>
        <ul className="nav-items-container">
          <Link to="/books" className="nav-link">
            <li className="icon-container">
              <FaBook className="icon" />
              <span className="icon-name">Book List</span>
            </li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className="icon-container">
              <FaShoppingBag className="icon" />
              <span className="icon-name">Cart</span>
            </li>
          </Link>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {isDifferentTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
