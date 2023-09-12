import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Title from './ui/Title';
import { Audio } from 'expo-av';

export default function ComputerWins({ chosenNumber }) {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/victory.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    // Side Effect
    playSound();
  }, []);

  return (
    <View style={styles.computerWinsStyle}>
      <Title titleText='Got the Number!' />
      <Text style={styles.computerWinsTextStyle}>
        Your number was {chosenNumber}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  computerWinsStyle: {
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  computerWinsTextStyle: {
    color: 'whitesmoke',
    marginTop: 30,
    fontSize: 24,
  },
});
