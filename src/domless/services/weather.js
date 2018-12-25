import { config } from "../../constants/config";
import { Keys } from "../../constants/keys";

const axios = require("axios");

export const currentCityWeather = function(query) {
  return axios({
    url: `${config.weather.baseUrl}/data/2.5/weather`,
    params: {
      q: query,
      appid: Keys.openweathermap
    }
  });
};

//data/2.5/forecast?q=London,us&mode=xml
// response;
// const r = {
//   cod: "200",
//   message: 0.0057,
//   cnt: 40,
//   list: [
//     {
//       dt: 1545750000,
//       main: {
//         temp: 275.63,
//         temp_min: 274.713,
//         temp_max: 275.63,
//         pressure: 997.45,
//         sea_level: 1041.55,
//         grnd_level: 997.45,
//         humidity: 77,
//         temp_kf: 0.91
//       },
//       weather: [
//         { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
//       ],
//       clouds: { all: 92 },
//       wind: { speed: 1.07, deg: 102.004 },
//       sys: { pod: "d" },
//       dt_txt: "2018-12-25 15:00:00"
//     }...
//   ],
//   city: {
//     id: 4298960,
//     name: "London",
//     coord: { lat: 37.129, lon: -84.0833 },
//     country: "US",
//     population: 7993
//   }
// };
export const forecastWeather = function(query) {
  return axios({
    url: `${config.weather.baseUrl}/data/2.5/forecast`,
    params: {
      q: "London,us",
      appid: Keys.openweathermap
    }
  });
};
