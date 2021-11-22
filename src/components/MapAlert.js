import React, { useState, useEffect } from "react";

function MapAlert({ left, bottom, data }) {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const alertState = data.find((d) => {
      return d.depth > 20 && d.rainfall > 1000 && d.waterspeed === 1;
    });
    setAlert(alertState);
  }, [data]);

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
