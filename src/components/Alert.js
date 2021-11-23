import React, { useState } from "react";

function Alert({ alert }) {
  return (
    <>
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
      <div
        className="alert-text"
        style={{
          backgroundColor: "green",
          display: alert ? "none" : "block",
        }}
      >
        <h4>NO FLOOD ALERT</h4>
      </div>
      <div
        className="alert-text"
        style={{
          backgroundColor: "red",
          display: alert ? "block" : "none",
        }}
      >
        <h4> FLOOD ALERT</h4>
      </div>
    </>
  );
}

export default Alert;
