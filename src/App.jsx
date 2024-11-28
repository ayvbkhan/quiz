import React from "react";
import { Route, Routes } from "react-router";
import "./styles/main.css";
import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks, Step } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/step" element={<Step />}>
          <Route index path="1" element={<StepOne />} />
          <Route path="2" element={<StepTwo />} />
          <Route path="3" element={<StepThree />} />
          <Route path="4" element={<StepFour />} />
        </Route>
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
};

export default App;
