/**
 * Coupa Weather Project
 **/

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

import {LandingPage} from './src/components/screens/LandingPage';
import {HistoricalWeather} from './src/components/screens/HistoricalWeather';
import {WeatherCurrentDetails} from './src/components/screens/WeatherCurrentDetails';

const Stack = createStackNavigator();

const HeaderStyle = {
  headerShown: true,
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Locations"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={WeatherCurrentDetails}
            options={HeaderStyle}
          />
          <Stack.Screen
            name="Historical"
            component={HistoricalWeather}
            options={HeaderStyle}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
