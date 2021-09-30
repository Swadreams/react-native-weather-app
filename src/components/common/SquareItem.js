import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

export const SquareItem = ({title, number, unit = ''}) => {
  return (
    <View style={styles.perticular}>
      <Text style={styles.text}>{title}</Text>
      <Text style={[styles.text, styles.number]}>{number}</Text>
      <Text style={styles.text}>{unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  perticular: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 20,
  },
});
