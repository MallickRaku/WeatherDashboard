import logo from "./logo.svg";
import "./App.css";
import SearchComponent from "./Components/SearchComponent";
import CityTimeComponent from "./Components/CityTimeComponent";
import CityWeatherComponent from "./Components/CityWeatherComponent";
import { useState } from "react";
import ForecastComponent from "./Components/ForecastComponent";
import HourForecastComponent from "./Components/HourForecastComponent";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App px-20 pb-12 ${darkMode ? `darkModeBg` : `lightModeBg`}`}>
      <SearchComponent
        darkMode={darkMode}
        setDarkMode={() => {
          setDarkMode(!darkMode);
        }}
      />
      <div className="flex gap-24 mt-8 ">
        <CityTimeComponent darkMode={darkMode}></CityTimeComponent>
        <CityWeatherComponent darkMode={darkMode}></CityWeatherComponent>
      </div>

      <div className=" flex gap-24 mt-8">
        <ForecastComponent darkMode={darkMode}></ForecastComponent>
        <HourForecastComponent darkMode={darkMode}></HourForecastComponent>
      </div>
    </div>
  );
}

export default App;
