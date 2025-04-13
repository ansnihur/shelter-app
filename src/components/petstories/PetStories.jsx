import React from "react";
import "./PetStories.scss";
import { Link } from "react-router-dom";

const stories = [
  {
    id: 1,
    text: "Колись у притулку її називали 'Буря', бо вона завжди влаштовувала веселий переполох у вольєрах. Але одного зимового ранку в притулок зайшла дівчина, яка лише хотіла погрітись...",
  },
  {
    id: 2,
    text: "Боню ніхто не забирав, бо він завжди виглядав... ну... трохи занадто серйозно 🧐. Але одного разу в притулок прийшла пара, яка обожнювала драму...",
  },
  {
    id: 3,
    text: "Цезар втік із притулку тричі. Не тому що погано, просто він шукав когось, схожого на себе! І от, коли його привезли на фестиваль усиновлення, він побачив чоловіка в блакитному худі. Пес стрибнув на нього, облизав обличчя, а тоді вирвався і побіг…",
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
            <Link to='/petstories' className="pet-stories__link">
              Дізнатись більше <span className="arrow">↗</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetStories;
