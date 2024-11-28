import React from "react";
import { Button } from "../components";

const levelVariants = [1, 2, 3, 4, 5];

export const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              {levelVariants.map(level => (
                <li className="variant-wrapper" key={level}>
                  <input required type="radio" name="variant" id={`variant-${level}`} />
                  <label htmlFor={`variant-${level}`}>{level}</label>
                </li>
              ))}
            </ul>
            <Button type="button" id="next-btn" disabled text="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};
