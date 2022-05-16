import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="quiz-card-section-container">
        <div className="quiz-card-container">
          <Link to="/suits-quiz">
            <div className="quiz-img-container">
              <img src="../assets/suits.jpg" className="quiz-img" />
            </div>
            <div className="quiz-content-container">
              <h2>Suits Quiz</h2>
              <p>Take this quiz to test yourself</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
        <div className="quiz-card-container">
          <Link to="/startup-quiz">
            <div className="quiz-img-container">
              <img src="../assets/startup.jpg" className="quiz-img" />
            </div>
            <div className="quiz-content-container">
              <h2>Startup Quiz</h2>
              <p>Are you a startup geek like me? Take this quiz</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default App;
