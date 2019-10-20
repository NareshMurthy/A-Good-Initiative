import React from "react";
import "./styles/Keypad.css";

const Keypad = ({ handleClick }) => {
  let buttons = [
    ["danger", "cat", "brown"],
    ["secondary", "dog", "grey"],
    ["danger", "dove", "pink"],
    ["warning", "dragon", "orange"],
    ["info", "fish", "blue"],
    ["warning", "horse", "yellow"],
    ["secondary", "kiwi-bird", "silver"],
    ["danger", "paw", "red"],
    ["success", "otter", "green"],
    ["dark", "crow", "black"],
    ["dark", "backspace", "black"],
    ["dark", "eraser", "black"]
  ];

  return (
    <div className="row keypad mt-4 ">
      {buttons.map((curr, index) => {
        let className = "btn btn-outline-" + curr[0];
        let iconName = "fas fa-" + curr[1];

        let currIndex = index + 1;
        if (index === 9) currIndex -= 10;
        if (index === 10) currIndex = "CE";
        if (index === 11) currIndex = "C";
        return index % 3 === 0 ? (
          <React.Fragment key={index}>
            <div className="w-100"></div>
            <div className="col-3 keys ml-1">
              <button
                className={className}
                value={currIndex}
                onClick={() => handleClick(currIndex)}
              >
                <p>{currIndex}</p>
                <i className={iconName} style={{ color: curr[2] }}></i>
              </button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment key={index}>
            <div className="col-3 keys ml-1">
              <button
                className={className}
                value={currIndex}
                onClick={() => handleClick(currIndex)}
              >
                <p>{currIndex}</p>
                <i className={iconName} style={{ color: curr[2] }}></i>
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Keypad;
