import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { iplData as data } from "../data/iplData";
import { useNavigate, useLocation } from "react-router-dom";
import { QuizContext } from "../reducers/quizReducer";
const IplQuiz = () => {
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(data[quizQuestion]);
  const { quizState, dispatch } = useContext(QuizContext);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch({
      type: "iplQuiz",
      payload: { value: answers },
    });
    if (quizQuestion === data.length) {
      navigate("/results", { state: location });
      setQuizQuestion(0);
    } else {
      setCurrentQuestion(data[quizQuestion]);
    }
  }, [quizQuestion]);
  console.log(quizState);
  return (
    <>
      <Navbar />
      <section className="quiz-question-modal">
        <div className="quiz-question-container">
          <p className="quiz-question">{currentQuestion.question}</p>
          <div className="quiz-option-container">
            {currentQuestion.options.map((item) => {
              return (
                <button
                  key={item}
                  className="btn btn-primary-outline"
                  onClick={() => {
                    setAnswers((prevState) => [...prevState, item]);

                    setQuizQuestion((prev) => prev + 1);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setQuizQuestion((prev) => prev + 1)}
          >
            Skip
          </button>
        </div>
      </section>
    </>
  );
};

export default IplQuiz;
