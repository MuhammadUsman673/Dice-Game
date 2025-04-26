  import React from 'react';
  import './home.css';
  import diceImage from '../../assets/dices 1.png'; // TWO dots (../../)

  const Home = ({ toggle }) => {
    return (
      <div className="container">
        <div>
          <img src={diceImage} alt="Dice Game" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <button onClick={toggle}>Play Now</button>
        </div>
      </div>
    );
  };

  export default Home;
