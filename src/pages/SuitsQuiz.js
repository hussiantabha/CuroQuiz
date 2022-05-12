import React, { useContext, useEffect, useState } from "react";
import { question as data } from "../suitsData";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { QuizContext } from "../quizReducer";

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
    if (quizQuestion === data.length) {
      navigate("/results", { state: location });
      setQuizQuestion(0);
    } else {
      setCurrentQuestion(data[quizQuestion]);
    }
  }, [quizQuestion]);
  const [answers, setAnswers] = useState([]);
  console.log(quizState);
  return (
    <>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((item) => {
        return (
          <>
            <button
              className="btn btn-primary-outline"
              onClick={() => {
                dispatch({ type: "suitQuiz", payload: { value: item } });
                setQuizQuestion((prev) => prev + 1);
              }}
            >
              {item}
            </button>
          </>
        );
      })}
      <button onClick={() => setQuizQuestion((prev) => prev + 1)}>Skip</button>
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
