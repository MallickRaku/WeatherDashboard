import React from "react";
import { useSelector } from "react-redux";

function CityTimeComponent({ darkMode }) {
  const currentWeather = useSelector((state) => state.currentWeather);
  const { currentTime, date, day, cityName } = currentWeather;

  return (
    <div
      className={`CityTimeComponent ${darkMode ? `bg-lightDarkModeBg  text-slate-100` : `bg-lightModeBg text-black`}`}
    >
      <h3 className=" font-semibold text-lg">
        {/* 09 : 03 */}
        {cityName}
      </h3>
      <div>
        <h1 className=" font-extrabold text-6xl">{currentTime}</h1>
        <span>
          {day}, {date}
        </span>
      </div>
    </div>
  );
}

export default CityTimeComponent;
