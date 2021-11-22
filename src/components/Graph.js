import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Graph({ data }) {
  const [csvData, setCsvData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  let csvarray = [];
  const rainData = data.map((d) => d.depth);

  const readcsv = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/AslamJM/Personal-Portfolio-Template/main/predicted-data.csv"
    );
    const data = await res.text();
    const rows = data.split(/\r?\n/);
    rows.forEach((row) => {
      const arr = row.split(",");
      csvarray.push(Number(arr[1]));
    });
    setCsvData(csvarray);
  };

  const findMatch = (arr) => {
    let max = Math.max(rainData);
    const index = arr.findIndex((d) => Math.abs(d - max) <= 5);
    const slice = arr.slice(index, index + 9);
    setFiltered(slice);
  };

  useEffect(() => {
    readcsv();
    findMatch(csvData);
  }, []);

  return (
    <div className="graph">
      <Line
        data={{
          labels: filtered.map((d, index) => {
            return index;
          }),
          datasets: [
            {
              label: "prediction data",
              fill: false,
              lineTension: 0.5,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: filtered,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "old data",
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

export default Graph;
