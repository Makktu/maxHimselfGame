import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import randomNumberPicker from '../helpers/randomNumberPicker';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import { AntDesign } from '@expo/vector-icons';

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ chosenNumber = null, gameOverHandler }) {
  const initialGuess = randomNumberPicker(1, 100, chosenNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [computerWins, setComputerWins] = useState(false);

  useEffect(() => {
    if (currentGuess == chosenNumber) {
      gameOverHandler();
    }
  }, [currentGuess, gameOverHandler]);

  function nextGuessHandler(guessDirection = '') {
    console.log(guessDirection);
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
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.btnsContainer}>
          <PrimaryButton whenPressed={nextGuessHandler.bind(this, 'lower')}>
            <AntDesign name='minuscircle' size={26} color='white' />
          </PrimaryButton>
          <PrimaryButton whenPressed={nextGuessHandler.bind(this, 'higher')}>
            <AntDesign name='pluscircle' size={26} color='white' />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 44,
  },
  computerWinsStyle: {
    alignItems: 'center',
  },
  btnsContainer: {
    flexDirection: 'row',
  },
  InstructionText: {
    marginBottom: 8,
    fontSize: 24,
  },
});
