import React, { useState } from "react";
import { Button, Option } from "../components";
import { useNavigate } from "react-router";

export const StepTwo = () => {

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionSelect = (id) => {
    setSelectedOption(id); 
  };

  const isButtonDisabled = selectedOption === null;

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      sessionStorage.setItem("question2", selectedOption);

      console.log("Current sessionStorage:", Object.fromEntries(Object.entries(sessionStorage)));

      navigate("/step/3"); 
    }
  };

  const answers = [
    {
      id: '1',
      answer: 'Ваш ответ'
    },
    {
      id: '2',
      answer: 'Ваш ответ'
    },
    {
      id: '3',
      answer: 'Ваш ответ'
    },
    {
      id: '4',
      answer: 'Ваш ответ'
    }
  ]
  return (
        <div className="variants-quiz">
          <div className="question">
        <h2>2. Занимательный вопрос</h2>
        <form onSubmit={onSubmit}>
            <ul className="variants">
              {answers.map(({ id, answer }) => (
                <Option
                  id={id}
                  answer={answer}
                  key={id}
                  isSelected={selectedOption === id}
                  onClick={() => onOptionSelect(id)} />
              ))}
            </ul>
          <Button type="submit" id="next-btn" text="Далее" disabled={isButtonDisabled} />
        </form>
          </div>
        </div>
  );
};
