import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss';
import { useUser } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // Контекст

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert("Користувача не знайдено");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));
    setUser(foundUser);
    navigate(foundUser.role === "shelter" ? "/shelter-dashboard" : "/volunteer-dashboard");
  };

  const handleRegisterRedirect = () => {
    navigate("/registration");
  };

  return (
    <div className="registration">
      <h1 className="registration__title">Вхід</h1>

      <form className="registration__form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email*"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль*"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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
