import { StyleSheet, View } from 'react-native';
import COLORS from '../../helpers/COLORS';

export default function Card({ children }) {
  return <View style={styles.cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
