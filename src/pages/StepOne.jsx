import React, { useState } from "react";
import { Button, Input } from "../components";
import { useNavigate } from "react-router";

export const StepOne = () => {

  const navigate = useNavigate();
  const [isAnswerValid, setIsAnswerValid] = useState(false);

  const onAnswerInputHandler = (e) => {
    const value = e.target.value.trim();
    if (value.length >= 1) { 
      setIsAnswerValid(true)
      return
    }
    
    if (value.length < 1) {
      setIsAnswerValid(false)
      return 
    }
  };

  const isButtonDisabled = !isAnswerValid;

  const onSubmit = (e) => {
    e.preventDefault();
    const answer = document.querySelector("input[name='answer']").value.trim();
    sessionStorage.setItem("question1", answer);
    console.log("Current sessionStorage:", Object.fromEntries(Object.entries(sessionStorage)));

    if (isAnswerValid) {
      navigate("/step/2");
    }
  };

  return (
    <div className="single-input-quiz">
      <div className="question">
        <h2>1. Занимательный вопрос</h2>
        <form onSubmit={(e) => onSubmit(e, navigate)}>
          <label className="input-wrapper">
            <Input
              required
              type="text"
              name="answer"
              placeholder="Ваш ответ"
              onInput={onAnswerInputHandler} 
            />
            <span id="error-message">
              Введите номер в правильном формате например
            </span>
          </label>
          <Button type="submit" id="next-btn" text="Далее" disabled={isButtonDisabled} />
        </form>
      </div>
    </div>
  );
};
