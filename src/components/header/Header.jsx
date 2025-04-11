import React from "react";
import logo from '../../assets/icons/logo.svg';
import logoText from '../../assets/images/logo-text.png';
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
               <img src={logo} className="header__logo-icon" alt="logo" />
               <img src={logoText} className="header__logo-text" alt="logo-text" />
            </div>
            <nav className="header__nav">
                <li className="header__nav-item">
                    <a href="/" className="header__nav-item-link">
                        <p className="header__nav-item-link-text">
                           Притулкам 
                        </p>
                    </a>
                </li>
                <li className="header__nav-item">
                    <a href="/" className="header__nav-item-link">
                        <p className="header__nav-item-link-text">
                           Волонтерам 
                        </p>
                    </a>
                </li>
                <li className="header__nav-item">
                    <a href="/" className="header__nav-item-link">
                        <p className="header__nav-item-link-text">
                           Блог
                        </p>
                    </a>
                </li>
                <li className="header__nav-item">
                    <a href="/" className="header__nav-item-link">
                        <button className="header__nav-item-link-button">
                           Вхід / Реєстрація
                        </button>
                    </a>
                </li>
            </nav>
        </header>
    )
}

export default Header;