import React, { useEffect, useReducer, useState } from "react";
import "./Css/weathercard.css";

// Custom Icons
// import RainIcon from "../res/rain.svg";
// import SunIcon from "../res/sun.svg";
// import SunInCloudIcon from "../res/sunCloud.svg";
// import LightRainIcon from "../res/lightRain.svg";
// import SnowIcon from "../res/snow.svg";
// import MistIcon from "../res/mist.svg";
// import ThunderIcon from "../res/thunder.svg";

export default function WeatherCard({
  weatherData,
  date,
  temp_c,
  temp_f,
  weatherImg,
  Img,
}) {
  const [temp, setTemp] = useState();
  const [isFarn, setFarn] = useState(false);
  const localDate = date;

  useEffect(() => {
    timeConverter();
    if (isFarn) {
      setTemp(convertTemp(temp_f));
    } else {
      setTemp(convertTemp(temp_c));
    }
  }, [isFarn, temp_c]);

  function convertTemp(temp) {
    temp = temp.toString();
    console.log("temp " + temp);
    if (temp.length > 4) {
      let tem = temp.toString();
      console.log("if " + tem);
      return tem[0] + tem[1] + temp[2];
    } else {
      let tem = temp.toString();
      console.log("else " + tem);
      return tem[0] + tem[1];
    }
  }

  function timeConverter() {
    let arr = localDate.split("-");
    let date = arr[2];
    let month = arr[1];
    return date + "/" + month;
  }
  function convertToF() {
    setFarn(!isFarn);
  }

  // const weatherIcon = (icon) => {
  //   let weatherImg;
  //   switch (icon) {
  //     case "Rain":
  //       console.log("rain");
  //       weatherImg = RainIcon;
  //       break;
  //     case "Sunny":
  //       console.log("sunny");
  //       weatherImg = SunIcon;
  //       break;

  //     case "Cloud":
  //       console.log("cloud");
  //       weatherImg = SunInCloudIcon;
  //       break;
  //     case "Partly cloudy":
  //       console.log("cloud");
  //       weatherImg = SunInCloudIcon;
  //       break;

  //     case "Patchy rain possible":
  //       console.log("light rain");
  //       weatherImg = LightRainIcon;
  //       break;
  //     case "Snow":
  //       console.log("snow");
  //       weatherImg = SnowIcon;
  //       break;
  //     case "Lightning":
  //       console.log("light");
  //       weatherImg = ThunderIcon;
  //       break;
  //     case "Mist":
  //       console.log("mist");
  //       weatherImg = MistIcon;
  //       break;
  //     default:
  //       break;
  //   }
  //   return <img src={weatherImg} alt="" />;
  // };

  return (
    <div className="weather-card-container">
      <div className="time-container">
        <p className="date">{timeConverter()}</p>
      </div>
      <div className="weather-forecast-temp">
        <div className="weather-card-icon">
          <img src={Img} alt="" />
        </div>
        <div className="weather-card-temp">
          <span>
            <h1 className="current-temp">{temp} </h1>
            <p>&deg;</p>
          </span>
          {!isFarn ? (
            <h3 className="temp-unit">C</h3>
          ) : (
            <h3 className="temp-unit">F</h3>
          )}
        </div>
      </div>
      <button onClick={convertToF}>
        {!isFarn ? (
          <h3 className="temp-unit">F</h3>
        ) : (
          <h3 className="temp-unit">C</h3>
        )}
      </button>
    </div>
  );
}
