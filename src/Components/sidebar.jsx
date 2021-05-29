import React from "react";
import searchIcon from "../res/search.svg";

// For Custom Icons
// import RainIcon from "../res/rain.svg";
// import SunIcon from "../res/sun.svg";
// import SunInCloudIcon from "../res/sunCloud.svg";
// import LightRainIcon from "../res/lightRain.svg";
// import SnowIcon from "../res/snow.svg";
// import MistIcon from "../res/mist.svg";
// import ThunderIcon from "../res/thunder.svg";

import "./Css/sidebar.css";

function sidebar({ city, setCity, weatherData, setSearch, Img, err }) {
  const todayTemp = weatherData.current;
  const highToday = weatherData.forecast.forecastday[0].day.maxtemp_c;
  const lowToday = weatherData.forecast.forecastday[0].day.mintemp_c;
  console.log(weatherData.current.condition.text);

  // console.log(weatherData);
  // console.log(weatherData.forecast.forecastday[0]);
  const searchCity = (e) => {
    const value = document.querySelector("input").value;
    setSearch(value);
  };

  function getCurrentDate() {
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednessday",
      "Thursday",
      "Friday",
      "Saturday",
    ][new Date().getDay()];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][new Date().getMonth()];
    var date = new Date().getDate();
    return weekday + ", " + monthNames + " " + date;
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
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="location-search">
          <span>
            <i>{<img src={searchIcon} alt="" className="src-icon" />}</i>
            <input type="text" placeholder="location" />
          </span>
          <button onClick={searchCity}>
            <img src={searchIcon} alt="" />
          </button>
        </div>

        {!err ? (
          <div>
            <div className="location-data">
              <h1 className="location-name">
                {weatherData.location.name}
                {/* , {weatherData.location.country} */}
              </h1>
              <p className="date">{getCurrentDate()}</p>
            </div>

            <div className="weather-container">
              <div className="weather-icon">
                {/* {weatherIcon(weatherData.current.condition.text)} */}
                <img src={Img} alt="" />
              </div>
              <div className="weather">
                <span>
                  <h1>{todayTemp.temp_c}</h1>
                  <p>&deg;</p>
                </span>
                <h3>C</h3>
              </div>
            </div>
            <div className="weather-report">
              <div className="row row1">
                <div className="high-temp">
                  <h1>{highToday} &deg;</h1>
                  <h2>High</h2>
                </div>{" "}
                <div className="wind">
                  <h1>{todayTemp.wind_mph} mph</h1>
                  <h2>Wind</h2>
                </div>
              </div>
              <div className=" row row2">
                <div className="low-temp">
                  <h1>{lowToday} &deg;</h1>
                  <h2>Low</h2>
                </div>
                <div className="rain">
                  <h1>{todayTemp.humidity}</h1>
                  <h2>Humidity</h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 style={{ color: "white" }}>Invalid Input</h1>
        )}
      </div>
    </div>
  );
}

export default sidebar;
