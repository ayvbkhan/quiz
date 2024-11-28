import React from "react";
import { Button } from "../components";

const emojiVariants = [
  { id: 1, imgSrc: "/img/laugh.png", alt: "laugh", text: "Ваш ответ 1" },
  { id: 2, imgSrc: "/img/hearts.png", alt: "hearts", text: "Ваш ответ 2" },
  { id: 3, imgSrc: "/img/smirk.png", alt: "smirk", text: "Ваш ответ 3" },
  { id: 4, imgSrc: "/img/fright.png", alt: "fright", text: "Ваш ответ 4" },
];

export const StepThree = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              {emojiVariants.map(({ id, imgSrc, alt, text }) => (
                <li className="variant-wrapper" key={id}>
                  <input required type="radio" name="variant" id={`variant-${id}`} />
                  <label htmlFor={`variant-${id}`}>
                    <img src={imgSrc} alt={alt} />
                    <p>{text}</p>
                  </label>
                </li>
              ))}
            </ul>
            <Button type="button" disabled id="next-btn" text="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};
