import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../../helpers/COLORS';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.numberStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: COLORS.primary700,
    borderRadius: 8,
    padding: 25,
    margin: 24,
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.accent500,
  },
  numberStyle: {
    fontSize: 44,
    textAlign: 'center',
    margin: 8,
    color: COLORS.primary500,
    fontWeight: 'bold',
  },
});
