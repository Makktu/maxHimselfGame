import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../../helpers/COLORS';

export default function Card({ children }) {
  return <Text style={styles.cardStyle}>{children}</Text>;
}

const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: 12,
    marginTop: 24,
    padding: 16,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
