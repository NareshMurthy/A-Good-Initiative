import React from "react";
import DigitsInput from "../DigitsInput/DigitsInput";

const Dashboard = () => {
  return (
    <div className=" dashboard">
      <DigitsInput></DigitsInput>
      <style jsx>{`
        .dashboard {
          height: 90vh;
          margin-top: 3vh;
          margin-left: 50px;
          width: 90vw;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
