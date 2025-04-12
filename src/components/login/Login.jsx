import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/registration');
  };

  return (
    <div className="registration">
      <h1 className="registration__title">Вхід</h1>

      <form className="registration__form">
        <input type="email" placeholder="Email*" required />
        <input type="password" placeholder="Пароль*" required />

        <button type="submit" className="registration__submit">
          Увійти
        </button>

        <button
          type="button"
          className="registration__login-link"
          onClick={handleRegisterRedirect}
        >
          Ще не зареєстрований?
        </button>
      </form>
    </div>
  );
};

export default Login;
