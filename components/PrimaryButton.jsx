import { Text, View, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function PrimaryButton({ children, whenPressed }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressedStyle] : styles.container
        }
        onPress={whenPressed}
        android_ripple={{ color: '#410d27' }}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 18,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: '#72063c',
    height: 32,
    width: 145,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
  textStyle: {
    color: 'azure',
    fontSize: 20,
    textAlign: 'center',
  },
  pressedStyle: {
    opacity: 0.75,
  },
});
