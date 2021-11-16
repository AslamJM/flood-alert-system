import React from "react";
import ChartComp from "./ChartComp";
import Rainfall from "./rainfall";

function Location({ data, num, weatherData }) {
  const depthData = data.map((item) => {
    return { created_at: item.created_at, field: item.depth };
  });
  const rainData = data.map((item) => {
    return { created_at: item.created_at, field: item.rainfall };
  });
  const waterData = data.map((item) => {
    return { created_at: item.created_at, field: item.waterspeed };
  });
  return (
    <div className="main">
      <h2>Location {num}</h2>
      <div id="location">
        <ChartComp chartData={depthData} title="Depth" />
        <ChartComp chartData={rainData} title="RainWater" />
        <ChartComp chartData={waterData} title="WaterSpeed" />
        <Rainfall weatherData={weatherData} />
      </div>
    </div>
  );
}

export default Location;
