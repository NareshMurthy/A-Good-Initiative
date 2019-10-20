import React from "react";
// import "./styles/RenderAnswerInput.css";

const RenderAnswerInput = props => {
  const { value, handleChange, placeholder, id, handleClick } = props;
  return (
    <React.Fragment>
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
      <style jsx>{`
        input {
          width: 100%;
          text-align: right;
          display: block;
          width: 100%;
          padding: 0.375rem 0;
          font-size: 1rem;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          // background-clip: padding-box;
          border: 1px solid yellowgreen;
          outline: none;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
      `}</style>
    </React.Fragment>
  );
};

export default RenderAnswerInput;
