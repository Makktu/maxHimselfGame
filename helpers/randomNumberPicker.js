export default function randomNumberPicker(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min + 1) + min);
  if (randNum === exclude) {
    return randomNumberPicker(min, max, exclude);
  } else {
    return randNum;
  }
}
