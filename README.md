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

## Areas of Focus

As mentioned, some of this app does things well, there are many places for improvement as well as many bugs. The general flow of the app should be:

1. On app launch, app shows a list of weather locations for which weather data can be displayed.
2. User should be able to keyword search for other locations with weather data. This search should happen when the search bar loses focus or on a throttle (not after every character is typed in).
3. User should be able to tap a location, transition to a new screen and display both the current and historical weather data for that same location.

Some parts of this flow work, others need some fixes to work. Please fix the app to make these three areas work perfectly. As you make fixes, please also improve the code in places where you think it could use it - there are many :)

### Improvements:

We would love to see some out of the box improvements from you. Some helpful hints

1. Can you think of modern approaches to use while work with React / React Native?
2. Does the functionality of the app satisfy you? As a user what would want to see?
3. What about usability, and user experience?
4. Can the data being returned add more context (visually) to the user?
5. Anything else you think could be improved?

Please don't feel limited by this list - use this project to show us your skills and what you like working on.
