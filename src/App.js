//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import Scoreboard from './Scoreboard.js';
import Buttons from './Buttons.js';
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  console.log("render");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      {/* {Scoreboard({homeScore: homeScore, awayScore: awayScore})} */}
      <Scoreboard homeScore={homeScore} awayScore={awayScore}/>
      <Buttons homeScore={homeScore}
               awayScore={awayScore}
               setHomeScore={setHomeScore}
               setAwayScore={setAwayScore} />
    </div>
  );
}

export default App;
