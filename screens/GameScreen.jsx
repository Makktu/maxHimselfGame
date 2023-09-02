import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import randomNumberPicker from '../helpers/randomNumberPicker';

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  chosenNumber = null,
  gameOverHandler,
  turnsTaken,
}) {
  const initialGuess = randomNumberPicker(1, 100, chosenNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [computerWins, setComputerWins] = useState(false);

  useEffect(() => {
    turnsTaken += 1;
    console.log(turnsTaken, 'turns');

    if (currentGuess == chosenNumber) {
      gameOverHandler(turnsTaken);
    }
  }, [currentGuess, chosenNumber, gameOverHandler]);

  function nextGuessHandler(guessDirection = '') {
    if (guessDirection === 'lower') {
      if (currentGuess < chosenNumber) {
        Alert.alert('You what?', "If you're cheating, it's weird...");
        return;
      }
      maxBoundary = currentGuess - 1;
    } else {
      if (currentGuess > chosenNumber) {
        Alert.alert(
          'Oh, come on...',
          'Cheating at this is not only wrong but damned peculiar.'
        );
        return;
      }
      minBoundary = currentGuess + 1;
    }

    const newGuess = randomNumberPicker(minBoundary, maxBoundary);

    setCurrentGuess(newGuess);
  }

  return (
    <View style={styles.screenView}>
      <Title titleText='Computer Guess' />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 22, color: 'white', margin: 8 }}>
          Higher or Lower?
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <PrimaryButton whenPressed={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton whenPressed={nextGuessHandler}>+</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    padding: 22,
  },
  computerWinsStyle: {
    alignItems: 'center',
  },
});
