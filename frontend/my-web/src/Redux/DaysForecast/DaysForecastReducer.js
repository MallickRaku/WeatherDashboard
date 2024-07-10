// const SET_DAYS_FORECASTorecastWeather = [

const { SET_DAYS_FORECAST } = require("./DaysForecastConstants");

// ];

const DaysForecastReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DAYS_FORECAST:
      return action.payload;

    default:
      return state;
  }
};

export default DaysForecastReducer;
