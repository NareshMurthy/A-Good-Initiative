import React, { useState, useEffect } from "react";
import Keypad from "../Keypad/Keypad";
import Swal from "sweetalert2";

import RenderAnswerInput from "../Common/RenderAnswerInput/RenderAnswerInput";

const Grids = props => {
  const { numbers } = props;

  const [state, setState] = useState(numbers);

  useEffect(() => {
    setState(numbers);
  }, [numbers]);

  const { num1, num2 } = numbers;
  if (num1) {
    // to split the numbers into grids
    let num1String = num1.toString();
    let num2String = num2.toString();
    let num1Arr = num1String.split("");
    let num2Arr = num2String.split("");

    const handleChange = e => {
      let result = { ...state };
      if (e.target.value.length <= 1) {
        result[e.target.id] = e.target.value;
        setState(result);
      }
    };

    const { numHundreds, numTens, numUnits, carryHundreds, carryTens } = state;

    const verifyAnswer = () => {
      const checkNull = num => {
        return num ? num : 0;
      };
      let expected = num1 + num2;
      let answer =
        checkNull(numHundreds) + checkNull(numTens) + checkNull(numUnits);

      let title;
      let text;
      let imageUrl;
      let imageAlt;

      if (expected === parseInt(answer)) {
        title = "Yay!";
        text = "Great, you are correct!";
        imageUrl = "/images/haha.svg";
        imageAlt = "Success";
      } else {
        title = "Oh Oh!";
        text = "Try again";
        imageUrl = "/images/sad.svg";
        imageAlt = "Wrong";
      }

      Swal.fire({
        title: title,
        text: text,
        imageUrl: imageUrl,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: imageAlt,
        animation: true
      });
    };

    const clearAll = () => {
      let newState = {
        numHundreds: "",
        numTens: "",
        numUnits: "",
        carryHundreds: "",
        carryTens: ""
      };
      setState(newState);
    };

    const handleClick = index => {
      let newState = { ...state };
      if (index === "C") clearAll();
      else {
        if (document.activeElement.tagName === "INPUT") {
          let x = document.activeElement.id;
          newState.currentItem = x;
          setState(newState);
        } else {
          let x = newState.currentItem;
          newState[x] = index.toString();
          setState(newState);
        }
      }
    };

    return (
      <div>
        <div className="grids row matrix">
          <div className="col-3 cell-input mb-2 ml-1">
            <RenderAnswerInput
              id="carryHundreds"
              handleChange={handleChange}
              value={carryHundreds}
              handleClick={handleClick}
              placeholder="Carry"
            ></RenderAnswerInput>
          </div>
          <div className="col-3 cell-input mb-2 ml-1">
            <RenderAnswerInput
              id="carryTens"
              handleChange={handleChange}
              handleClick={handleClick}
              value={carryTens}
              placeholder="Carry"
            ></RenderAnswerInput>
          </div>
          <div className=" col-3 mb-2 ml-1"></div>

          <div className="w-100"></div>
          <div className=" col-3 mb-1 ml-1"></div>
          <div className="col-3 cell mb-1 ml-1">{num1Arr[0]}</div>
          <div className="col-3 cell mb-1 ml-1">{num1Arr[1]}</div>
          <div className="w-100"></div>
          <div className=" col-3 mb-2 ml-1">
            <button
              className="btn btn-info"
              type="button"
              onClick={() => verifyAnswer()}
            >
              +
            </button>
          </div>

          <div className="col-3 cell mb-2 ml-1">{num2Arr[0]}</div>
          <div className="col-3 cell mb-2 ml-1">{num2Arr[1]}</div>
          <div className="w-100"></div>
          <div className="col-3 cell-input mb-2 ml-1">
            <RenderAnswerInput
              id="numHundreds"
              handleChange={handleChange}
              value={numHundreds}
              handleClick={handleClick}
              placeholder="Hundreds"
            ></RenderAnswerInput>
          </div>
          <div className="col-3 cell-input mb-2 ml-1">
            <RenderAnswerInput
              id="numTens"
              handleChange={handleChange}
              value={numTens}
              handleClick={handleClick}
              placeholder="Tens"
            ></RenderAnswerInput>
          </div>
          <div className="col-3 cell-input mb-2 ml-1">
            <RenderAnswerInput
              id="numUnits"
              handleChange={handleChange}
              value={numUnits}
              handleClick={handleClick}
              placeholder="Units"
            ></RenderAnswerInput>
          </div>
        </div>
        <Keypad handleClick={handleClick}></Keypad>
        <style jsx>{`
          .grids {
            margin-left: 30vmin;
            background-color: rgb(247, 252, 253);
            padding-left: 40px;
            padding-top: 5px;
          }

          .cell {
            background: lightsalmon;
            border: 1px solid yellow;
            text-align: right;
            height: 7vmin;
            padding: 8px 15px;
          }
          .cell-input {
            padding: 0;
          }
          .carry {
            width: 12vw;
          }
          .matrix {
            width: 50vw;
          }
          .btn-info {
            width: 100%;
            height: 7vmin;
          }
          @media only screen and (max-width: 900px) {
            .grids {
              margin-left: 10vmin;
            }
          }
          @media only screen and (max-width: 600px) {
            .matrix {
              width: 100%;
            }
            .grids {
              margin: 0;
            }
          }
        `}</style>
      </div>
    );
  } else {
    return null;
  }
};

export default Grids;
