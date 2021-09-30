import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {dispatchSetCurrentLocation} from '../../actions/weatherActions';

export const LocationListItem = ({location}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const navigateToDetails = locDetails => {
    dispatch(dispatchSetCurrentLocation(locDetails));
    navigation.navigate('Details');
  };

  return (
    <Pressable onPress={() => navigateToDetails(location)}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>
            {location.name}, {location.region}, {location.country}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </Pressable>
  );
};
