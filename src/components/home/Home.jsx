import React from 'react';
import './home.css';

const Home = ({ toggle }) => {
  return (
    <div className="container">
      <div>
        <img src="/src/assets/dices 1.png" alt="Dice Game" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
};

export default Home;

