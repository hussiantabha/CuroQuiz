import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <Link to={"/"} className="colorWhite">
          <h2>CuroQuiz</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
