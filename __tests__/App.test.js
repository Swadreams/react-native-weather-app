/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, {create, act} from 'react-test-renderer';
import {MockWrapper} from '../__mocks__/Wrapper';
import {configureMockStore} from '../__mocks__/Store';

// it('renders correctly', () => {
//   renderer.create(<MockWrapper component={App} />);
// });

const userSession = {
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

describe('App Component ', () => {
  let component;
  let root;
  let store;

  beforeEach(() => {
    // component = create(<MockWrapper component={App} />);
    // ({root} = component);

    store = configureMockStore({
      userSession,
    });
    store.clearActions();
    component = create(<MockWrapper component={App} />);
    ({root} = component);
  });

  it('renders correctly', async () => {
    let tree;
    await act(async () => {
      jest.runAllTimers();
      tree = await component.toJSON();
    });
    expect(tree).toMatchSnapshot();
  });
});
