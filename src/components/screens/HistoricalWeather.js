import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dispatchFetchHistoricalWeather} from '../../actions/weatherActions';
import {COLORS} from '../../constants/Colors';
import {Loader} from '../common/Loader';
import {SquareItem} from '../common/SquareItem';
import {getFormattedDate} from '../../shared/helper';

export const HistoricalWeather = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector(
    state => state.weather.historicalWeather.historical,
  );
  const loading = useSelector(state => state.weather.loading);

  const fetchData = useCallback(() => {
    dispatch(dispatchFetchHistoricalWeather(formattedDate));
  }, [dispatch, formattedDate]);

  useEffect(() => {
    const dt = new Date();
    dt.setDate(dt.getDate() - 1);
    const yesterday = getFormattedDate(dt);
    setFormattedDate(yesterday);
    setDate(new Date(dt));
    dispatch(dispatchFetchHistoricalWeather(yesterday));
  }, [dispatch]);

  const changeDate = (event, selectedDate) => {
    setDate(selectedDate);
    setFormattedDate(getFormattedDate(selectedDate));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/weatherbg.jpeg')}
        resizeMode="cover"
        style={styles.bgImage}>
        <View style={styles.dateBox}>
          <Text style={styles.inputLabel}>Date : </Text>
          <DateTimePicker
            testID="dateTimePicker"
            style={styles.input}
            value={date}
            is24Hour={true}
            mode={'date'}
            display="default"
            maximumDate={new Date()}
            onChange={changeDate}
          />
          <TouchableOpacity onPress={() => fetchData()}>
            <Text style={styles.button}> Get Data</Text>
          </TouchableOpacity>
        </View>
        {loading && <Loader />}
        {!loading && weather && weather[formattedDate] && (
          <>
            <View>
              <Text style={styles.avgTemp}>Average Temperature</Text>
              <Text style={styles.tempearature}>
                {weather[formattedDate].avgtemp}
                {'\u2109'}
              </Text>
            </View>
            <View style={styles.squareItem}>
              <SquareItem
                title={'Min Temp'}
                number={weather[formattedDate].mintemp}
              />
              <SquareItem
                title={'Max Temp'}
                number={weather[formattedDate].maxtemp}
              />
            </View>
          </>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    paddingTop: 120,
  },
  dateBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    color: COLORS.black,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    height: 40,
    width: 120,
    paddingTop: 8,
    backgroundColor: COLORS.white,
    fontSize: 18,
  },
  inputLabel: {
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    width: 80,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: COLORS.white,
    padding: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: 118,
    backgroundColor: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avgTemp: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: 16,
    marginTop: 40,
  },
  tempearature: {
    fontSize: 80,
    color: COLORS.white,
    alignSelf: 'center',
  },
  squareItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 40,
  },
});
