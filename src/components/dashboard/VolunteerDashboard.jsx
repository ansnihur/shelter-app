import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import "./VolunteerDashboard.scss";
import { petData } from "../../data/petData";
import { useEffect } from "react";

const VolunteerDashboard = () => {
  const { user, favorites, toggleFavorite } = useUser();
  const [activeTab, setActiveTab] = useState("profile");

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const allRequests = JSON.parse(localStorage.getItem("volunteerRequests")) || [];
    const userRequests = allRequests.filter(req => req.email === user?.email);
    setRequests(userRequests);
  }, [user]);

  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          Профіль
        </button>
        <button
          className={activeTab === "favorites" ? "active" : ""}
          onClick={() => setActiveTab("favorites")}
        >
          Улюблені
        </button>
        <button
          className={activeTab === "requests" ? "active" : ""}
          onClick={() => setActiveTab("requests")}
        >
          Мої запити
        </button>
      </aside>

      <main className="dashboard__content">
        {activeTab === "profile" && (
          <>
            <h2>Профіль користувача</h2>
            <div className="profile-info">
              <p><strong>ПІБ:</strong> {user?.fullName}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Телефон:</strong> {user?.phone}</p>
            </div>
          </>
        )}

        {activeTab === "favorites" && (
          <>
            <h2>Улюблені тварини</h2>
            {favorites.length > 0 ? (
              <div className="find-pet">
                {petData
                  .filter((pet) => favorites.includes(pet.id))
                  .map((pet) => (
                    <div key={pet.id} className="pet-card">
                      <img src={pet.image} alt={pet.name} />
                      <div className="pet-info">
                        <h4>{pet.name}, {pet.age} років</h4>
                        <p>{pet.kind} • {pet.location}</p>
                      </div>
                      <div className="pet-actions">
                        <a href="tel:0960000000">
                          <button className="btn btn-call">Забрати</button>
                        </a>
                        <button
                          className="btn btn-remove"
                          onClick={() => toggleFavorite(pet.id)}
                        >
                          Попрощатися
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p>У вас ще немає улюблених хвостатих 😿</p>
            )}
          </>
        )}

        {activeTab === "requests" && (
          <>
            <h2>Мої запити</h2>
            {requests.length > 0 ? (
              <div className="requests-list">
                {requests.map((req) => (
                  <div key={req.id} className="request-card">
                    <p><strong>Ім’я:</strong> {req.name}</p>
                    <p><strong>Email:</strong> {req.email}</p>
                    <p><strong>Повідомлення:</strong> {req.message}</p>
                    <div className="request-actions">
                      <button
                        onClick={() => {
                          const newMessage = prompt("Відредагувати повідомлення:", req.message);
                          if (newMessage) {
                            const updated = requests.map(r =>
                              r.id === req.id ? { ...r, message: newMessage } : r
                            );
                            setRequests(updated);
                            localStorage.setItem("volunteerRequests", JSON.stringify(updated));
                          }
                        }}
                      >
                        ✏️ Редагувати
                      </button>
                      <button
                        onClick={() => {
                          const confirmed = window.confirm("Ви дійсно хочете видалити запит?");
                          if (confirmed) {
                            const updated = requests.filter((r) => r.id !== req.id);
                            setRequests(updated);
                            localStorage.setItem("volunteerRequests", JSON.stringify(updated));
                          }
                        }}
                      >
                        🗑️ Видалити
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>У вас ще немає запитів 😿</p>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default VolunteerDashboard;
