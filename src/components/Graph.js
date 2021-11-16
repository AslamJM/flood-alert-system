import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function Graph() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.thingspeak.com/channels/1552300/feeds.json?api_key=84AIJF4C5LPA88QG&results=10"
      );
      const data = await res.json();
      setChartData({
        labels: data.feeds.map((feed) => feed.created_at),
        datasets: [
          {
            label: "Depth",
            data: data.feeds.map((feed) => feed.field1),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          },
        ],
      });
    };

    fetchData();
  });
  const [chartData, setChartData] = useState({});

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
}

export default Graph;
