import React from "react";

import "./styles/main.css";

import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from "./pages";
import { Progress } from "./components";

const App = () => {
  return (
    <div className="App">
      <Welcome/>
      <Progress currentPage={0} sale="0"/>
      <StepOne/>
      <Progress currentPage={1} sale="5"/>
      <StepTwo/>
      <Progress currentPage={2} sale="10"/>
      <StepThree/>
      <Progress currentPage={3} sale="15"/>
      <StepFour/>
      <Thanks/> 
    </div>
  );
};

export default App;
