import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <View style={styles.buttonsContainer}>
        <PrimaryButton style={styles.resetButtonStyle}>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resetButtonStyle: {
    width: 100,
    backgroundColor: 'purple',
  },
  inputContainer: {
    flex: 1,
    marginTop: 100,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
