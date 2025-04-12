import React, { useState } from "react";
import "../register/Register.scss";

const PetRegister = () => {
  const [isOwnAnimal, setIsOwnAnimal] = useState(true);

  const handleSwitch = (type) => {
    setIsOwnAnimal(type === "own");
  };

  return (
    <div className="registration">
      <h1 className="registration__title">Реєстрація хвостатого</h1>

      <div className="registration__toggle">
        <label>
          <input
            type="radio"
            checked={isOwnAnimal}
            onChange={() => handleSwitch("own")}
          />
          Я маю дані тварини
        </label>
        <label>
          <input
            type="radio"
            checked={!isOwnAnimal}
            onChange={() => handleSwitch("found")}
          />
          Я знайшов тварину
        </label>
      </div>

      <form className="registration__form">
        {isOwnAnimal ? (
          <>
            <input type="text" placeholder="Ім’я тварини*" required />
            <input type="text" placeholder="Вік*" required />
            <input type="text" placeholder="Стать*" required />
            <input type="text" placeholder="Вид тварини (пес/кіт/інше)*" required />
            <input type="text" placeholder="Стан здоров’я*" required />
            <input type="text" placeholder="Порода" />
            <textarea placeholder="Опис тварини"></textarea>
            <input type="text" placeholder="Локація перебування*" required />
            <input type="file" />
          </>
        ) : (
          <>
            <div className="registration__select-wrapper">
              <select>
                <option value="">Оберіть притулок, в який хочете здати тварину</option>
                <option value="1">Хвостики Львова</option>
                <option value="2">Гуцульська Лапа</option>
                <option value="2">Хвостики</option>
                <option value="2">Лапка Добра</option>
                <option value="2">Милосердя</option>
                <option value="2">Теплі Руки</option>
                <option value="2">Вірний Друг</option>
                <option value="2">Надія</option>
              </select>
            </div>
            <input type="text" placeholder="Стать*" required />
            <input type="text" placeholder="Вид тварини (пес/кіт/інше)*" required />
            <input type="text" placeholder="Локація перебування*" required />
            <input type="file" />
          </>
        )}

        <button type="submit" className="registration__submit">
          Зареєструвати
        </button>
      </form>
    </div>
  );
};

export default PetRegister;