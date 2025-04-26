// import React from "react";
// import "./main.css";

// const Main = ({ diceNumber, rollDice, resetGame, setShowRules, rotate }) => {
//   return (
//     <div className="main">
//       <div className="conntent">
//         {/* Dice Image - Updates based on diceNumber & rotates on click */}
//         <img
//           src={`/src/assets/pic${diceNumber}.png`}
//           alt="Dice"
//           onClick={rollDice}
//           className={rotate ? "rotate" : ""}
//         />

//         {/* Buttons */}
//         <button className="btn1" onClick={resetGame}>Reset Score</button>
//         <button className="btn2" onClick={() => setShowRules(true)}>Show Rules</button>
//       </div>
//     </div>
//   );
// };

// export default Main;


import React from "react";
import "./main.css";

const Main = ({ diceNumber, rollDice, resetGame, setShowRules, rotate }) => {
  return (
    <div className="main">
      <div className="conntent">
        {/* Dice Image - Updates based on diceNumber & rotates on click */}
        <img
          src={`/src/assets/pic${diceNumber}.jpg`}
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

