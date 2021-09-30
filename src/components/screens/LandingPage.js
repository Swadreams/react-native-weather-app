import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {useSelector} from 'react-redux';
import {LocationListItem} from '../common/LocationListItem';
import Message from '../common/Message';
import {Search} from '../common/Search';
import {CurrentLocation} from '../common/CurrentLocation';
import {useEffect} from 'react';
import {getPermissionStatus} from '../../shared/helper';
import {getLocationsMessages} from '../../shared/errors';
import {useState} from 'react';
import {Loader} from '../common/Loader';
import {COLORS} from '../../constants/Colors';

export const LandingPage = () => {
  const locations = useSelector(state => state.weather.locations);
  const [allowLocation, setAllowLocation] = useState(false);
  const loading = useSelector(state => state.weather.loading);

  useEffect(() => {
    getPermissionStatus().then(
      () => setAllowLocation(true),
      () => setAllowLocation(false),
    );
  }, []);

  useEffect(() => {
    console.log('LP:', locations);
  }, [locations]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg1.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <StatusBar barStyle="light-content" />
        {loading && <Loader />}
        <View style={styles.search}>
          <Search />
          {locations && locations.length > 0 && (
            <FlatList
              data={locations}
              keyExtractor={(item, index) => `${item.name}${index}`}
              renderItem={location => (
                <LocationListItem location={location.item} />
              )}
            />
          )}
          <Message
            message={getLocationsMessages(locations?.error?.code)}
            isError={locations?.error}
          />
        </View>

        <View style={styles.homeLocation}>
          {locations && !locations.length && allowLocation && !loading && (
            <CurrentLocation />
          )}
          {!allowLocation && (
            <View style={styles.locationMessage}>
              <Message
                style={styles.locationMessageText}
                message={
                  'Note: It looks your location is disabled. To see current location weather, please allow location from settings to weather app.'
                }
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 80,
  },
  search: {
    justifyContent: 'flex-start',
  },
  homeLocation: {
    flex: 1,
  },
  locationMessage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    height: 120,
  },
  locationMessageText: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.black,
  },
});
