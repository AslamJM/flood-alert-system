import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function ChartComp({ chartData, title }) {
  return (
    <div id="chart">
      <Line
        data={{
          labels: chartData.map((i) => i.created_at),
          datasets: [
            {
              label: title,
              fill: false,
              lineTension: 0.5,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: chartData.map((i) => i.field),
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: title,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default ChartComp;
