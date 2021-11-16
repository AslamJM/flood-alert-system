import React, { useState, useEffect } from "react";
import "./App.css";
import Location from "./components/Location";
import MapStatic from "./components/MapStatic";

const URL1 =
  "https://api.thingspeak.com/channels/1552300/feeds.json?api_key=84AIJF4C5LPA88QG&results=10";

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  const [weatherData, setWeatherData] = useState({});

  const fetchWeather = async () => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=7.644&lon=80.835&appid=06264407251afce3963cbdbac53c447d"
    );
    const data = await res.json();
    setWeatherData(data.main);
  };

  const fetchData = async (url, num) => {
    const res = await fetch(url);
    const data = await res.json();
    const chartdata = data.feeds.map((feed) => {
      return {
        created_at: feed.created_at,
        depth: feed.field1,
        rainfall: feed.field2,
        waterspeed: feed.field3,
      };
    });
    switch (num) {
      case 1:
        setData1(chartdata);
      case 2:
        setData2(chartdata);
      case 3:
        setData3(chartdata);
      case 4:
        setData4(chartdata);
      case 5:
        setData5(chartdata);
    }
  };

  useEffect(() => {
    fetchData(URL1, 1);
    fetchWeather();
  }, []);

  return (
    <div className="App">
      <h1>Flood Alert System</h1>
      <MapStatic />
      <Location data={data1} num="1" weatherData={weatherData} />
      <Location data={data1} num="2" weatherData={weatherData} />
      <Location data={data1} num="3" weatherData={weatherData} />
      <Location data={data1} num="4" weatherData={weatherData} />
      <Location data={data1} num="5" weatherData={weatherData} />
    </div>
  );
}

export default App;
