import React, { useState } from "react";

function Alert({ alert }) {
  return (
    <div id="alert">
      <div
        className="off"
        style={{ backgroundColor: alert ? "white" : "green" }}
      ></div>
      <div
        className="on"
        style={{ backgroundColor: alert ? "red" : "white" }}
      ></div>
    </div>
  );
}

export default Alert;
