import React from "react";
import './Contact.scss';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div class="contact">
            <div className="heading">
                <h2 className="heading-text">Запитуй</h2>
                <h4 className="heading-descripton">Знайшли свого хвостика, пишіть нам!</h4>
            </div>

            <div className="contact__form-wrapper">
                <form className="contact__form">
                <label htmlFor="name" className="form__label">Ім’я*</label>
                <input type="text" id="name" name="name" className="form__input" placeholder="Ім’я*" required />

                <label htmlFor="email" className="form__label">Email*</label>
                <input type="email" id="email" name="email" className="form__input" placeholder="Email" required />

                <label htmlFor="message" className="form__label">Повідомлення*</label>
                <textarea id="message" name="message" className="form__textarea" placeholder="Повідомлення" required />

                <Link to="/somewhere" className="form__link">
                    <button type="submit" className="form__link-button">Зв’язатися зі мною</button>
                </Link>
                </form>
            </div>
        </div>
    );
}

export default Contact;