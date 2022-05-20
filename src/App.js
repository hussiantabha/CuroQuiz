import "./App.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar />
      <section className="quiz-card-section-container">
        <div className="quiz-card-container">
          <Link to="/rules" state={{ from: "/suits-quiz" }}>
            <div className="quiz-img-container">
              <img src="../assets/suits.jpg" className="quiz-img" alt="Suits" />
            </div>
            <div className="quiz-content-container">
              <h2>Suits Quiz</h2>
              <p>Take this quiz to test yourself</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
        <div className="quiz-card-container">
          <Link to="/rules" state={{ from: "/startup-quiz" }}>
            <div className="quiz-img-container">
              <img
                src="../assets/startup.jpg"
                className="quiz-img"
                alt="startups"
              />
            </div>
            <div className="quiz-content-container">
              <h2>Startup Quiz</h2>
              <p>Are you a startup geek like me? Take this quiz</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
        <div className="quiz-card-container">
          <Link to="/rules" state={{ from: "/ipl-quiz" }}>
            <div className="quiz-img-container">
              <img src="../assets/ipl.jpg" className="quiz-img" alt="ipl" />
            </div>
            <div className="quiz-content-container">
              <h2>IPL Quiz</h2>
              <p>Are you a IPL fan like me? Take this quiz</p>
              <span>5 questions</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default App;
