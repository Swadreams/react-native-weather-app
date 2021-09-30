const MockNavigation = {
  replace: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  goBack: jest.fn(),
  navigate: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  isFocused: jest.fn().mockReturnValue(true),
  canGoBack: jest.fn().mockReturnValue(true),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  dangerouslyGetState: jest.fn(),
  setOptions: jest.fn(),
};

const ReactNavigationNative = jest.requireActual('@react-navigation/native');

const MockNativeNavigation = {
  ...ReactNavigationNative,
  useLinking: jest.fn(),
  useNavigation: jest.fn().mockReturnValue(MockNavigation),
  useFocusEffect: jest.fn().mockImplementation(callback => {
    const unsubscribe = callback();
    if (typeof unsubscribe === typeof Function) {
      unsubscribe();
    }
    return unsubscribe;
  }),
  useIsFocused: jest.fn().mockReturnValue(true),
  DrawerActions: {
    toggleDrawer: jest.fn(),
  },
};

const {createStackNavigator} = jest.requireActual('@react-navigation/stack');

export const MockStackNavigation = {
  createStackNavigator,
  CardStyleInterpolators: {},
};

export {MockNavigation, MockNativeNavigation};
