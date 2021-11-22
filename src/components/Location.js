import React from "react";
import ChartComp from "./ChartComp";
import Graph from "./Graph";
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
  const alertState = data.filter((d) => {
    return d.depth > 20 && d.rainfall > 1000 && d.waterspeed === 1;
  });
  return (
    <div className="main">
      <h2>Location {num}</h2>
      <div id="location">
        <ChartComp chartData={depthData} title="Depth" />
        <ChartComp chartData={rainData} title="RainWater" />
        <ChartComp chartData={waterData} title="WaterSpeed" />
      </div>
      <div id="bottomgraph">
        <Graph data={data} />
        <Rainfall weatherData={weatherData} alert={alertState.length > 0} />
      </div>
    </div>
  );
}

export default Location;
