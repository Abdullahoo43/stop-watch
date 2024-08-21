import { useState } from "react";

import "./App.css";

import TimeContainer from "./components/time-container/time-container";
import ButtonContainer from "./components/button-container/button-container";

function App() {
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  return (
    <div className="App">
      <TimeContainer miliSeconds={miliSeconds} />
      <ButtonContainer
        intervalId={intervalId}
        miliSeconds={miliSeconds}
        setIntervalId={setIntervalId}
        setMiliSeconds={setMiliSeconds}
      />
    </div>
  );
}

export default App;
