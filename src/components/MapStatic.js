import React from "react";
import MapAlert from "./MapAlert";

function MapStatic({ data }) {
  return (
    <div id="map">
      <MapAlert left="15.7cm" bottom="2.4cm" data={data} />
      <MapAlert left="16.6cm" bottom="4cm" data={data} />
      <MapAlert left="15.4cm" bottom="7.1cm" data={data} />
      <MapAlert left="15.5cm" bottom="10.6cm" data={data} />
      <MapAlert left="17.7cm" bottom="11.3cm" data={data} />
    </div>
  );
}

export default MapStatic;
