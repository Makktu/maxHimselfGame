import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function GameScreen({ chosenNumber = null }) {
  console.log('To GameScreen with>>>', chosenNumber);
  return (
    <View style={styles.screenView}>
      <Title titleText='Computer Guess' />
      <Text>GUESS</Text>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <Text>+ -</Text>
      <Text>LOG ROUNDS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    padding: 22,
  },
});
