import React from "react";

import clearImg from "../Img/clear 1.png";
import rainImg from "../Img/rain 1.png";
import mistImg from "../Img/mist 1.png";
import cloudImg from "../Img/clouds 1.png";
import dizzleImg from "../Img/drizzle 1.png";

import sunriseWhite from "../Img/sunrise-white 1.png";
import sunsetWhite from "../Img/sunset-white 1.png";
import humidityWhite from "../Img/humidity 1.png";
import pressureWhite from "../Img/pressure-white 1.png";
import uvWhite from "../Img/uv-white 1.png";
import windWhite from "../Img/wind 1.png";

import sunriseDark from "../Img/sunrise-dark 1.png";
import sunsetDark from "../Img/sunset-black 1.png";
import humidityDark from "../Img/humidity dark 1.png";
import pressureDark from "../Img/pressure-black 1.png";
import uvDark from "../Img/uv-black 1.png";
import windDark from "../Img/wind dark 1.png";
import { useSelector } from "react-redux";

function CityWeatherComponent({ darkMode }) {
  const currentWeather = useSelector((state) => state.currentWeather);
  const { temp, feels_like, sunrise, sunset, weatherType, humidity, pressure, windSpeed, cityName } = currentWeather;

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
      className={`CityWeatherComponent  ${
        darkMode ? `bg-lightDarkModeBg  text-slate-100` : `bg-lightModeBg text-black`
      }`}
    >
      <div className="">
        <h2 className=" text-5xl font-bold text-start">{temp}&deg;C</h2>
        <p className=" text-sm text-start">
          Feels like : <span className=" text-lg font-semibold ">{feels_like}&deg;C</span>
        </p>
        <div className=" flex justify-center gap-2 items-center mt-6 ">
          <img src={`${darkMode ? sunriseWhite : sunriseDark} `} alt="" className=" w-8 h-8" />
          <div className=" flex flex-col">
            <span className=" text-xs font-bold">Sunrise</span>
            <span className=" text-xs font-light">{sunrise}</span>
          </div>
        </div>
        <div className=" flex justify-center gap-2 items-center mt-4 ">
          <img src={`${darkMode ? sunriseWhite : sunsetDark}`} alt="" className=" w-8 h-8" />
          <div className=" flex flex-col">
            <span className=" text-xs font-bold">Sunset</span>
            <span className=" text-xs font-light">{sunset}</span>
          </div>
        </div>
      </div>

      <div>
        <img src={getWeatherImg(weatherType)} alt="" className=" object-contain w-40 h-40 " />
        <p className=" font-bold text-2xl ">{weatherType}</p>
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        <div className=" flex flex-col items-center text-sm gap-1">
          <img src={`${darkMode ? humidityWhite : humidityDark}`} alt="" className=" w-10 h-10" />
          <span className=" font-semibold ">{humidity}%</span>
          <span>Humidity</span>
        </div>
        <div className=" flex flex-col items-center text-sm gap-1">
          <img src={`${darkMode ? windWhite : windDark}`} alt="" className=" w-10 h-10" />
          <span className=" font-semibold ">{windSpeed}km/h</span>
          <span>Wind Speed</span>
        </div>
        <div className=" flex flex-col items-center  text-sm gap-1">
          <img src={`${darkMode ? pressureWhite : pressureDark}`} alt="" className=" w-10 h-10" />
          <span className=" font-semibold ">{pressure}</span>
          <span>Pressure</span>
        </div>
        <div className=" flex flex-col items-center text-sm gap-1">
          <img src={`${darkMode ? uvWhite : uvDark}`} alt="" className=" w-10 h-10" />
          <span className=" font-semibold ">8</span>
          <span>UV</span>
        </div>
      </div>
    </div>
  );
}

export default CityWeatherComponent;
