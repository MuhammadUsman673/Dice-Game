import React from 'react'
import './rules.css'
const Rules = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [number, setNumber] = useState();
  
    return (
      <>
        <div className="containerr">
          <div className="content">
            <h1>0</h1>
            <p>Total Score</p>
          </div>
  
          <div className="box-container">
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
  
        <Main />
      </>
    );
  };

export default Rules
