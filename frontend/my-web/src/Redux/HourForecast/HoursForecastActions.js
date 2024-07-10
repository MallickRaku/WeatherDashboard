import { SET_HOUR_FORECAST } from "./HourForecastConstants";

const setHourForecast = (dataArray) => {
  return {
    type: SET_HOUR_FORECAST,
    payload: dataArray,
  };
};

export { setHourForecast };
