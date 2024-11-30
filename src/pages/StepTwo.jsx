import React from "react";
import { Button, Option } from "../components";

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
        <div className="variants-quiz">
          <div className="question">
            <h2>2. Занимательный вопрос</h2>
            <ul className="variants">
              {answers.map(({ id, answer }) => (
                <Option id={id} answer={answer} key={id} />
              ))}
            </ul>
            <Button disabled id="next-btn" text="Далее" />
          </div>
        </div>
  );
};
