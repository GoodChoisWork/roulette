import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import { Image, StyleSheet, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  redNumbers,
  blackNumbers,
  rouletteWheelValues,
  numbers19to36,
  numbers1to18,
} from "../utils/constants";
import BettingBoard from "../components/BettingBoard";
import { platform } from "../utils/constants";
const height = Dimensions.get("window").height;
const Roulette = ({ onResult }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const rotationValue = useRef(new Animated.Value(0)).current;
  const [randomValue, setRandomValue] = useState(0);
  const [isBetNotPlaced, setIsBetPlaced] = useState(true);
  const [bet, setBet] = useState("");

  const startSpin = () => {
    const randomAngle = Math.random() * 361;
    setRandomValue(randomAngle);

    if (!isSpinning) {
      setIsSpinning(true);
      rotationValue.setValue(0);
      const easingFunction = Easing.bezier(0, 1, 0.9, 1);

      Animated.timing(rotationValue, {
        toValue: 36000 + randomAngle,
        duration: 30000,
        easing: easingFunction,
        useNativeDriver: true,
      }).start(() => {
        setIsSpinning(false);
        onResult(checkBet(getRouletteNumber(randomAngle)));
      });
    }
  };

  const spinInterpolate = rotationValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const spinStyle = {
    transform: [{ rotate: spinInterpolate }],
  };

  const arrowStyle = {
    position: "absolute",
    top: height / (height > 900 ? 10.5 : height < 840 ? 50 : 9),
    left: Dimensions.get("window").width / 2.07,
  };
  console.log(Dimensions.get("window").height);

  function getRouletteNumber(randomAngle) {
    for (let i = 0; i < rouletteWheelValues.length; i++) {
      let { startDegree, endDegree, number } = rouletteWheelValues[i];
      if (randomAngle >= startDegree && randomAngle < endDegree) {
        return number;
      }
    }
    return 0;
  }

  function checkBet(number) {
    switch (bet) {
      case "red":
        return { win: redNumbers.includes(number), number };
      case "black":
        return { win: blackNumbers.includes(number), number };
      case "1-18":
        return { win: numbers1to18.includes(number), number };
      case "19-36":
        return { win: numbers19to36.includes(number), number };
      default:
        return { win: false, number };
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.Image
          source={require("../assets/roulette.png")}
          resizeMode="contain"
          style={[styles.image, spinStyle]}
        />
        <Image
          source={require("../assets/arrowdown.png")} // Replace with the arrow image path
          style={[styles.arrow, arrowStyle]}
        />
        <BettingBoard onBetPlaced={setIsBetPlaced} onBetSet={setBet} />
        <TouchableOpacity
          style={
            isSpinning
              ? styles.spinningButton
              : isBetNotPlaced
              ? styles.betNotSet
              : styles.button
          }
          onPress={startSpin}
          disabled={isBetNotPlaced}
        >
          <Text
            style={isSpinning ? styles.spinningButtonText : styles.buttonText}
          >
            Spin
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
  },
  arrow: {
    width: 20,
    height: 35,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "red",
    width: 100,
    padding: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  spinningButtonText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
  spinningButton: {
    backgroundColor: "lightgray",
    width: 100,
    padding: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
  },
  betNotSet: {
    backgroundColor: "lightgray",
    width: 100,
    padding: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
});

export default Roulette;
