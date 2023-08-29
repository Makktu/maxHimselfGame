import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function gotNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let activeScreen = <StartGameScreen numberGiven={gotNumberHandler} />;

  if (userNumber) {
    activeScreen = <GameScreen chosenNumber={userNumber} />;
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={['#3f0723', '#ddb52f']}
        style={styles.appContainerStyle}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.appContainerStyle}
          imageStyle={styles.backgroundImage}
        >
          {activeScreen}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainerStyle: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
