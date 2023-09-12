import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../../helpers/COLORS';

export default function InstructionText({ children, style }) {
  return (
    <View style={styles.instructionStyle}>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: COLORS.accent500,
    fontSize: 18,
  },
});
