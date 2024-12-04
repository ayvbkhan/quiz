import React from "react";
import { Button } from "../components";

export const Thanks = () => {
  const handleClick = () => {
    window.open("https://tehnikum.school/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <Button id="get-link" text="Получить ссылку" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
