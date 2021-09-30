import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants/Colors';

const Message = ({message, isError, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[isError ? styles.errorMessage : styles.message, style]}>
        {message}
      </Text>
    </View>
  );
};

const messageStyle = {
  fontSize: 18,
  alignItems: 'center',
  textAlign: 'center',
  minHeight: 46,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
  },
  message: {
    ...messageStyle,
    color: COLORS.white,
  },
  errorMessage: {
    ...messageStyle,
    color: COLORS.red,
  },
});

export default React.memo(Message);
