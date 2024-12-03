import React, { useState } from "react";
import { Button } from "../components";
import { useNavigate } from "react-router";

const levelVariants = [1, 2, 3, 4, 5];

export const StepFour = () => {
  const navigate = useNavigate(); 
  const [isLevelSelected, setIsLevelSelected] = useState(false); 

  const onLevelSelect = () => {
    setIsLevelSelected(true); 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isLevelSelected) {
      navigate("/thanks"); 
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <form onSubmit={onSubmit}>
            <ul className="level-variants">
              {levelVariants.map(level => (
                <li className="variant-wrapper" key={level}>
                  <input
                    type="radio"
                    name="variant"
                    id={`variant-${level}`}
                    onChange={() => onLevelSelect(level)} />
                  <label htmlFor={`variant-${level}`}>{level}</label>
                </li>
              ))}
            </ul>
              <Button type="submit" id="next-btn" text="Далее" disabled={!isLevelSelected} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
