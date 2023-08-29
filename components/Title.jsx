import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../helpers/COLORS';

export default function Title({ titleText }) {
  return (
    <View>
      <Text style={styles.titleStyle}>{titleText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.accent500,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: 12,
    borderRadius: 5,
  },
});
