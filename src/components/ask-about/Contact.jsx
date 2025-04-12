import React from "react";
import './Contact.scss';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        if (form.checkValidity()) {
            console.log("Форма відправлена!");

            form.reset();

            navigate("/somewhere");
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
                    <input type="text" id="name" name="name" className="form__input" placeholder="Ім’я" required />

                    <label htmlFor="email" className="form__label">Email*</label>
                    <input type="email" id="email" name="email" className="form__input" placeholder="Email" required />

                    <label htmlFor="message" className="form__label">Повідомлення*</label>
                    <textarea id="message" name="message" className="form__textarea" placeholder="Повідомлення" required />

                    <button type="submit" className="form__link-button">Зв’язатися зі мною</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
