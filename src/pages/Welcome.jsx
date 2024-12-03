import React, { useState } from "react";
import { Button, Input } from "../components";
import { useNavigate } from "react-router";

export const onSubmit = (e, navigate) => {
  e.preventDefault();
  navigate("/step/1");
};

export const Welcome = () => {
  const navigate = useNavigate();

  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const onNameInputHandler = (e) => {
    const value = e.target.value.trim();
    if (value.length >= 3) {
      setIsNameValid(true)
      return
    }

    if (value.length < 3) {
      setIsNameValid(false)
      return
    }
  };

  const onPhoneInputHandler = (e) => {

    const value = e.target.value.trim();
    if (value.length === 13) {
      setIsPhoneValid(true)
      return
    }

    if (value.length < 13) {
      setIsPhoneValid(false)
      return
    }
  };

  const isButtonDisabled = !isNameValid || !isPhoneValid;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form
            className="welcome__form"
            onSubmit={(e) => onSubmit(e, navigate)}
          >
            <Input
              label="Имя"
              type="text"
              name="username"
              id="username"
              placeholder="Ваш ответ"
              errorMessage="Поле имени не может быть пустым"
              onInput={onNameInputHandler} 
            />
            <Input
              label="Номер телефона"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+998 9- --- -- --"
              errorMessage="Введите номер в правильном формате"
              onInput={onPhoneInputHandler} 
            />
            <Button
              type="submit"
              id="next-btn"
              text="Далее"
              disabled={isButtonDisabled} 
            />
          </form>
        </div>
      </div>
    </div>
  );
};
