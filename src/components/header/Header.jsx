import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.svg';
import logoText from '../../assets/images/logo-text.png';
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} className="header__logo-icon" alt="logo" />
        <img src={logoText} className="header__logo-text" alt="logo-text" />
      </Link>

      <nav className="header__nav">
        <li className="header__nav-item">
          <Link to="/petregister" className="header__nav-item-link">
            <p className="header__nav-item-link-text">Притулкам</p>
          </Link>
        </li>

        <li className="header__nav-item">
          <Link to="/animalpage" className="header__nav-item-link">
            <p className="header__nav-item-link-text">Волонтерам</p>
          </Link>
        </li>

        <li className="header__nav-item">
          <Link to="/registration" className="header__nav-item-link">
            <button className="header__nav-item-link-button">
              Вхід / Реєстрація
            </button>
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
