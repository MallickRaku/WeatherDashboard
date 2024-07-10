import React from "react";
import clouds from "../Img/clouds 1.png";
import clear2 from "../Img/clear 2.png";
import mist from "../Img/mist 1.png";
import rain from "../Img/rain 1.png";
import drizzle from "../Img/drizzle 1.png";

function ForecastComponent({ darkMode }) {
  const forecastReport = [
    {
      url: clouds,
      deg: `20`,
      date: "Friday, 1 Sep",
    },
    {
      url: mist,
      deg: `20`,
      date: "friday, 1 Sep",
    },
    {
      url: clear2,
      deg: `20`,
      date: "Saturday, 1 Sep",
    },
    {
      url: drizzle,
      deg: `20`,
      date: "Friday, 1 Sep",
    },
    {
      url: rain,
      deg: `20`,
      date: "Friday, 1 Sep",
    },
  ];
  return (
    <div className={`ForecastComponent  ${darkMode ? `bg-lightDarkModeBg  text-white` : `bg-lightModeBg text-black`}`}>
      <h3 className=" text-xl font-bold ">5 Days ForeCast:</h3>
      <ul className=" mt-4">
        {forecastReport.map((item, index) => {
          const { url, deg, date } = item;
          return (
            <li className="forecastItem" key={index}>
              <img src={url} alt="" className=" w-10 h-10" />
              <span>{deg}&deg;C</span>
              <span>{date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ForecastComponent;
