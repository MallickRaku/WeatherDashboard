const { SET_DAYS_FORECAST } = require("./DaysForecastConstants");

const setDaysForecast = (dataArray) => {
  return {
    type: SET_DAYS_FORECAST,
    payload: dataArray,
  };
};

export { setDaysForecast };
