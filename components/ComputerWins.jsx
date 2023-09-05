import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from './ui/Title';

export default function ComputerWins({ chosenNumber }) {
  return (
    <View style={styles.computerWinsStyle}>
      <Title titleText='Got the Number!' />
      <Text style={styles.computerWinsTextStyle}>
        Your number was {chosenNumber}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  computerWinsStyle: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  computerWinsTextStyle: {
    color: 'whitesmoke',
    marginTop: 50,
    fontSize: 24,
  },
});
