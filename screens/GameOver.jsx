import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ComputerWins from '../components/ComputerWins';
import PrimaryButton from '../components/ui/PrimaryButton';
import COLORS from '../helpers/COLORS';

export default function GameOver({ chosenNumber, turnsTaken, resetGame }) {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={require('../assets/images/success.png')}
      />
      <ComputerWins chosenNumber={chosenNumber} turnsTaken={turnsTaken} />
      <View>
        <Text style={styles.summaryInfo}>
          Your phone needed{' '}
          <Text style={styles.summaryHighlight}>{turnsTaken}</Text> turns to get
          the number <Text style={styles.summaryHighlight}>{chosenNumber}</Text>
          .
        </Text>
      </View>
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
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: 150,
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginVertical: 40,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: 'hidden',
  },
  summaryInfo: {
    marginHorizontal: 6,
    fontFamily: 'open-sans',
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 24,
    textAlign: 'center',
  },
  summaryHighlight: {
    fontFamily: 'open-sans-bold',
    color: COLORS.primary500,
    alignSelf: 'center',
  },
});
