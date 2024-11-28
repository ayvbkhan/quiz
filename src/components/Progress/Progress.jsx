import React from "react";

export const Progress = ({ currentPage, sale }) => {
  const steps = 4;

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">{ sale }%</span>
      </div>
      <div className="indicator__progressbar">
        {Array.from({ length: steps }, (_, index) => (
          <div
            key={index}
            className={`indicator__unit 
                        ${index < currentPage ? "_completed" : ""} 
                        ${index === currentPage - 1 ? "_active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};