import React from "react";
import "./Header.css";
var moment = require("moment");

const HeaderTitle = () => {
  const time = moment().format("MMMM Do YYYY, h:mm a");
  return (
    <div className="header-titles">
      <h4>Lambda School</h4>
      <p> @lambdaSchool · {time}</p>
    </div>
  );
};

export default HeaderTitle;
