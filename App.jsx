import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import COLORS from './helpers/COLORS';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [turn, setTurnsTaken] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function resetGameHandler() {
    setUserNumber(null);
    setGameIsOver(false);
  }

  function gotNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let activeScreen = <StartGameScreen numberGiven={gotNumberHandler} />;

  if (userNumber) {
    activeScreen = (
      <GameScreen
        chosenNumber={userNumber}
        gameOverHandler={gameOverHandler}
        turn={turn}
        setTurnsTaken={setTurnsTaken}
      />
    );
  }

  if (gameIsOver && userNumber) {
    activeScreen = (
      <GameOver
        chosenNumber={userNumber}
        resetGame={resetGameHandler}
        turn={turn}
      />
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[COLORS.primary700, COLORS.accent500]}
        style={styles.appContainerStyle}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.appContainerStyle}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.appContainerStyle}>
            {activeScreen}
          </SafeAreaView>
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
