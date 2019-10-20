import React from "react";
import react from "../../../images/react.svg";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer ">
      Built with
      <img
        src={react}
        alt="reactlogo"
        className="ml-1 mr-1"
        width="25px"
        height="25px"
      ></img>
      by{"     "}
      <a href="www.google.com">Achalabharathi Public Charitable Trust &reg;</a>
    </div>
  );
};

export default Footer;
