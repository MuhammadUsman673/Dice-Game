// import React, { useState } from "react";
// import "./play.css";
// import Main from "../main/Main";

// const Play = ({ toggle }) => {
//   const arrNumber = [1, 2, 3, 4, 5, 6];
//   const [number, setNumber] = useState(null);
//   const [diceNumber, setDiceNumber] = useState(1);
//   const [score, setScore] = useState(0);
//   const [error, setError] = useState("");
//   const [rotate, setRotate] = useState(false);
//   const [showRules, setShowRules] = useState(false);

//   const rollDice = () => {
//     if (number === null) {
//       setError("You have not selected any number");
//       return;
//     }
//     setError("");
//     setRotate(true);
//     setTimeout(() => {
//       const newDiceNumber = Math.floor(Math.random() * 6) + 1;
//       setDiceNumber(newDiceNumber);
//       setRotate(false);
//       if (newDiceNumber === number) {
//         setScore(score + newDiceNumber);
//       } else {
//         setScore(score - 2);
//       }
//     }, 500);
//   };

//   const resetGame = () => {
//     setScore(0);
//     setNumber(null);
//     setDiceNumber(1);
//     setError("");
//   };

//   return (
//     <>
//       <div className="containerr">
//         <div className="content">
//           <h1>{score}</h1>
//           <p>Total Score</p>
//         </div>
//         <div className="box-container">
//           {error && <p className="error-message">{error}</p>}
//           <div className="box">
//             {arrNumber.map((value, i) => (
//               <p
//                 key={i}
//                 onClick={() => setNumber(value)}
//                 className={value === number ? "selected" : ""}
//               >
//                 {value}
//               </p>
//             ))}
//           </div>
//           <p className="select-number">Select Number</p>
//         </div>
//       </div>

//       {/* Pass diceNumber and rollDice function to Main */}
//       <Main
//         diceNumber={diceNumber}
//         rollDice={rollDice}
//         resetGame={resetGame}
//         setShowRules={setShowRules}
//         rotate={rotate}
//       />

//       {showRules && (
//         <div className="rules-modal">
//           <h2>Game Rules</h2>
//           <ul>
//             <li>Select a number</li>
//             <li>Click the dice to roll</li>
//             <li>If your number matches the dice roll, you gain points</li>
//             <li>If wrong, you lose 2 points</li>
//           </ul>
//           <button onClick={() => setShowRules(false)}>Close</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Play;


import React, { useState } from "react";
import "./play.css";
import Main from "../main/Main";

const Play = ({ toggle }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [number, setNumber] = useState(null);
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [rotate, setRotate] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (number === null) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    setRotate(true);
    setTimeout(() => {
      const newDiceNumber = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(newDiceNumber);
      setRotate(false);
      if (newDiceNumber === number) {
        setScore(score + newDiceNumber);
      } else {
        setScore(score - 2);
      }
    }, 500);
  };

  const resetGame = () => {
    setScore(0);
    setNumber(null);
    setDiceNumber(1);
    setError("");
  };

  return (
    <>
      <div className="containerr">
        <div className="content">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="box-container">
          {error && <p className="error-message">{error}</p>}
          <div className="box">
            {arrNumber.map((value, i) => (
              <p
                key={i}
                onClick={() => setNumber(value)}
                className={value === number ? "selected" : ""}
              >
                {value}
              </p>
            ))}
          </div>
          <p className="select-number">Select Number</p>
        </div>
      </div>

      {/* Pass diceNumber and rollDice function to Main */}
      <Main
        diceNumber={diceNumber}
        rollDice={rollDice}
        resetGame={resetGame}
        setShowRules={setShowRules}
        rotate={rotate}
      />

      {showRules && (
        <div className="rules-modal">
          <h2>Game Rules</h2>
          <ul>
            <li> 1. Select a number</li>
            <li> 2. Click the dice to roll</li>
            <li> 3. If your number matches the dice roll, you gain points</li>
            <li> 4. If wrong, you lose 2 points</li>
          </ul>
          <button onClick={() => setShowRules(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default Play;
