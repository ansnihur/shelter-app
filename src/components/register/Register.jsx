import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.scss';

const Register = () => {
  const [isShelter, setIsShelter] = useState(true);
  const navigate = useNavigate();

  const handleSwitch = (type) => {
    setIsShelter(type === 'shelter');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="registration">
      <h1 className="registration__title">Реєстрація</h1>
      <div className="registration__toggle">
        <label>
          <input
            type="radio"
            checked={isShelter}
            onChange={() => handleSwitch('shelter')}
          />
          Я притулок
        </label>
        <label>
          <input
            type="radio"
            checked={!isShelter}
            onChange={() => handleSwitch('volunteer')}
          />
          Я волонтер
        </label>
      </div>

      <form className="registration__form">
        <input type="text" placeholder="ПІБ" required />
        <input type="tel" placeholder="Номер телефону*" required />
        <input type="email" placeholder="Email*" required />
        <input type="password" placeholder="Пароль*" required />

        {isShelter && (
            <>
            <div className="registration__select-wrapper">
                <select required>
                <option value="">Категорія*</option>
                <option value="official">Притулок (офіційний)</option>
                <option value="clinic">Ветеринарна клініка</option>
                <option value="ngo">Зоозахисна організація</option>
                <option value="home">Домашній міні-притулок</option>
                </select>
            </div>

            <input type="text" placeholder="Назва організації*" required />
            </>
        )}

            <button type="submit" className="registration__submit">
                Зареєструватися
            </button>

            <button
                type="button"
                className="registration__login-link"
                onClick={handleLoginRedirect}
            >
                Уже маю акаунт
            </button>
        </form>
    </div>
  );
};

export default Register;
