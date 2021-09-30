import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {SquareItem} from './SquareItem';

export const WeatherDetails = ({location, weather}) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.location}>
        <Text style={styles.city}>{location.name}, </Text>
        <Text style={styles.country}>{location.region}, </Text>
        <Text style={styles.country}>{location.country}</Text>
      </View>
      <View style={styles.timeDate}>
        <Text style={styles.time}>@ {weather?.observation_time} - </Text>
        <Text style={styles.date}>
          {String(new Date().toDateString().replace(' ', ', '))}
        </Text>
      </View>
      <View style={styles.weatherDetails}>
        {weather && weather.weather_icons?.length > 0 && (
          <>
            <Image
              style={styles.weatherIcon}
              source={{uri: weather.weather_icons[0]}}
            />
            <Text style={styles.weatherDescription}>
              {weather.weather_descriptions[0]}
            </Text>
            <Text style={styles.tempearature}>
              {weather.temperature}
              {'\u2109'}
            </Text>
          </>
        )}
      </View>
      <View style={styles.squareItem}>
        <SquareItem title={'Wind'} number={weather.wind_speed} unit={'MPH'} />
        <SquareItem title={'Humidity'} number={weather.humidity} unit={'%'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    marginTop: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  timeDate: {
    flexDirection: 'row',
    marginTop: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  city: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  country: {
    color: COLORS.white,
    fontSize: 20,
    paddingTop: 8,
  },
  tempearature: {
    fontSize: 80,
    color: COLORS.white,
    alignSelf: 'center',
  },
  weatherDetails: {
    justifyContent: 'center',
    marginTop: 50,
    alignSelf: 'center',
  },
  weatherIcon: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
  },
  weatherDescription: {
    color: COLORS.white,
    padding: 10,
    fontSize: 20,
    alignSelf: 'center',
  },
  squareItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 40,
  },
});
