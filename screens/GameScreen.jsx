import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import randomNumberPicker from '../helpers/randomNumberPicker';

export default function GameScreen({ chosenNumber = null }) {
  const initialGuess = randomNumberPicker(1, 100, chosenNumber);
  console.log(
    `Your number: ${chosenNumber}; computer 1st guess: ${initialGuess}`
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screenView}>
      <Title titleText='Computer Guess' />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>{currentGuess}</Text>
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
