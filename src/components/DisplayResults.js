import React, { useContext } from "react";
import { QuizContext } from "../reducers/quizReducer";
import { businessData } from "../data/businessData";

const DisplayResults = ({
  data,
  suitsCorrectAnswers,
  businessCorrectAnswers,
}) => {
  const { quizState, dispatch } = useContext(QuizContext);
  return (
    <section className="results-container">
      {data.map(({ question, correctAnswer, options }) => {
        return (
          <div key={question} className="result-quiz-answer-container-card">
            <p>{question}</p>
            <div className="result-quiz-answer-option-container">
              {options.map((item) => {
                return (
                  <button
                    key={item}
                    className={
                      correctAnswer.includes(item)
                        ? " btn btn-success"
                        : data === businessData
                        ? quizState.busissAnswers.includes(item)
                          ? correctAnswer.includes(item)
                            ? "btn btn-success"
                            : "btn btn-danger"
                          : "btn btn-primary-outline"
                        : quizState.suitsAnswers.includes(item)
                        ? correctAnswer.includes(item)
                          ? " btn btn-success"
                          : "btn btn-danger"
                        : "btn btn-primary-outline"
                    }
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DisplayResults;
