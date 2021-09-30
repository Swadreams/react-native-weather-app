import {weatherConstants} from '../constants/weatherConstants';

const initialState = {
  locations: [],
  currentLocation: {},
  currentWeather: {},
  currentWeatherLocation: {},
  historicalWeather: {},
  homeWeather: {},
  homeLocation: {},
  homeWeatherLocation: {},
  isLoading: {},
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case weatherConstants.LOCATIONS_FETCH_SUCCESS:
      const {locations} = action.payload;
      return {...state, locations};
    case weatherConstants.LOCATIONS_FETCH_FAILURE:
      return {...state, locations: action.payload};
    case weatherConstants.SET_CURRENT_LOCATION:
      const {currentLocation} = action.payload;
      return {...state, currentLocation};
    case weatherConstants.SET_HOME_LOCATION:
      const {homeLocation} = action.payload;
      return {...state, homeLocation};
    case weatherConstants.HOME_LOCATION_WEATHER_FETCH_SUCCESS:
      const {homeWeather, homeWeatherLocation} = action.payload;
      return {
        ...state,
        homeWeather,
        homeLocation: {...homeLocation, ...homeWeatherLocation},
      };
    case weatherConstants.CURRENT_LOCATION_WEATHER_FETCH_SUCCESS:
      const {currentWeather, currentWeatherLocation} = action.payload;
      return {...state, currentWeather, currentWeatherLocation};
    case weatherConstants.CURRENT_LOCATION_HISTORICAL_WEATHER_FETCH_SUCCESS:
      const {historicalWeather} = action.payload;
      return {...state, historicalWeather};
    case weatherConstants.CLEAR_LOCATIONS: {
      return {...state, locations: []};
    }
    case weatherConstants.SET_LOADING: {
      return {...state, loading: action.payload.isLoading};
    }
    default:
      return state;
  }
};
export default weatherReducer;
