import React from 'react';
import {Provider} from 'react-redux';

import {MockNavigation} from './React-Navigation';
import {getMockStore} from './Store';
import {Locations} from '../src/components/screens/LandingPage';
import {Geolocation} from './@react-native-community/geolocation';
import {PERMISSIONS, request} from './react-native-permissions';

const MockWrapper = ({component, initialRoute}) => {
  const screenName = 'Locations';
  const store = getMockStore();

  const ComponentWithNavProps = () => {
    return (
      <component
        route={{...initialRoute, key: screenName, name: Locations}}
        navigation={MockNavigation}
      />
    );
  };

  return store ? (
    <Provider store={store}>
      <ComponentWithNavProps />
    </Provider>
  ) : (
    <ComponentWithNavProps />
  );
};

MockWrapper.defaultProps = {
  initialRoute: {},
};

export {MockWrapper};
