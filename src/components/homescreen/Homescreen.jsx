import React from "react";
import './Homescreen.scss';
import paw from '../../assets/images/homescreen.svg';
import { Link } from "react-router-dom";

const Homescreen = () => {
    return (
        <div className="homescreen">
            <div className="homescreen-text">
                <h1 className="homescreen-text-h1" data-aos="zoom-in">
                    Вони чекають не дива!<br />
                    Вони чекають на тебе!
                </h1>
                <h4 className="homescreen-text-h4">
                    Кожна тваринка в нашому має свою історію — хтось був загублений,
                    хтось покинутий, а хтось просто шукає другий шанс. Коли ви вирішуєте
                    всиновити, ви не тільки рятуєте життя, а й знаходите справжнього друга,
                    який завжди чекатиме біля дверей, радітиме кожній хвилині з вами та
                    любитиме вас без умов.
                </h4>
                <Link to="/contact">
                    <button className="homescreen-text-button">
                        Зв'яжись з нами
                    </button>
                </Link>
            </div>
            <div className="homescreen-image" data-aos="zoom-in">
                <img src={paw} className="homescreen-image-png" alt="Paw" />
            </div>
        </div>
    );
};

export default Homescreen;
