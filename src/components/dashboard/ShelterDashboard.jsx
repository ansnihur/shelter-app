/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext"; // HOOK
import "./ShelterDashboard.scss";

const ShelterDashboard = () => {
  const { user } = useUser();
  const [pets, setPets] = useState([]);
  const [activeTab, setActiveTab] = useState("Профіль");
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const allRequests = JSON.parse(localStorage.getItem("volunteerRequests")) || [];
    setRequests(allRequests);
  }, []);

  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem("pets")) || [];
    const userPets = storedPets.filter((pet) => pet.shelterEmail === user.email);
    setPets(userPets);
  }, [user]);

  const handleAccept = (id) => {
    const confirmed = window.confirm("📞 Прийняти запит? Після здійснення дзвінка запит видаляється.");
    if (confirmed) {
      window.location.href = "tel:0960000000";
      const updated = requests.filter((r) => r.id !== id);
      setRequests(updated);
      localStorage.setItem("volunteerRequests", JSON.stringify(updated));
    }
  };

  const handleReject = (id) => {
    const confirmed = window.confirm("❌ Ви дійсно хочете відхилити запит?");
    if (confirmed) {
      const updated = requests.filter((r) => r.id !== id);
      setRequests(updated);
      localStorage.setItem("volunteerRequests", JSON.stringify(updated));
    }
  };

  const handleDelete = (id) => {
    const updated = pets.filter((pet) => pet.id !== id);
    setPets(updated);
    localStorage.setItem("pets", JSON.stringify(updated));
  };

  const handleEdit = (id) => {
    alert("Редагування ще в розробці 🛠️");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Профіль":
        return (
          <div className="tab-content">
            <h2>🏠 Профіль притулку</h2>
            <p><strong>Назва організації:</strong> {user?.organization}</p>
            <p><strong>Категорія:</strong> {user?.category}</p>
            <p><strong>Контактна особа:</strong> {user?.fullName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Телефон:</strong> {user?.phone}</p>
          </div>
        );
      case "Мої тварини":
        return (
          <div className="tab-content">
            <h2>🐾 Мої тварини</h2>
            {pets.length > 0 ? (
              <div className="find-pet">
                {pets.map((pet) => (
                  <div key={pet.id} className="pet-card">
                    <img src={pet.image} alt={pet.name} />
                    <div className="pet-info">
                      <h4>{pet.name}, {pet.age} років</h4>
                      <p>{pet.kind} • {pet.location}</p>
                    </div>
                    <div className="pet-actions">
                      <button className="btn btn-edit" onClick={() => handleEdit(pet.id)}>✏️ Редагувати</button>
                      <button className="btn btn-remove" onClick={() => handleDelete(pet.id)}>🗑️ Видалити</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>У вас поки немає зареєстрованих тваринок 🐕</p>
            )}
          </div>
        );
      case "Заявки":
        return (
          <div className="tab-content">
            <h2>📥 Заявки від волонтерів</h2>
            {requests.length > 0 ? (
              <div className="requests-list">
                {requests.map((req) => (
                  <div key={req.id} className="request-card">
                    <p><strong>Ім’я:</strong> {req.name}</p>
                    <p><strong>Email:</strong> {req.email}</p>
                    <p><strong>Повідомлення:</strong> {req.message}</p>
                    <div className="request-actions">
                      <button className="btn btn-call" onClick={() => handleAccept(req.id)}>Прийняти</button>
                      <button className="btn btn-remove" onClick={() => handleReject(req.id)}>Відхилити</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Наразі немає запитів 😺</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Кабінет притулку</h1>
      <div className="dashboard__tabs">
        <button onClick={() => setActiveTab("Профіль")} className={activeTab === "Профіль" ? "active" : ""}>Профіль</button>
        <button onClick={() => setActiveTab("Мої тварини")} className={activeTab === "Мої тварини" ? "active" : ""}>Мої тварини</button>
        <button onClick={() => setActiveTab("Заявки")} className={activeTab === "Заявки" ? "active" : ""}>Заявки</button>
      </div>
      {renderContent()}
    </div>
  );
};

export default ShelterDashboard;
