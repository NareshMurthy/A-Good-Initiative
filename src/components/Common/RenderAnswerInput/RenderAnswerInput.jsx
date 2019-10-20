import React from "react";
import "./styles/RenderAnswerInput.css";

const RenderAnswerInput = props => {
  const { value, handleChange, placeholder, id, handleClick } = props;
  return (
    <input
      type="number"
      id={id}
      value={value}
      onClick={handleClick}
      placeholder={placeholder}
      aria-label={placeholder}
      onChange={handleChange}
      min="0"
      max="9"
    />
  );
};

export default RenderAnswerInput;
