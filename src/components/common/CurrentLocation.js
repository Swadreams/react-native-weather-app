import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {
  dispatchFetchCurrentWeather,
  dispatchSetHomeLocation,
} from '../../actions/weatherActions';
import {WeatherDetails} from './weatherDetails';
import {isEmptyObject} from '../../shared/helper';

export const CurrentLocation = () => {
  const dispatch = useDispatch();
  const homeLocation = useSelector(state => state.weather.homeLocation);
  const homeWeather = useSelector(state => state.weather.homeWeather);

  const setCurrentLocarion = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        dispatch(dispatchSetHomeLocation({lat: latitude, lon: longitude}));
        dispatch(dispatchFetchCurrentWeather(true));
      },
      () => {
        console.log(false);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    if (isEmptyObject(homeLocation) || isEmptyObject(homeWeather)) {
      setCurrentLocarion();
    }
  }, []);

  return (
    <View style={styles.container}>
      {!isEmptyObject(homeLocation) && !isEmptyObject(homeWeather) && (
        <WeatherDetails location={homeLocation} weather={homeWeather} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#ffffff',
  },
});
