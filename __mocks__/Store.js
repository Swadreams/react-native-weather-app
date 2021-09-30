import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const initialState = {
  weather: {
    locations: [],
    currentLocation: {},
    currentWeather: {},
    currentWeatherLocation: {},
    historicalWeather: {},
    homeWeather: {},
    homeLocation: {},
    homeWeatherLocation: {},
    isLoading: {},
  },
};

let store;

export const configureMockStore = data => {
  const initialData = data ? {...initialState, ...data} : initialState;
  store = configureStore(middlewares)(initialData);
  return store;
};

export const getMockStore = () => {
  return store;
};
