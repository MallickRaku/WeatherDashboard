const { SET_CURRENT_WEATHER_STATE } = require("./CurrentWeatherConstants");

const CurrentWeatherState = {
  currentTime: "",
  date: "",
  day: "",
  temp: "",
  feels_like: "",
  sunrise: "",
  sunset: "",
  weatherType: "",
  humidity: "",
  pressure: "",
  windSpeed: "",
  cityName: "",
};

const days = ["Sunday", "Mon", "Tuesday", "Thursday", "Friday", "Saturday"];
const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CurrentWeatherReducer = (state = CurrentWeatherState, action) => {
  switch (action.type) {
    case SET_CURRENT_WEATHER_STATE:
      const fetchData = action.payload;
      const date = new Date();

      return {
        ...state,
        currentTime: `${date.getHours() < 10 ? `0` : ``}${date.getHours()}:${
          date.getMinutes() < 10 ? `0` : ``
        }${date.getMinutes()}`,

        date: `${new Date().getDate()} ${shortMonths[new Date().getMonth()]}`,
        day: days[new Date().getDay()],
        cityName: fetchData.name,
        temp: Math.round(fetchData.main.temp),
        feels_like: Math.round(fetchData.main.feels_like),
        humidity: fetchData.main.humidity,
        pressure: fetchData.main.pressure,
        windSpeed: fetchData.wind.speed,
        sunrise: `${new Date(fetchData.sys.sunrise * 1000).getHours()}:${new Date(
          fetchData.sys.sunrise * 1000
        ).getMinutes()} ${new Date(fetchData.sys.sunrise * 1000).getHours() > 11 ? "PM" : "AM"}`,

        sunset: `${new Date(fetchData.sys.sunset * 1000).getHours()}:${new Date(
          fetchData.sys.sunset * 1000
        ).getMinutes()} ${new Date(fetchData.sys.sunset * 1000).getHours() > 11 ? "PM" : "AM"}`,

        weatherType: fetchData.weather[0].main,
      };

    default:
      return state;
  }
};

export default CurrentWeatherReducer;
