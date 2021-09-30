import {weatherConstants} from '../constants/weatherConstants';
import {KEY, URL} from '../shared/config';

const headers = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const fetchLocations = async query => {
  return fetch(`${URL}/autocomplete?access_key=${KEY}&query=${query}`, headers)
    .then(response => {
      return response.json();
    })
    .then(response => {
      if (response.error) {
        throw response.error;
      }
      return response.results;
    })
    .catch(err => {
      if (!err.error) {
        err.error = err;
      }
      throw err;
    });
};

export const dispatchFetchLocations = (query = 'london') => {
  return async dispatch => {
    dispatch({type: weatherConstants.LOCATIONS_FETCH_STARTED});
    dispatch(dispatchSetLoading(true));
    try {
      const locations = await fetchLocations(query);
      dispatch({
        type: weatherConstants.LOCATIONS_FETCH_SUCCESS,
        payload: {locations},
      });
    } catch (error) {
      dispatch(dispatchFetchLocationFailure(error));
      console.log(error);
    } finally {
      dispatch(dispatchSetLoading(false));
    }
  };
};

export const dispatchFetchLocationFailure = error => {
  return {
    type: weatherConstants.LOCATIONS_FETCH_FAILURE,
    payload: {error},
  };
};

export const dispatchSetCurrentLocation = currentLocation => {
  return {
    type: weatherConstants.SET_CURRENT_LOCATION,
    payload: {currentLocation},
  };
};

export const dispatchSetHomeLocation = homeLocation => {
  return {
    type: weatherConstants.SET_HOME_LOCATION,
    payload: {homeLocation},
  };
};

const fetchCurrentWeather = async currentLocation => {
  return fetch(
    `${URL}/current?access_key=${KEY}&query=${currentLocation.lat},${currentLocation.lon}`,
    headers,
  )
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchFetchCurrentWeather = (home = false) => {
  return async (dispatch, getState) => {
    dispatch(dispatchSetLoading(true));
    const state = getState().weather;
    let currentLocation = home ? state.homeLocation : state.currentLocation;
    try {
      const {current, location} = await fetchCurrentWeather(currentLocation);
      if (home) {
        dispatch({
          type: weatherConstants.HOME_LOCATION_WEATHER_FETCH_SUCCESS,
          payload: {
            homeWeather: current,
            homeWeatherLocation: location,
          },
        });
      } else {
        dispatch({
          type: weatherConstants.CURRENT_LOCATION_WEATHER_FETCH_SUCCESS,
          payload: {currentWeather: current},
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dispatchSetLoading(false));
    }
  };
};

const fetchHistoricalWeather = async (currentLocation, date) => {
  return fetch(
    `${URL}/historical?access_key=${KEY}&query=${currentLocation.lat},${currentLocation.lon}&historical_date=${date}`,
    headers,
  )
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchFetchHistoricalWeather = date => {
  return async (dispatch, getState) => {
    const {currentLocation} = getState().weather;
    dispatch(dispatchSetLoading(true));
    try {
      const historicalWeather = await fetchHistoricalWeather(
        currentLocation,
        date,
      );
      dispatch({
        type:
          weatherConstants.CURRENT_LOCATION_HISTORICAL_WEATHER_FETCH_SUCCESS,
        payload: {historicalWeather},
      });
      console.log(JSON.stringify(historicalWeather));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dispatchSetLoading(false));
    }
  };
};

export const dispatchClearLocations = () => {
  return {
    type: weatherConstants.CLEAR_LOCATIONS,
  };
};

export const dispatchSetLoading = isLoading => {
  return {
    type: weatherConstants.SET_LOADING,
    payload: {isLoading},
  };
};
