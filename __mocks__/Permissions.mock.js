export const RESULTS = {
  UNAVAILABLE: 'unavailable',
  DENIED: 'denied',
  BLOCKED: 'blocked',
  GRANTED: 'granted',
};

export const openSettings = jest.fn(async () => {});

export const check = jest.fn(() => {
  return Promise.resolve(RESULTS.GRANTED);
});

export const request = jest.fn(() => {
  return Promise.resolve(RESULTS.GRANTED);
});

export const PERMISSIONS = {ANDROID: {}, IOS: {}};
