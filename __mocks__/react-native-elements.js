jest.mock('react-native-elements', () => {
  const SearchBar = {
    placeholder: '',
    onChangeText: jest.fn(),
    value: jest.fn(),
    lightTheme: jest.fn(),
  };

  return {
    ...SearchBar,
  };
});
