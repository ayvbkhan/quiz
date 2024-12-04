import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "../components";
import { useNavigate } from "react-router";

export const onSubmit = (e, navigate) => {
  e.preventDefault();
  const name = document.querySelector("#username").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("tel", phone);

  console.log("Current sessionStorage:", Object.fromEntries(Object.entries(sessionStorage)));
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

  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

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
              errormessage="Поле имени не может быть пустым"
              onInput={onNameInputHandler} 
              ref={firstInputRef}
            />
            <Input
              label="Номер телефона"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+998 9- --- -- --"
              errormessage="Введите номер в правильном формате"
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
