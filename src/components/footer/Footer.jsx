import React from "react";
import "./Footer.scss";
import logo from '../../assets/icons/logo-light.svg';
import logoText from '../../assets/images/logo-text-light.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <a href="/" className="footer__logo">
                <img src={logo} className="footer__logo-icon" alt="logo" />
                <img src={logoText} className="footer__logo-text" alt="logo-text" />
            </a>

          <nav className="footer__nav">
            <a href="#">Притулкам</a>
            <a href="#">Волонтерам</a>
            <a href="#">Блог</a>
            <a href="#" className="footer__button-outline">Вхід / Реєстрація</a>
          </nav>

          <div className="footer__contact">
            <p className="footer__contact-label">Зв’яжіться з нами:</p>
            <p>Пошта: info@tailhub.com</p>
            <p>Телефон: 555-567-8901</p>
            <p>Адреса: 1234 Головна вул, Львів, Україна</p>
          </div>
        </div>

        <div className="footer__right">
          <form className="footer__subscribe">
            <input
              type="email"
              placeholder="Email"
              className="footer__input"
              required
            />
            <button type="submit" className="footer__button">
              Підпишіться на новини
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
