import { StyleSheet, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import randomNumberPicker from '../helpers/randomNumberPicker';
import Title from '../components/Title';
import COLORS from '../helpers/COLORS';

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
      <Title titleText='Choose Your Number' />

      <View style={styles.inputContainer}>
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
          <PrimaryButton whenPressed={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton whenPressed={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
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
  },
  inputContainer: {
    marginHorizontal: 12,
    marginTop: 24,
    padding: 16,
    backgroundColor: COLORS.primary800,
    borderRadius: 4,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  overallContainer: {
    padding: 12,
  },
});
