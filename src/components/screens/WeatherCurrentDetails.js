import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {dispatchFetchCurrentWeather} from '../../actions/weatherActions';
import {COLORS} from '../../constants/Colors';
import {Loader} from '../common/Loader';
import {WeatherDetails} from '../common/weatherDetails';

export const WeatherCurrentDetails = ({navigation}) => {
  const location = useSelector(state => state.weather.currentLocation);
  const weather = useSelector(state => state.weather.currentWeather);
  const loading = useSelector(state => state.weather.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatchFetchCurrentWeather());
  }, [dispatch]);

  return (
    <ImageBackground
      source={require('../../assets/weatherbg.jpeg')}
      resizeMode="cover"
      style={styles.container}>
      {loading && <Loader />}
      {!loading && location && weather && (
        <>
          <WeatherDetails location={location} weather={weather} />
          <View style={styles.historical}>
            <TouchableOpacity onPress={() => navigation.navigate('Historical')}>
              <Text style={styles.btnHistorical}>Check Historical Weather</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 25,
  },
  historical: {
    borderWidth: 1,
    width: 200,
    alignSelf: 'flex-end',
    borderColor: COLORS.white,
    borderRadius: 40,
  },
  btnHistorical: {
    color: COLORS.white,
    padding: 10,
    alignSelf: 'center',
  },
});
