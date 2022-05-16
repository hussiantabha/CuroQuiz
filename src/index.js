import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuitsQuiz from "./pages/SuitsQuiz";
import BusinessQuiz from "./pages/BusinessQuiz";
import { QuizContextProvider } from "./reducers/quizReducer";
import Results from "./pages/Results";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QuizContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/suits-quiz" element={<SuitsQuiz />} />
        <Route path="/startup-quiz" element={<BusinessQuiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </QuizContextProvider>
  </BrowserRouter>
);
