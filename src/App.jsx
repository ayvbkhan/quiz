import React from "react";

import "./styles/main.css";

import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Welcome/>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      <StepFour/>
      <Thanks/> 
    </div>
  );
};

export default App;
