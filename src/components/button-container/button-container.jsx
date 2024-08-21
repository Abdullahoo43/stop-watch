import Button from "../button/button";

import "./button-container.css";

const ButtonContainer = ({
  intervalId,
  miliSeconds,
  setIntervalId,
  setMiliSeconds,
}) => {
  const startTime = () => {
    const id = setInterval(() => {
      setMiliSeconds((prevCount) => {
        return prevCount + 1;
      });
    }, 10);
    setIntervalId(id);
  };

  const resetTime = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setMiliSeconds(0);
  };

  const pauseTime = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div className="buttons-container">
      <Button
        label={intervalId ? "Pause" : miliSeconds === 0 ? "Start" : "Resume"}
        handler={intervalId ? pauseTime : startTime}
      />
      <Button label="Reset" handler={resetTime} />
    </div>
  );
};

export default ButtonContainer;
