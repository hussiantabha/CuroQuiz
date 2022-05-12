import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <h1>CuroQuiz</h1>
      </div>
      <section className="quiz-card-section-container">
        <div className="quiz-card-container">
          <Link to="/suits-quiz">
            <div className="quiz-img-container">
              <img src="https://picsum.photos/320/180" />
            </div>
            <div className="quiz-content-container">
              <h2>Suits Quiz</h2>
              <p>Take this quiz to test yourself</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
        <div className="quiz-card-container">
          <Link to="/marvel-quiz">
            <div className="quiz-img-container">
              <img src="https://picsum.photos/320/180" />
            </div>
            <div className="quiz-content-container">
              <h2>Marvel Quiz</h2>
              <p>Take this quiz to test your MCU knowledge!</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default App;
