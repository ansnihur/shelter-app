import React, { useState } from "react";
import "./FindPet.scss";
import kitty1 from '../../assets/images/kitty1.png';
import kitty2 from '../../assets/images/kitty2.png';
import kitty3 from '../../assets/images/kitty3.png';
import kitty4 from '../../assets/images/kitty4.png';
import doggy1 from '../../assets/images/doggy1.png';
import doggy2 from '../../assets/images/doggy2.png';
import doggy3 from '../../assets/images/doggy3.png';
import doggy4 from '../../assets/images/doggy4.png';

export default function FindPet({ searchQuery = "", activeFilter = "" }) {
  const [liked, setLiked] = useState([]);
  const [activePopup, setActivePopup] = useState(null);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePopup = (id) => {
    setActivePopup((prev) => (prev === id ? null : id));
  };

  const petData = [
    { name: "Вася", kind: 'Кіт', sex: 'Чоловіча', age: 8, health: 'Здоровий', breed: 'Пан без породи', location: 'Рава-Руська', image: kitty1, shelter: "Надія", description: "Цього котика ми побачили випадково — він сидів під старим навісом біля закинутого складу на промзоні, коли ішов сильний дощ." },
    { name: "Калiпсо", kind: 'Кішка', sex: 'Жіноча', age: 2, health: 'Стерилізована, здорова', breed: 'Пані без породи', location: 'Львів', image: kitty2, shelter: "Хвостики Львова", description: "Каліпсо врятували з підвалу багатоповерхівки, де вона народила кошенят. Вона дуже лагідна й любить сидіти поряд із людиною." },
    { name: "Пряня", kind: 'Кішка', sex: 'Жіноча', age: 4, health: 'Здорова', breed: 'Європейська короткошерста', location: 'Самбір', image: kitty3, shelter: "Лапка Добра", description: "Пряню знайшли на смітнику ще маленьким кошеням. Вона виросла ніжною муркотухою й завжди приносить тепло в дім." },
    { name: "Тоша", kind: 'Кіт', sex: 'Чоловіча', age: 5, health: "Стерилізований, є схильність до сечокам'яної хвороби", breed: 'Шотландський прямовухий', location: "Черкаси", image: kitty4, shelter: "Хвостики", description: "Тошу підкинули до воріт притулку в коробці разом з іграшкою. Хоч і великий за розміром, але дуже ніжний за характером!" },
    { name: "Джулі", kind: 'Собака', sex: 'Жіноча', age: 3,  health: 'Вакцинована, стерилізована', breed: 'Метис вівчарки', location: 'Червоноград',image: doggy1, shelter: "Милосердя", description: "Джулі знайшли ще щеням біля автобусної зупинки. Вона дуже активна, слухняна й любить гратися з м’ячиком!" },
    { name: "Персефона", kind: 'Собака', sex: 'Жіноча', age: 2, health: 'Здорова', breed: 'Метис коргі', location: 'Львів', image: doggy2, shelter: "Вірний Друг", description: "Персефону знайшли в лісі поблизу міста. Вона дуже розумна, обожнює людей та ідеально підійде для квартири!" },
    { name: "Неро", kind: 'Собака', sex: 'Чоловіча', age: 7, health: 'Вакцинований, здоровий', breed: 'Лабрадор мікс', location: 'Стрий', image: doggy3, shelter: "Гуцульська Лапа", description: "Неро врятували з вулиці у зимовий вечір. Незважаючи на свої розміри, він дуже лагідний та слухняний компаньйон." },
    { name: "Сем", kind: 'Собака', sex: 'Чоловіча', age: 7, health: 'Здоровий', breed: 'Хаскі', location: 'Дрогобич', image: doggy4, shelter: "Теплі Руки", description: "Сема підкинули до притулку після того, як його сім’я переїхала. Він активний, дуже товариський та обожнює прогулянки!" }
  ];

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
      {filteredPets.map((pet, index) => (
        <div key={index} className="pet-wrapper">
          <div
            className="pet-card"
            onClick={() => togglePopup(index)}
          >
            <img src={pet.image} alt={pet.name} className="pet-img" />

            <div className="pet-footer">
              <span>{pet.name}, {pet.age} {pet.age === 1 ? "рік" : pet.age < 5 ? "роки" : "років"}</span>
              <button
                className={`like-button ${liked.includes(index) ? "liked" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(index);
                }}
              >
                ♥
              </button>
            </div>
          </div>

          {activePopup === index && (
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

