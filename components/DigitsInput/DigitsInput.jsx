import React, { useState } from "react";
// import "./styles/DigitsInput.css";
import Grids from "../Grids/Grids";

const DigitsInput = () => {
  let InitialState = {
    numHundreds: "",
    numTens: "",
    numUnits: "",
    carryHundreds: "",
    carryTens: "",
    currentItem: "",
    noOfDigits: ""
  };
  const [state, setState] = useState({ InitialState });

  // generate random numbers, pass inputs for number of rows and digits later ( n,d )
  const generateNumbers = (n, d) => {
    let numbers = {
      numHundreds: "",
      numTens: "",
      numUnits: "",
      carryHundreds: "",
      carryTens: "",
      currentItem: "",
      noOfDigits: 2
    };
    numbers.num1 = Math.floor(Math.random() * 90 + 10);
    numbers.num2 = Math.floor(Math.random() * 90 + 10);
    setState(numbers);
  };

  // const { noOfDigits } = state;
  const handlChange = e => {
    let newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
  };

  return (
    <div className="row container-fluid digits-input">
      <div className="input-group mb-3 number-of-digits">
        <input
          type="text"
          id="noOfDigits"
          className="form-control nod"
          placeholder="Number of digits"
          aria-label="Number of digits"
          aria-describedby="basic-addon2"
          // value={noOfDigits}
          value="2"
          onChange={handlChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => generateNumbers()}
          >
            Go
          </button>
        </div>
      </div>
      <div className="grids-container">
        <Grids numbers={state}></Grids>
      </div>
      <style jsx>{`
        .digits-input {
          display: grid;
          // grid-gap: 30vmin;
          grid-template-areas:
            "header calculations calculations "
            " .      calculations calculations";
        }

        .number-of-digits {
          width: 15vw;
          grid-area: header;
        }

        .grids-container {
          grid-area: calculations;
        }

        .nod {
          text-align: center;
        }

        @media only screen and (max-width: 600px) {
          .digits-input {
            display: block;
          }
          .number-of-digits {
            width: 100%;
          }
          .grids-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default DigitsInput;
