import React from "react";
import cloudImg from "../Img/clouds 1.png";
import clearImg from "../Img/clear 2.png";
import mistImg from "../Img/mist 1.png";
import rainImg from "../Img/rain 1.png";
import dizzleImg from "../Img/drizzle 1.png";
import windWhite from "../Img/wind 1.png";
import windBlack from "../Img/wind dark 1.png";
import { useSelector } from "react-redux";

function HourForecastComponent({ darkMode }) {
  const hourForecast = useSelector((store) => store.hourForecast);
  console.log(hourForecast);
  const weatherTypes = ["Clear", "Clouds", "Thunderstorm", "Drizzle", "Rain", , "Mist", "Haze"];
  const getWeatherImg = (type) => {
    if (type == weatherTypes[0]) return clearImg;
    else if (type == weatherTypes[1] || type == weatherTypes[2]) return cloudImg;
    else if (type == weatherTypes[3]) return dizzleImg;
    else if (type == weatherTypes[4]) return rainImg;
    else if (type == weatherTypes[5] || type == weatherTypes[6]) return mistImg;
    return clearImg;
  };
  return (
    <div
      className={`HourForecastComponent ${
        darkMode ? `bg-lightDarkModeBg text-slate-100` : `bg-lightModeBg text-black`
      }`}
    >
      <h3 className="text-xl font-bold ">Hourly Forecast:</h3>

      <ul className=" flex gap-4 mt-4">
        {hourForecast.map((item, index) => {
          const { time, url, deg, windSpeed } = item;
          return (
            <li
              className={`hourForecastItem  ${
                darkMode
                  ? `bg-uniqueDark text-slate-100`
                  : ` bg-gradient-to-b  ${
                      time < 19 ? ` from-orange-400 to-orange-200` : ` from-violet-400 to-violet-200`
                    }  text-black`
              }`}
            >
              <span className=" font-extrabold">
                {" "}
                {new Date(item.dt_txt).getHours() < 10 ? `0` : ``}
                {new Date(item.dt_txt).getHours()}:00
              </span>
              <img src={getWeatherImg(item.weather[0].main)} alt="" />
              <span> {Math.round(item.main.temp)}&deg;C </span>
              <img src={darkMode ? windWhite : windBlack} alt="" className=" w-12 h-8" />
              <span className=" text-sm font-bold">{Math.round(item.wind.speed)}Km/h</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HourForecastComponent;
