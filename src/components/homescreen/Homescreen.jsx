import React from "react";
import './Homescreen.scss'
import paw from '../../assets/images/homescreen.png'

const Homescreen = () => {
    return (
        <div className="homescreen">
            <div className="homescreen-text">
                <h1 className="homescreen-text-h1">Вони чекають не дива!<br></br>
                Вони чекають на тебе!</h1>
                <h4 className="homescreen-text-h4">Кожна тваринка в нашому має свою історію — хтось був загублений, хтось покинутий, а хтось просто шукає другий шанс. Коли ви вирішуєте всиновити, ви не тільки рятуєте життя, а й знаходите справжнього друга, який завжди чекатиме біля дверей, радітиме кожній хвилині з вами та любити вас без умов.</h4>
                <button className="homescreen-text-button">
                    Зв'яжись з нами
                </button>
            </div>
            <div className="homescreen-image">
                <img src={paw} className="homescreen-image-png" alt="Paw" />
            </div>
        </div>
    );
}

export default Homescreen;