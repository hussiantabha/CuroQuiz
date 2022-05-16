import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QuizContext } from "../reducers/quizReducer";
import { question as data } from "../data/suitsData";
import { businessData } from "../data/businessData";
import DisplayResults from "../components/DisplayResults";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Results = () => {
  const { quizState, dispatch } = useContext(QuizContext);
  const location = useLocation();
  const fromPath = location.state.pathname;
  const navigate = useNavigate();
  const correct = quizState.suitsAnswers.filter((item1) =>
    data.some((item2) => item1 === item2.correctAnswer)
  );
  const businessCorrectAnswers = quizState.busissAnswers.filter((item1) =>
    businessData.some((item2) => item1 === item2.correctAnswer)
  );
  return (
    <>
      <Navbar />
      <section>
        <main className="results-top-container">
          <div>
            {fromPath === "/suits-quiz" ? (
              <h4>
                correct answers {correct.length}/{data.length}
              </h4>
            ) : (
              <h4>
                correct answers {businessCorrectAnswers.length}/
                {businessData.length}
              </h4>
            )}
          </div>
          <div>
            <h4>
              Points:{" "}
              {fromPath === "/suits-quiz"
                ? `${correct.length * 50}`
                : `${businessCorrectAnswers.length * 50}`}
            </h4>
          </div>
        </main>
        <DisplayResults
          data={fromPath === "/suits-quiz" ? data : businessData}
          suitsCorrectAnswers={correct}
          businessCorrectAnswers={businessCorrectAnswers}
        />
        <div className="btn-center">
          <button
            className="btn btn-primary-outline"
            onClick={() =>
              fromPath === "/suits-quiz"
                ? navigate("/suits-quiz")
                : navigate("/startup-quiz")
            }
          >
            ReTake Test
          </button>
        </div>
      </section>
    </>
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
