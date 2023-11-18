import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
const Home = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/frontimagefinal.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
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
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "90%",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#a99134",
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
