import React, {useState} from 'react';
import {useEffect} from 'react';
import {SearchBar} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {
  dispatchClearLocations,
  dispatchFetchLocations,
} from '../../actions/weatherActions';

export const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [dbSearchValue, setDbSearchValue] = useState('');

  useEffect(() => {
    let timer;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => setDbSearchValue(searchText), 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  useEffect(() => {
    if (dbSearchValue) {
      dispatch(dispatchFetchLocations(dbSearchValue));
    } else {
      dispatch(dispatchClearLocations());
    }
  }, [dbSearchValue, dispatch]);

  return (
    <SearchBar
      placeholder={'Location'}
      onChangeText={text => {
        setSearchText(text);
      }}
      value={searchText}
      lightTheme
    />
  );
};
