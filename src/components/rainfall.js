import React, { useState } from "react";
import Alert from "./Alert";

function Rainfall({ weatherData, alert }) {
  return (
    <div id="rain">
      <h2>Weather Details</h2>
      <div className="weather">
        <div>
          <p>
            <span>humidity :</span> {weatherData.humidity}
          </p>
        </div>
        <div>
          <p>
            <span>pressure : </span>
            {weatherData.pressure}
          </p>
        </div>

        <div>
          <p>
            <span> temperature :</span> {weatherData.temp}
          </p>
        </div>
      </div>

      <Alert alert={alert} />
    </div>
  );
}

export default Rainfall;
