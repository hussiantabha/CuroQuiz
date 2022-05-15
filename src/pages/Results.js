import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { QuizContext } from "../reducers/quizReducer";
import { question as data } from "../suitsData";
const Results = () => {
  const { quizState, dispatch } = useContext(QuizContext);
  const location = useLocation();
  const fromPath = location.state.pathname;
  const correct = quizState.suitsAnswers.filter((item1) =>
    data.some((item2) => item1 === item2.correctAnswer)
  );

  return (
    <div>
      <h4>correct answers {correct.length}/3</h4>
      {data.map(({ question, correctAnswer, options }) => {
        return (
          <div key={question}>
            <p>{question}</p>
            {options.map((item) => {
              return (
                <button
                  key={item}
                  className={
                    correctAnswer.includes(item)
                      ? "btn-success"
                      : quizState.suitsAnswers.includes(item)
                      ? correctAnswer.includes(item)
                        ? "btn-success"
                        : "btn-danger"
                      : "btn-primary-outline"
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Results;
// quizState.suitsAnswers.filter((item1) => data.some((item2) => item1 === item2));
// correct.includes(item) ? "btn-success" : quizState.suitsAnswers
// quizState.suitsAnswers.includes(item)
//                       ? correct.includes(item)
//                         ? "btn-success"
//                         : "btn-danger"
//                       : "btn-primary-outline"
// correct.includes(item)
//                       ? "btn-success"
//                       : quizState.suitsAnswers.includes(item)
//                       ? correct.includes(item)
//                         ? "btn-success"
//                         : "btn-danger"
//                       : "btn-primary-outline"
