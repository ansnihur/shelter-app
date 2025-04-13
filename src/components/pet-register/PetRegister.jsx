import React, { useState } from "react";
import "../register/Register.scss";
import { useUser } from "../../context/UserContext";

const PetRegister = () => {
  const [isOwnAnimal, setIsOwnAnimal] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const { user } = useUser();

  const handleSwitch = (type) => {
    setIsOwnAnimal(type === "own");
  };

  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const newPet = {
      id: Date.now(),
      name: formData.get("name") || "Невідомий",
      age: formData.get("age") || "",
      sex: formData.get("sex"),
      kind: formData.get("kind"),
      health: formData.get("health") || "",
      breed: formData.get("breed") || "",
      description: formData.get("description") || "",
      location: formData.get("location"),
      image: "", // можна додати логіку для обробки зображень
      shelterEmail: user?.email || "",
    };

    const pets = JSON.parse(localStorage.getItem("pets")) || [];
    pets.push(newPet);
    localStorage.setItem("pets", JSON.stringify(pets));

    form.reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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

      <form className="registration__form" onSubmit={handleSubmit}>
        {isOwnAnimal ? (
          <>
            <input type="text" name="name" placeholder="Ім’я тварини*" required />
            <input type="text" name="age" placeholder="Вік*" required />
            <input type="text" name="sex" placeholder="Стать*" required />
            <input type="text" name="kind" placeholder="Вид тварини (пес/кіт/інше)*" required />
            <input type="text" name="health" placeholder="Стан здоров’я*" required />
            <input type="text" name="breed" placeholder="Порода" />
            <textarea name="description" placeholder="Опис тварини"></textarea>
            <input type="text" name="location" placeholder="Локація перебування*" required />
            <input
              type="text"
              name="phone"
              placeholder="Ваш номер телефону*"
              value={phone}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, "");
                setPhone(digitsOnly);
              }}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              required
            />
            <input type="file" />
          </>
        ) : (
          <>
            <div className="registration__select-wrapper">
              <select>
                <option value="">Оберіть притулок, в який хочете здати тварину</option>
                <option value="1">Хвостики Львова</option>
                <option value="2">Гуцульська Лапа</option>
                <option value="3">Хвостики</option>
                <option value="4">Лапка Добра</option>
                <option value="5">Милосердя</option>
                <option value="6">Теплі Руки</option>
                <option value="7">Вірний Друг</option>
                <option value="8">Надія</option>
              </select>
            </div>
            <input type="text" name="sex" placeholder="Стать*" required />
            <input type="text" name="kind" placeholder="Вид тварини (пес/кіт/інше)*" required />
            <input type="text" name="location" placeholder="Локація перебування*" required />
            <input
              type="text"
              name="phone"
              placeholder="Ваш номер телефону*"
              value={phone}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, ""); // Видаляє всі НЕцифри
                setPhone(digitsOnly);
              }}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              required
            />

            <input type="file" />
          </>
        )}

        <button type="submit" className="registration__submit">
          Зареєструвати
        </button>
      </form>

      {showToast && (
        <div className="toast">
          ✅ Хвостик зареєстрований! Згодом ми зв'яжемося з Вами щодо узгодження передачі. 🐶
        </div>
      )}
    </div>
  );
};

export default PetRegister;
