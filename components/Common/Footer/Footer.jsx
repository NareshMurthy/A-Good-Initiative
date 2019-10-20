import React from "react";

const Footer = () => {
  return (
    <div className="footer ">
      Built with
      <img
        src="/images/react.svg"
        alt="reactlogo"
        className="ml-1 mr-1"
        width="25px"
        height="25px"
      ></img>
      by{"     "}
      <a href="www.google.com">Achalabharathi Public Charitable Trust &reg;</a>
      <style jsx>{`
        .footer {
          background: rgb(42, 46, 53);
          color: white;
          height: 7vh;
          width: 100%;
          font-size: 15px;
          padding: 10px 10px;
        }

        .footer a {
          color: rgb(3, 207, 244);
          font-size: 15px;
        }
      `}</style>
    </div>
  );
};

export default Footer;
