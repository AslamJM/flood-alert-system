import React, { useState } from "react";

function MapAlert({ left, bottom }) {
  const [alert, setAlert] = useState(false);
  return (
    <div
      className="alertbox"
      style={{
        left: left,
        bottom: bottom,
        backgroundColor: alert ? "red" : "green",
      }}
    ></div>
  );
}

export default MapAlert;
