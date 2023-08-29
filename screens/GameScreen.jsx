import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function GameScreen({ chosenNumber = null }) {
  console.log(chosenNumber);
  return (
    <View>
      <Text style={{ fontSize: 30, margin: 70, color: 'orange' }}>
        GameScreen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
