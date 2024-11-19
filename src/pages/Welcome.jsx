import React from "react";
import { Button, Input } from "../components";


export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form">
              <Input
                label="Имя"
                type="text"
                name="username"
                id="username"
                placeholder="Ваш ответ"
                errorMessage="Поле имени не может быть пустым"
              />
              <Input 
                label="Номер телефона"
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
                errorMessage="Введите номер в правильном формате"
              />
            <Button
              type="submit" id="next-btn" text="Далее" disabled
            />
          </form>
        </div>
      </div>
    </div>
  );
};
