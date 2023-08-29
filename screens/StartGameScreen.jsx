import { StyleSheet, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import randomNumberPicker from '../helpers/randomNumberPicker';

export default function StartGameScreen({ numberGiven }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  let warnings = 0;
  let warningText = 'OK';

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
          text: warningText,
          style: 'cancel',
          onPress: resetInputHandler,
        },
      ]);
      warnings += 1;
      return;
    }
    console.log(enteredNumber);
    resetInputHandler();
    numberGiven(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  return (
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
        <PrimaryButton whenPressed={confirmInputHandler}>Confirm</PrimaryButton>
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
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3f0723',
    borderRadius: 8,
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
});
