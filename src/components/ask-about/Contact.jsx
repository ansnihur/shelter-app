import React from "react";
import './Contact.scss';
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../../context/UserContext";
// import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
    // const navigate = useNavigate();
    // const { user } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
      
        if (form.checkValidity()) {
          const request = {
            id: Date.now(),
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
          };
      
          const existing = JSON.parse(localStorage.getItem("volunteerRequests")) || [];
          localStorage.setItem("volunteerRequests", JSON.stringify([...existing, request]));
      
          form.reset();
          alert("✅ Запит надіслано!");
        } else {
          form.reportValidity();
        }
      };      

    return (
        <div className="contact">
            <div className="heading">
                <h2 className="heading-text">Запитуй</h2>
                <h4 className="heading-descripton">Знайшли свого хвостика, пишіть нам!</h4>
            </div>

            <div className="contact__form-wrapper">
                <form className="contact__form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="form__label">Ім’я*</label>
                    <input type="text" id="name" name="name" className="form__input" required />

                    <label htmlFor="email" className="form__label">Email*</label>
                    <input type="email" id="email" name="email" className="form__input" required />

                    <label htmlFor="message" className="form__label">Повідомлення*</label>
                    <textarea id="message" name="message" className="form__textarea" required />

                    <button type="submit" className="form__link-button">Зв’язатися з притулками</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
