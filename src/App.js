import React, { useState, useEffect } from "react";
import "./App.css";
import Location from "./components/Location";
import MapStatic from "./components/MapStatic";

const URL1 = //sensor reading API
  "https://api.thingspeak.com/channels/1571022/feeds.json?api_key=JLRNSFA8WW23OD4F&results=10";

function App() {
  const [data1, setData1] = useState([]); //data for location 1
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [weatherData, setWeatherData] = useState({}); //data from weather

  const fetchWeather = async () => {
    //fetching current weather data
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=7.644&lon=80.835&appid=06264407251afce3963cbdbac53c447d"
    );
    const data = await res.json();
    setWeatherData(data.main);
  };

  const fetchData = async (url, num) => {
    //fetching latest sensor reading
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
        break;
      case 2:
        setData2(chartdata);
        break;
      case 3:
        setData3(chartdata);
        break;
      case 4:
        setData4(chartdata);
        break;
      case 5:
        setData5(chartdata);
        break;
      default:
    }
  };

  useEffect(() => {
    //refresh site
    const interval = setInterval(() => {
      fetchData(URL1, 1);
      fetchWeather();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>UNDER WATER SYSTEM</h1>
      </div>
      {/*passing the data to components */}
      {/* <MapStatic data={data1} /> */}
      {/*graphs for for locations */}
      <Location data={data1} num="1" weatherData={weatherData} />
      <Location data={data1} num="2" weatherData={weatherData} />
      <Location data={data1} num="3" weatherData={weatherData} />
      <Location data={data1} num="4" weatherData={weatherData} />
      <Location data={data1} num="5" weatherData={weatherData} />
    </div>
  );
}

export default App;
