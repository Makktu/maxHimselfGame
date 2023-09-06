import React from 'react';
import { StyleSheet, Text } from 'react-native';
import COLORS from '../../helpers/COLORS';

export default function InstructionText({ children }) {
  return <Text style={styles.instructionStyle}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionStyle: {
    color: COLORS.accent500,
    fontSize: 18,
    marginTop: 4,
  },
});
