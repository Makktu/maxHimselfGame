import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../../helpers/COLORS';

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
    color: 'white',
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'white',
    padding: 12,
    borderRadius: 5,
  },
});
