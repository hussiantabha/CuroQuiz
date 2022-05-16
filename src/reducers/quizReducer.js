import React, { createContext, useReducer } from "react";

const QuizContext = createContext({});

const QuizContextProvider = ({ children }) => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "suitQuiz": {
        return {
          ...state,
          suitsAnswers: action.payload.value,
        };
      }
      case "businessQuiz": {
        return {
          ...state,
          busissAnswers: action.payload.value,
        };
      }
    }
  };
  const [quizState, dispatch] = useReducer(reducerFunc, {
    suitsAnswers: [],
    busissAnswers: [],
  });
  return (
    <QuizContext.Provider value={{ quizState, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizContextProvider };
