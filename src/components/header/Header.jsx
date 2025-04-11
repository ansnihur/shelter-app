import React from "react";
import logo from '../../assets/icons/logo.svg';
import logoText from '../../assets/images/logo-text.png';
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
               <img src={logo} className="logo-icon" alt="logo" />
               <img src={logoText} className="logo-text" alt="logo-text" />
            </div>
            <nav className="nav">
                <li className="nav-item">
                    <a href="/" className="nav-item-link">
                        <p className="nav-item-link-text">
                           Забрати додому 
                        </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-item-link">
                        <p className="nav-item-link-text">
                           Забрати додому 
                        </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-item-link">
                        <p className="nav-item-link-text">
                           Притулкам 
                        </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-item-link">
                        <p className="nav-item-link-text">
                           Волонтерам 
                        </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-item-link">
                        <p className="nav-item-link-text">
                           Блог
                        </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-item-link">
                        <button className="nav-item-link-button">
                           Вхід / Реєстрація
                        </button>
                    </a>
                </li>
            </nav>
        </header>
    )
}

export default Header;