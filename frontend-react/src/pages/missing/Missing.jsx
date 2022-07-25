import React from "react";
import miss from "../../img/miss.svg";
import "./missing.css";

const Missing = () => {
  return (
    <div className="missing-page">
      <div className="center-missing">
        <img className="missing-img" src={miss} alt="miss" />
        <h1 className="missing-h1">404 Page Does Not Exist!</h1>
        <h3 className="missing-h3">
          {" "}
          The link may be broken, or the page may have been removed. Check to
          see if the link you're trying to open is correct.
        </h3>
      </div>
    </div>
  );
};

export default Missing;
