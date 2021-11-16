import React from "react";
import MapAlert from "./MapAlert";

function MapStatic() {
  return (
    <div id="map">
      <MapAlert left="15.7cm" bottom="2.4cm" />
      <MapAlert left="16.6cm" bottom="4cm" />
      <MapAlert left="15.4cm" bottom="7.1cm" />
      <MapAlert left="15.5cm" bottom="10.6cm" />
      <MapAlert left="17.7cm" bottom="11.3cm" />
    </div>
  );
}

export default MapStatic;
