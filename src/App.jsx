import { useState } from "react";
import Home from "./components/home/Home";
import Play from "./components/play1/Play";
import './index.css'
import Rules from "./components/Rules/Rules";

function App() {
  const [game, setGame] = useState(false);

  const togglePlay = () => {
    setGame((prev) => !prev);
  };

  return (
    <>
      {game ? <Play toggle={togglePlay} /> : <Home toggle={togglePlay} />}
      
    </>
  );
}

export default App;




