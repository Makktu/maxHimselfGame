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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 4,
    borderColor: '#ddb52f',
    padding: 12,
    borderRadius: 5,
  },
});
