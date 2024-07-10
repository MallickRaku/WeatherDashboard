const { SET_HOUR_FORECAST } = require("./HourForecastConstants");

const HourForecastReducer = (state = [], action) => {
  switch (action.type) {
    case SET_HOUR_FORECAST:
      return action.payload;

    default:
      return state;
  }
};

export default HourForecastReducer;
