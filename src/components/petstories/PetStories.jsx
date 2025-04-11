import React from "react";
import "./PetStories.scss";
import { Link } from "react-router-dom";

const stories = [
  {
    id: 1,
    text: "Мія жила у притулку майже рік. Грайлива, допитлива, але трохи норовлива — не кожному вона давала себе погладити. Вона ніби чекала «свого» господаря. І дочекалася! Коли до нас прийшла сім’я з двома дітьми, Мія одразу залізла на плече молодшої доньки й замуркотіла.",
    link: "/story/mia"
  },
  {
    id: 2,
    text: "Ральф потрапив до нашого притулку після того, як його знайшли на околиці міста — наляканим, худеньким і з переляканим поглядом. Особливо він боявся грому: кожен дощовий день для нього був великим випробуванням. Але все змінилося, коли його побачила пані Олена.",
    link: "/story/ralph"
  },
  {
    id: 3,
    text: "Тимка принесли до нас зовсім крихітним — його знайшли в коробці біля супермаркету. Маленьке кошеня, яке навіть не вміло ще нявкати, відразу стало улюбленцем волонтерів. Він ріс і набирався сил, не зважаючи на маленький зріст і трохи коротенький хвостик.",
    link: "/story/timka"
  }
];

const PetStories = () => {
  return (
    <div className="pet-stories">
      <div className="heading">
            <h2 className="heading-text">Pet Stories</h2>
            <h4 className="heading-descripton">Тут ви можете дізнатися історії наших хвостатих, яких забрали додому</h4>
        </div>

      <div className="pet-stories__cards">
        {stories.map((story) => (
          <div key={story.id} className="pet-stories__card">
            <p className="pet-stories__text">{story.text}</p>
            <Link to={story.link} className="pet-stories__link">
              Дізнатись більше <span className="arrow">↗</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetStories;
