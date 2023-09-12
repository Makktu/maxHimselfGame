import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title({ titleText }) {
  return (
    <View>
      <Text style={styles.titleStyle}>{titleText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'white',
    padding: 12,
    borderRadius: 5,
  },
});
