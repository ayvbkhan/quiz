import React from "react";
import { Button, Option, Progress } from "../components";

export const StepTwo = () => {

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
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <Progress currentPage={1} /> 
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {answers.map(({ id, answer }) => (
                <Option id={id} answer={answer} key={id} />
              ))}
            </ul>
            <Button disabled id="next-btn" text="Далее" />
          </div>
        </div>
      </div>
    </div>
  );
};
