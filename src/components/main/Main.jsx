import React from "react";
import "./main.css";

// Import images
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";

const Main = ({ diceNumber, rollDice, resetGame, setShowRules, rotate }) => {
  // Dynamically select the correct image based on diceNumber
  let diceImage;
  if (diceNumber === 1) diceImage = pic1;
  else if (diceNumber === 2) diceImage = pic2;
  else if (diceNumber === 3) diceImage = pic3;
  else if (diceNumber === 4) diceImage = pic4;
  else if (diceNumber === 5) diceImage = pic5;
  else if (diceNumber === 6) diceImage = pic6;

  return (
    <div className="main">
      <div className="content">
        {/* Dice Image - Updates based on diceNumber & rotates on click */}
        <img
          src={diceImage} // Use the imported image
          alt="Dice"
          onClick={rollDice}
          className={rotate ? "rotate" : ""}
        />

        {/* Buttons */}
        <button className="btn1" onClick={resetGame}>Reset Score</button>
        <button className="btn2" onClick={() => setShowRules(true)}>Show Rules</button>
      </div>
    </div>
  );
};

export default Main;
