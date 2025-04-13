import React, { useState } from "react";
import "./FindPet.scss";
import { petData } from "../../data/petData";

import { useUser } from "../../context/UserContext";

export default function FindPet({ searchQuery = "", activeFilter = "" }) {
  const { favorites, toggleFavorite } = useUser();
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (id) => {
    setActivePopup((prev) => (prev === id ? null : id));
  };

  const filteredPets = petData
    .filter((pet) =>
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.kind.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (activeFilter === "Вік") return a.age - b.age;
      if (activeFilter === "Вид") return a.kind.localeCompare(b.kind);
      if (activeFilter === "Локація") return a.location.localeCompare(b.location);
      return 0;
    });

  return (
    <div className="find-pet">
      {filteredPets.map((pet) => (
        <div key={pet.id} className="pet-wrapper">
          <div
            className="pet-card"
            onClick={() => togglePopup(pet.id)}
          >
            <img src={pet.image} alt={pet.name} className="pet-img" />

            <div className="pet-footer">
              <span>{pet.name}, {pet.age} {pet.age === 1 ? "рік" : pet.age < 5 ? "роки" : "років"}</span>
              <button
                className={`like-button ${favorites.includes(pet.id) ? "liked" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(pet.id);
                }}
              >
                ♥
              </button>
            </div>
          </div>

          {activePopup === pet.id && (
            <div className="pet-popup visible">
              <p><strong>🐱🐶Вид тварини:</strong> {pet.kind}</p>
              <p><strong>🚺 Стать:</strong> {pet.sex}</p>
              <p><strong>✅Стан здоров’я:</strong> {pet.health}</p>
              <p><strong>🐾Порода:</strong> {pet.breed}</p>
              <p><strong>🌍Локація:</strong> {pet.location}</p>
              <p><strong>✨Опис:</strong> {pet.description}</p>
              <p><strong>🏠Притулок:</strong> {pet.shelter}</p>
              <p><strong>📞Контакти:</strong> 096 000 00 00</p>
              <div className="pet-actions">
                <a href="tel:0960000000">
                  <button>Зв’язатися</button>
                </a>
                <button onClick={() => setActivePopup(null)}>Приховати</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
