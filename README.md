## Background

This is a small sample project that connects to a [weather api](https://weatherstack.com/documentation) using an API key backed by a standard weatherstack account. This project attempts to find locations matching a user entered search term and also displays current and historical weather data for that location on a separate screen. This project uses many of the same tools we use in our Coupa mobile application, including:

- React-Native (0.64)
- Redux w/ Thunk
- React-Navigation
- React-Native-Elements

This project does some things well, but has many issues and bugs. Please look through the source and run the application and make changes to both fix bugs and improve the quality of the code. Please structure your changes as a series of well-formed commits and open a PR against the repo to which you've been provided access.

## Getting Started

This project requires a reasonably current React-Native development stack. We used the following tools when building this project:

- Yarn (1.22.4)
- Node (12.16.1)
- NPX (6.13.4)
- Cocoapods (1.10.1)
- Xcode (12.4) w/ iOS Simulator running iOS 14.4
- Android Studio (4.1) w/ Android Emulator running Android APK

### iOS

To run the app in an iOS simulator:

- `yarn install` from project root.
- `pod install` from `ios` subfolder.
- `npx react-native run-ios` from project root.

### Android

To run the app in an Android Emulator

- Ensure `local.properties` in the `android` subfolder points `sdk.dir` to the proper SDK location.
- Ensure `adb` is in your bash or zsh path. If you use a Mac, `adb` is likely found in `~/Library/Android/sdk/platform-tools`.
- Start an Android emulator using the AVD Manager within Android Studio or a method of your choosing.
- `npx react-native run-android` from the project root.

# Demo :

![ScreenShot](https://github.com/Swadreams/react-native-weather-app/blob/main/screenshots/WeatherApp.gif)

# Home Screen With current location data :

![ScreenShot](https://github.com/Swadreams/react-native-weather-app/blob/main/screenshots/Screenshot%202021-09-30%20at%2010.28.52%20AM.png)

# Home Screen Search Result :

![ScreenShot](https://github.com/Swadreams/react-native-weather-app/blob/main/screenshots/Screenshot%202021-09-30%20at%2010.28.47%20AM.png)

# Selected Location Data :

![ScreenShot](https://github.com/Swadreams/react-native-weather-app/blob/main/screenshots/Screenshot%202021-09-30%20at%2010.28.30%20AM.png)

# Historical Data Screeen :

![ScreenShot](https://github.com/Swadreams/react-native-weather-app/blob/main/screenshots/Screenshot%202021-09-30%20at%2010.28.36%20AM.png)

# Calendar To select historical date :

![ScreenShot](https://github.com/Swadreams/react-native-weather-app/blob/main/screenshots/Screenshot%202021-09-30%20at%2010.28.41%20AM.png)
