import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./Logout.scss";

const Logout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    const timer = setTimeout(() => {
      navigate("/");
    }, 1500); // 1.5 сек. на "спінер" або повідомлення

    return () => clearTimeout(timer); // чистимо таймер
  }, [logout, navigate]);

  return (
    <div className="logout-screen">
      <div className="logout-spinner"></div>
      <p>Вихід з акаунту... 🐾</p>
    </div>
  );
};

export default Logout;
