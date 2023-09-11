import { StyleSheet, View, TextInput, Alert, Text } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';
import COLORS from '../helpers/COLORS';
import Card from '../components/ui/Card';

export default function StartGameScreen({ numberGiven }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function enteredNumberHandler(enteredText) {
    if (enteredNumber.length < 2) {
      setEnteredNumber(enteredText);
    }
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (!chosenNumber || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Only enter a number between 0 and 99.', [
        {
          text: 'OK',
          style: 'cancel',
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    resetInputHandler();
    numberGiven(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  return (
    <View style={styles.overallContainer}>
      <Title titleText='Guess Your Number' />
      <Card>
        <InstructionText>Enter a number between 1 and 99</InstructionText>
        <TextInput
          style={styles.numberInputStyle}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={enteredNumberHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.btnCont}>
            <PrimaryButton whenPressed={resetInputHandler}>Reset</PrimaryButton>
            <PrimaryButton whenPressed={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  resetButtonStyle: {
    width: 100,
    height: 50,
    backgroundColor: 'purple',
  },
  numberInputStyle: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  btnCont: {
    flexDirection: 'row',
  },
  overallContainer: {
    padding: 12,
    marginTop: 50,
    alignItems: 'center',
  },
});
