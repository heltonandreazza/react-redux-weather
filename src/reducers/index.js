import { combineReducers } from 'redux';
import WeatherReducer from '../containers/weather-list/weather-list.reducer';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;