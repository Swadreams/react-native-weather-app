module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: true,
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
