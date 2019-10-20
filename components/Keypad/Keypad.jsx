import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faDog,
  faDove,
  faDragon,
  faFish,
  faHorse,
  faKiwiBird,
  faPaw,
  faOtter,
  faCrow,
  faBackspace,
  faEraser
} from "@fortawesome/free-solid-svg-icons";

const Keypad = ({ handleClick }) => {
  let buttons = [
    ["danger", faCat, "brown"],
    ["secondary", faDog, "grey"],
    ["danger", faDove, "pink"],
    ["warning", faDragon, "orange"],
    ["info", faFish, "blue"],
    ["warning", faHorse, "yellow"],
    ["secondary", faKiwiBird, "silver"],
    ["danger", faPaw, "red"],
    ["success", faOtter, "green"],
    ["dark", faCrow, "black"],
    ["dark", faBackspace, "black"],
    ["dark", faEraser, "black"]
  ];

  return (
    <div className="row keypad mt-4 ">
      {buttons.map((curr, index) => {
        let className = "btn btn-outline-" + curr[0];
        let icon = "fas fa-cat" + curr[1];
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
                <div className="faIcons">
                  <FontAwesomeIcon
                    icon={curr[1]}
                    style={{ color: curr[2], fontSize: "8vmin" }}
                  />
                </div>
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
                <div className="faIcons">
                  <FontAwesomeIcon
                    icon={curr[1]}
                    style={{ color: curr[2], fontSize: "8vmin" }}
                  />
                </div>
              </button>
            </div>
          </React.Fragment>
        );
      })}
      <style jsx>{`
        .keys {
          height: 12vmin;
          margin-bottom: 2px;
        }

        .keys button {
          width: 100%;
          height: 100%;
          display: flex;
          align-content: center;
          justify-content: space-evenly;
        }
        .keys p {
          font-size: 6vmin;
        }

        @media only screen and (max-width: 900px) {
          .faIcons {
            display: none;
          }
        }

        @media only screen and (max-width: 600px) {
          .keypad {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Keypad;
