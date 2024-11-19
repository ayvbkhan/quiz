import React from "react";

export const Progress = ({ currentPage }) => {
  const steps = 4;

  return (
    <div className="indicator__progressbar">
      {Array.from({ length: steps }, (_, index) => (
        <div
          key={index}
          className={`indicator__unit indicator__unit-${index + 1} ${
            index < currentPage ? "_active" : ""
          }`}
        ></div>
      ))}
    </div>
  );
};