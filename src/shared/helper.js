import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

export const getPermissionStatus = async () => {
  try {
    await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios:
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE ||
          PERMISSIONS.IOS.LOCATION_ALWAYS,
      }),
    ).then(res => {
      if (res === 'granted') {
        return Promise.resolve(true);
      } else {
        return Promise.reject(false);
      }
    });
  } catch (error) {
    return Promise.reject(false);
  }
};

export const isEmptyObject = (obj = {}) => {
  return !Object.keys(obj).length;
};

export const getFormattedNumber = value => {
  if (value < 10) {
    return '0' + value;
  }
  return value;
};

export const getFormattedDate = (date = new Date()) => {
  const dt = getFormattedNumber(date.getDate());
  const mm = getFormattedNumber(date.getMonth() + 1);
  return `${date.getFullYear()}-${mm}-${dt}`;
};
