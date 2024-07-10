import React, { useEffect, useRef, useState } from "react";
import searchImg from "../Img/search 1.png";
import CurrentLocation from "../Img/current location icon.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCurrentWeather, setDaysForecast, setHourForecast } from "../Redux";

function SearchComponent({ darkMode, setDarkMode }) {
  const BASEURL = `https://api.openweathermap.org/data/2.5`;
  const APIKEY = `f0ce0e02a254120727c51bd6020285ed`;
  const inputElement = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const resp = await axios.get(
          `${BASEURL}/weather?q=${inputElement.current?.value}&units=metric&appid=${APIKEY}`
        );
        dispatch(setCurrentWeather(resp.data));
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDaysForecastWeather = async () => {
      try {
        const resp = await axios.get(
          `${BASEURL}/forecast/daily?q=${inputElement.current?.value}&cnt=5&appid=${APIKEY}`
        );
        dispatch(resp.data.list);
        console.log(resp.data.list);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchHourssForecastWeather = async () => {
      try {
        const resp = await axios.get(
          `${BASEURL}/forecast?q=${inputElement.current?.value}&units=metric&appid=${APIKEY}`
        );

        dispatch(
          setHourForecast([
            resp.data.list[0],
            resp.data.list[1],
            resp.data.list[2],
            resp.data.list[3],
            resp.data.list[4],
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (inputElement.current) {
      inputElement.current.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          fetchCurrentWeather();
          fetchDaysForecastWeather();
          fetchHourssForecastWeather();
        }
      });
    }

    return () => {};
  }, []);

  return (
    <div className="SearchComponent">
      <div className=" flex flex-col justify-center">
        <div className={` modeChangeParent  ${darkMode ? `justify-start` : `justify-end border border-black`} `}>
          <div className=" w-5 h-5 rounded-full bg-black cursor-pointer" onClick={() => setDarkMode()}></div>
        </div>
        <p className={` font-bold text-sm ${darkMode ? `text-white ` : "text-black"}`}> Dark Mode</p>
      </div>
      <div
        className={`flex gap-4 w-full h-12 px-4 py-2 rounded-2xl shadow-2xl ${
          darkMode ? `bg-lightDarkModeBg` : ` bg-lightModeBg border border-black`
        } `}
      >
        <img src={searchImg} alt="" className=" w-6 h-full object-contain " />
        <input
          className={`${darkMode ? `text-white` : `text-black`}`}
          placeholder="Search for your preffered City"
          ref={inputElement}
        />
      </div>
      <button className="  px-6 py-2 flex bg-lightGreen justify-center items-center rounded-lg gap-1 text-white font-bold w-fit  text-sm ">
        <img src={CurrentLocation} alt="" className=" w-6 h-6" />
        <span className="">Current_Location</span>
      </button>
    </div>
  );
}

export default SearchComponent;
