import "./time-units.css";

const TimeUnit = ({ children, unit }) => {
  return (
    <div className={`unit-container`}>
      <p>{unit}</p>
      <p className={`time-unit`}>{children}</p>
    </div>
  );
};

export default TimeUnit;
