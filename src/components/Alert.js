import React, { useState } from "react";

function Alert() {
  const [alert, setAlert] = useState(false);
  return (
    <div id="alert">
      <div
        className="off"
        style={{ backgroundColor: alert ? "white" : "green" }}
      ></div>
      <div className="on"></div>
    </div>
  );
}

export default Alert;
