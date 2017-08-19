import axios from 'axios';

const API_KEY = 'dc43a32905fc26a66d43b16b6640b63e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br`;
  const promise = axios.get(url);

  console.log('Request:', promise);

  return {
    type: FETCH_WEATHER,
    payload: promise //redux-promise(middleware) find for 'payload' prop and unwrapt the promise(stop action, wait it resolvs, create a new action with the http response) for us and send the response to the reducers
  }
}