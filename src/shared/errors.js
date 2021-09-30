export const getLocationsMessages = code => {
  switch (code) {
    case 1: {
      return 'Network request failed. Please check internet connection.';
    }
    case 602: {
      return 'No search result found. Please try with different city.';
    }
    default: {
      return '';
    }
  }
};
