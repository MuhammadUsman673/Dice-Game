import React from "react";
import "./main.css";

// Import images
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";

// Map dice numbers to images
const diceImages = [null, pic1, pic2, pic3, pic4, pic5, pic6]; // Index 0 unused

const Main = ({ diceNumber, rollDice, resetGame, setShowRules, rotate }) => {
  // Select image with fallback
  const diceImage = diceImages[diceNumber] || pic1; // Fallback to pic1 if invalid

  return (
    <div className="main">
      <div className="content">
        {/* Dice Image */}
        <img
          src={diceImage}
          alt={`Dice showing ${diceNumber || "unknown"}`}
          onClick={rollDice}
          className={rotate ? "rotate" : ""}
        />

        {/* Buttons */}
        <button
          className="btn1"
          onClick={resetGame}
          aria-label="Reset game score"
        >
          Reset Score
        </button>
        <button
          className="btn2"
          onClick={() => setShowRules(true)}
          aria-label="Show game rules"
        >
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default Main;