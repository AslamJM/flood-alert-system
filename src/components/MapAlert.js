import React, { useState, useEffect } from "react";

function MapAlert({ left, bottom, data }) {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const alertState = data.filter((d) => {
      return d.depth < 10 && d.rainfall === 1 && d.waterspeed <= 1000;
    });
    console.log(alertState);
    setAlert(alertState.length > 0);
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
