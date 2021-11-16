import React, { useState } from "react";
import Alert from "./Alert";

function Rainfall({ weatherData }) {
  return (
    <div id="rain">
      <h2>Weather Details</h2>
      <p>humidity : {weatherData.humidity}</p>
      <p>pressure : {weatherData.pressure}</p>
      <p>temperature : {weatherData.temp}</p>

      <Alert />
    </div>
  );
}

export default Rainfall;
