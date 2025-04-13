import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./Footer.scss";
import logo from '../../assets/icons/logo-light.svg';
import logoText from '../../assets/images/logo-text-light.png';

const Footer = () => {
  const { user, logout } = useUser();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("🎉 Дякуємо за підписку! Шукай листи з оновленнями про хвостиків у себе на пошті 🐾📬");
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <a href="/" className="footer__logo">
            <img src={logo} className="footer__logo-icon" alt="logo" />
            <img src={logoText} className="footer__logo-text" alt="logo-text" />
          </a>

          <nav className="footer__nav">
            <a href="/petregister">Притулкам</a>
            <a href="/animalpage">Волонтерам</a>
            {user ? (
              <>
                <Link
                  to={user.role === "shelter" ? "/shelter-dashboard" : "/volunteer-dashboard"}
                  className="footer__button-outline --profile"
                >
                  Профіль
                </Link>
                <button className="footer__button-outline --profile" onClick={logout}>
                  Вийти
                </button>
              </>
            ) : (
              <Link to="/registration" className="footer__button-outline">
                Вхід / Реєстрація
              </Link>
            )}
          </nav>

          <div className="footer__contact">
            <p className="footer__contact-label">Зв’яжіться з нами:</p>
            <p>Пошта: info@tailhub.com</p>
            <p>Телефон: 555-567-8901</p>
            <p>Адреса: 1234 Головна вул, Львів, Україна</p>
          </div>
        </div>

        <div className="footer__right">
          <form className="footer__subscribe" onSubmit={handleSubscribe}>
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
