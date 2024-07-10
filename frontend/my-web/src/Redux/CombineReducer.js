import { combineReducers } from "redux";
import CurrentWeatherReducer from "./CurrentWeather/CurrentWeatherReducer";
import DaysForecastReducer from "./DaysForecast/DaysForecastReducer";
import HourForecastReducer from "./HourForecast/HourForecastReducer";

const combineReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
  daysForecast: DaysForecastReducer,
  hourForecast: HourForecastReducer,
});

export default combineReducer;
