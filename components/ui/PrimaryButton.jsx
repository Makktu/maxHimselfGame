import { Text, View, StyleSheet, Pressable } from 'react-native';
import COLORS from '../../helpers/COLORS';

export default function PrimaryButton({ children, whenPressed }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressedStyle] : styles.container
        }
        onPress={whenPressed}
        android_ripple={{ color: COLORS.primary600 }}
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
    backgroundColor: COLORS.primary500,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textStyle: {
    color: 'azure',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
  },
  pressedStyle: {
    opacity: 0.75,
  },
});
