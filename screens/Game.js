import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Roulette from "../components/Roulette";
import { SafeAreaView } from "react-native-safe-area-context";

const Game = () => {
  const [result, setResult] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const handleRouletteResult = (value) => {
    const { win, number } = value;
    let winnerMessage = "";
    if (number === 0) {
      return;
    } else {
      winnerMessage = win ? "You Win" : "You Lose";
    }
    setResult(winnerMessage);
    setModalVisible(true);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/frontimagefinal.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Roulette onResult={handleRouletteResult} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Handle modal close action (e.g., via the back button)
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.resultText}>{result}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Close" onPress={toggleModal} />
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    textAlign: "center",
    fontSize: 32,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    width: "100%",
  },
  modalContent: {
    backgroundColor: "transparent",
    padding: 100,
    borderRadius: 10,
    width: "90%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default Game;
