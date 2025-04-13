import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.scss';
import { useUser } from "../../context/UserContext";

const Register = () => {
  const [isShelter, setIsShelter] = useState(true);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [organization, setOrganization] = useState("");

  const navigate = useNavigate();

  const handleSwitch = (type) => {
    setIsShelter(type === 'shelter');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userData = {
      role: isShelter ? "shelter" : "volunteer",
      fullName,
      phone,
      email,
      password,
      ...(isShelter && { category, organization })
    };
    
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    setUser(userData); // в контекст
  
    navigate(isShelter ? "/shelter-dashboard" : "/volunteer-dashboard");
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

      <form className="registration__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="ПІБ" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input 
          type="tel"
          placeholder="Номер телефону*"
          required
          value={phone}
          onChange={(e) => {
            const digitsOnly = e.target.value.replace(/\D/g, ""); // Видаляє всі НЕцифри
            setPhone(digitsOnly);
          }}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={10} 
        />
        <input type="email" placeholder="Email*" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Пароль*" required value={password} onChange={(e) => setPassword(e.target.value)} />

        {isShelter && (
          <>
            <div className="registration__select-wrapper">
              <select required value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Категорія*</option>
                <option value="official">Притулок (офіційний)</option>
                <option value="clinic">Ветеринарна клініка</option>
                <option value="ngo">Зоозахисна організація</option>
                <option value="home">Домашній міні-притулок</option>
              </select>
            </div>
            <input type="text" placeholder="Назва організації*" required value={organization} onChange={(e) => setOrganization(e.target.value)} />
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