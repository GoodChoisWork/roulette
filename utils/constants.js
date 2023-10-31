import { Platform } from "react-native";
const rouletteWheelValues = [];

const rouletteWheel = [
  26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8,
  30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32, 0,
];

const degreesPerNumber = 360 / rouletteWheel.length;

for (let i = 0; i < rouletteWheel.length; i++) {
  const number = rouletteWheel[i];
  const startDegree = i * degreesPerNumber + 1;
  const endDegree = (i + 1) * degreesPerNumber;
  rouletteWheelValues.push({ number, startDegree, endDegree });
}

const redNumbers = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
];
const blackNumbers = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];
const numbers1to18 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
const numbers19to36 = [
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];
const platform = Platform.OS;

export {
  rouletteWheelValues,
  redNumbers,
  blackNumbers,
  numbers1to18,
  numbers19to36,
  platform,
};
