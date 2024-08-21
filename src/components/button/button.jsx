import "./button.css";

const Button = ({ label, handler }) => {
  return (
    <button className={`individual-button`} onClick={handler}>
      {label}
    </button>
  );
};

export default Button;
