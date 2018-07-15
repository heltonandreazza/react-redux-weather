import axios from 'axios';

import { ROOT_URL, FETCH_WEATHER } from '../../helpers/constants'

export default {
    fetchWeather: (city) => {
        const url = `${ROOT_URL}&q=${city},br`;
        const promise = axios.get(url);

        console.log('Request:', promise);

        return {
            type: FETCH_WEATHER,
            payload: promise //redux-promise(middleware) find for 'payload' prop and unwrapt the promise(stop action, wait it resolvs, create a new action with the http response) for us and send the response to the reducers
        }
    }
}