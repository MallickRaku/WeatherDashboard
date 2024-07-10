import { SET_CURRENT_WEATHER_STATE } from "./CurrentWeatherConstants";
const setCurrentWeather = (data) => {
  return {
    type: SET_CURRENT_WEATHER_STATE,
    payload: data,
  };
};

export { setCurrentWeather };
