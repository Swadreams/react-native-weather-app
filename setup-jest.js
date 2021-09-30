import React from 'react';

import 'react-native-gesture-handler/jestSetup';

jest.mock(
  '@react-navigation/native',
  () => require('./__mocks__/React-Navigation').MockNativeNavigation,
);

jest.mock(
  '@react-navigation/stack',
  () => require('./__mocks__/React-Navigation').MockStackNavigation,
);

jest.mock('react-native-safe-area-context', () => {
  const SAContext = jest.requireActual('react-native-safe-area-context');
  const SAProvider = ({children}) => {
    return (
      <SAContext.SafeAreaProvider
        initialMetrics={{
          frame: {x: 0, y: 0, width: 0, height: 0},
          insets: {top: 0, left: 0, right: 0, bottom: 0},
        }}>
        {children}
      </SAContext.SafeAreaProvider>
    );
  };
  return {
    ...SAContext,
    SafeAreaProvider: SAProvider,
  };
});
