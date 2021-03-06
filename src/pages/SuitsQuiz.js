import React, { useContext, useEffect, useState } from "react";
import { question as data } from "../data/suitsData";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { QuizContext } from "../reducers/quizReducer";
import Navbar from "../components/Navbar";
const SuitsQuiz = () => {
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(data[quizQuestion]);
  const navigate = useNavigate();
  const { quizState, dispatch } = useContext(QuizContext);
  const location = useLocation();
  useEffect(() => {
    setCurrentQuestion(data[quizQuestion]);
  }, []);
  const end = () => {
    console.log("in end");
    <Navigate to="/results" state={{ from: location }} />;
  };
  useEffect(() => {
    dispatch({ type: "suitQuiz", payload: { value: answers } });
    if (quizQuestion === data.length) {
      navigate("/results", { state: location });
      setQuizQuestion(0);
    } else {
      setCurrentQuestion(data[quizQuestion]);
    }
  }, [quizQuestion]);
  const [answers, setAnswers] = useState([]);
  console.log(quizState);
  console.log(answers);
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

export default SuitsQuiz;
{
  /* {data.map(({ question, options, correctAnswer }) => {
        return (
          <>
            <h5>{question}</h5>
            {options.map((item) => {
              return (
                <>
                  <input type="radio" name="question" value={item} /> {item}
                  <button className="btn btn-primary-outline">{item}</button>
                </>
              );
            })}
          </>
        );
      })} */
}
