import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ComputerWins from '../components/ComputerWins';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOver({ chosenNumber, turnsTaken, resetGame }) {
  return (
    <View>
      <ComputerWins chosenNumber={chosenNumber} turnsTaken={turnsTaken} />
      <View style={styles.playAgainBtn}>
        <PrimaryButton whenPressed={resetGame}>Play Again</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playAgainBtn: {
    alignSelf: 'center',
  },
});
