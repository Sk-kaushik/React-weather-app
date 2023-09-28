import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./Components/sidebar";
import WeatherCard from "./Components/weatherCard";
import { getTime } from "./getTimeZone";
import dayImg from "./res/dayBg.png";
import nightImg from "./res/nightBg.png";

function App() {
  const API_KEY = "API_KEY";
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [err, setErr] = useState(false);
  let time;
  var timeBg;

  function checkTime() {
    if (time === "night") {
      timeBg = {
        backgroundImage: `url(${nightImg})`,
      };
    } else {
      timeBg = {
        backgroundImage: `url(${dayImg})`,
      };
    }
    return timeBg;
  }
  checkTime();

  useEffect(() => {
    time = getTime();

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=7`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })

      .then((data) => {
        if (data.current !== null) {
          setErr(false);
          setWeather(data);
        }
      })
      .catch((err) => {
        setErr(true);
      });
  }, [search, err]);

  return (
    <div className="App">
      {console.log(timeBg)}
      <div className="appContainer" style={timeBg}>
        {weather ? (
          <>
            {err ? (
              <SideBar
                setCity={setCity}
                city={city}
                setSearch={setSearch}
                weatherData={weather}
                Img={weather.forecast.forecastday[2].day.condition.icon}
                err={err}
              />
            ) : (
              <SideBar
                setCity={setCity}
                city={city}
                setSearch={setSearch}
                weatherData={weather}
                Img={weather.forecast.forecastday[2].day.condition.icon}
                err={err}
              />
            )}
          </>
        ) : (
          <h1
            style={{
              height: "100vh",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading ...
          </h1>
        )}

        {weather ? (
          <div className="forecast">
            <h1>Forecast</h1>
            <div className="cards">
              {console.log(weather.forecast.forecastday[0].day.avgtemp_c)}
              <WeatherCard
                weatherData={weather}
                date={weather.forecast.forecastday[0].date}
                temp_c={weather.forecast.forecastday[0].day.avgtemp_c}
                temp_f={weather.forecast.forecastday[0].day.avgtemp_f}
                weatherImg={weather.forecast.forecastday[0].day.condition.text}
                Img={weather.forecast.forecastday[0].day.condition.icon}
              />
              <WeatherCard
                weatherData={weather}
                date={weather.forecast.forecastday[1].date}
                temp_c={weather.forecast.forecastday[1].day.avgtemp_c}
                temp_f={weather.forecast.forecastday[1].day.avgtemp_f}
                weatherImg={weather.forecast.forecastday[1].day.condition.text}
                Img={weather.forecast.forecastday[1].day.condition.icon}
              />
              <WeatherCard
                weatherData={weather}
                date={weather.forecast.forecastday[2].date}
                temp_c={weather.forecast.forecastday[2].day.avgtemp_c}
                temp_f={weather.forecast.forecastday[2].day.avgtemp_f}
                weatherImg={weather.forecast.forecastday[2].day.condition.text}
                Img={weather.forecast.forecastday[2].day.condition.icon}
              />
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default App;
