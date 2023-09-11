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
    <View style={styles.screenView}>
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
        <View style={styles.buttons}>
          <View style={styles.buttonsContainer}>
            <PrimaryButton whenPressed={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonsContainer}>
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
  screenView: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
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
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flex: 1,
  },
});
