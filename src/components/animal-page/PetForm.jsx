import React from 'react';
import './PetForm.scss';

const PetForm = () => {
  return (
    <section className="pet-form">
      <div className="pet-form__left">
        <p>
          Маєш <span className="highlight">конкретні побажання</span> або<br></br><span className="highlight">не можеш знайти</span> хвостатого, який тобі по душі?
        </p>
      </div>
      <div className="pet-form__right">
        <p>Не проблема! Заповни форму і ми знайдемо хвостика саме для тебе 🧡</p>
        <a
          href="https://forms.gle/1xfR2jbkwebgba8p7"
          target="_blank"
          rel="noopener noreferrer"
          className="pet-form__btn"
        >
          Тицяй сюди
        </a>
      </div>
    </section>
  );
};

export default PetForm;
