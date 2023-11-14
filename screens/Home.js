import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
const Home = ({navigation}) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.centeredContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigateToScreen("Game")}>
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigateToScreen("HowToPlay")}>
              <Text style={styles.buttonText}>How To Play</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigateToScreen("About")}>
              <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45271e",
  },
  centeredContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3f08a6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 30,
    width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
