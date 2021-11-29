import React, { useState } from "react";
import Alert from "./Alert";

function Rainfall({ weatherData, alert }) {
  return (
    <div id="rain">
      <h2>Current Weather Info</h2>
      <div className="linkout">
        <a href=" http://rifkhan955.pythonanywhere.com/" target="_blank">
          <button>Predict Water Level</button>
        </a>
        <a href=" http://rifkhan9555.pythonanywhere.com/" target="_blank">
          <button>Predict flood Status</button>
        </a>
      </div>
      <div className="weather">
        <div className="weather-item">
          <p>
            <span>humidity :</span> {weatherData.humidity} %
          </p>
        </div>
        <div className="weather-item">
          <p>
            <span>pressure : </span>
            {weatherData.pressure} hPa
          </p>
        </div>

        <div className="weather-item">
          <p>
            <span> temperature :</span> {(weatherData.temp - 273.15).toFixed(2)}{" "}
            <span>&#8451;</span>
          </p>
        </div>
      </div>

      <Alert alert={alert} />
    </div>
  );
}

export default Rainfall;
