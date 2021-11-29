import React from "react";
import ChartComp from "./ChartComp";
import Graph from "./Graph";
import Rainfall from "./rainfall";

function Location({ data, num, weatherData }) {
  //getting depth data from the json
  const depthData = data.map((item) => {
    return { created_at: item.created_at, field: item.depth };
  });
  //getting rainfall data from the json
  const rainData = data.map((item) => {
    return { created_at: item.created_at, field: item.rainfall };
  });
  //getting waterspeed data from the json
  const waterData = data.map((item) => {
    return { created_at: item.created_at, field: item.waterspeed };
  });
  //condition for alert

  const alertState = data.filter((d) => {
    return (
      Number(d.depth) < 10 &&
      Number(d.rainfall) === 1 &&
      Number(d.waterspeed) >= 1000
    );
  });

  return (
    <div className="main">
      <h2>Location {num}</h2>
      <div id="location">
        {/*graphs for depth rainfall waterspeed*/}
        <ChartComp chartData={depthData} title="Depth" />
        <ChartComp chartData={rainData} title="RainWater" />
        <ChartComp chartData={waterData} title="WaterSpeed" />
      </div>
      <div id="bottomgraph">
        {/*predicton graph */}
        <Graph data={data} />
        {/*weather */}
        <Rainfall weatherData={weatherData} alert={alertState.length > 0} />
      </div>
    </div>
  );
}

export default Location;
