import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const HowToPlay = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/HowToPlayBackgrnd.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={styles.flexTitle}>
            <Text style={styles.title}>How To Play</Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              If you're playing roulette strictly for entertainment purposes and
              not for real money, you can organize a friendly game using
              simulated or play-money chips. Here's a guide on how to set up and
              play a roulette game for entertainment:
            </Text>
          </View>

          <View style={styles.flexTitle}>
            <Text style={styles.title}>Steps</Text>
          </View>
          <View>
            <Text style={styles.titleSemi}>Explain the Betting Options:</Text>
          </View>

          <View>
            <Text style={styles.textHow}>
              Before starting, explain the various betting options to the
              players. You can use simplified terms like blue/black, odd/even, or
              specific numbers for straight bets.
            </Text>
          </View>

          <View>
            <Image style={styles.image} source={require('../assets/HowToPlay/betts.png')} resizeMode="contain"/>
          </View>

          <View>
            <Text style={styles.titleSemi}>Place Bets:</Text>
          </View>

          <View>
            <Text style={styles.textHow}>
              Players take turns placing their play-money chips on the desired
              spots on the betting layout. Encourage a variety of bets for more
              excitement.
            </Text>
          </View>

          <View>
            <Image style={styles.image} source={require('../assets/HowToPlay/bettsplaced.png')} resizeMode="contain"/>
          </View>

          <View>
            <Text style={styles.titleSemi}>Spin the Wheel:</Text>
          </View>

          <View>
            <Text style={styles.textHow}>
              Spin the roulette wheel. If you're using an electronic version,
              activate the spin feature. When the ball comes to rest in a
              numbered pocket, the winning bets are determined.
            </Text>
          </View>

          <View>
            <Image style={styles.image} source={require('../assets/HowToPlay/spinning.png')} resizeMode="contain"/>
          </View>

          <View>
            <Text style={styles.titleSemi}>Continue Rounds:</Text>
          </View>

          <View>
            <Text style={styles.textHow}>
              Continue playing rounds until players decide to stop or until a
              predetermined time. Players can choose to leave the game or buy
              more play-money chips if they run out.
            </Text>
          </View>

          <View>
            <Text style={styles.titleSemi}>Have Fun:</Text>
          </View>

          <View>
            <Text style={styles.textHow}>
              Emphasize the entertainment aspect of the game. Encourage players
              to enjoy the social interaction, the excitement of the spin, and
              the friendly competition.
            </Text>
          </View>

          <View>
            <Text style={styles.titleSemi}>Experiment with Rules:</Text>
          </View>

          <View>
            <Text style={styles.textHow}>
              Feel free to experiment with house rules, such as setting maximum
              bets, allowing players to combine bets, or introducing additional
              challenges for more variety.
            </Text>
          </View>

          <View>
            <Text style={styles.titleSemi}>No Real Money Involved:</Text>
          </View>

          <View>
            <Text style={styles.textHow}>
              Remind everyone that this is a game for entertainment only, and no
              real money is involved.
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              Playing roulette in this manner can be a fun and lighthearted
              activity for friends or family. Adjust the rules based on the
              preferences of the players, and focus on creating an enjoyable
              experience rather than a competitive one.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45271e",
  },
  image:{
    alignSelf: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    padding: 20,
    fontSize: 40,
    color: "white",
  },

  textIntro: {
    fontSize: 25,
    padding: 10,
    textAlign: "justify",
    color: "white",
  },

  textNumberings: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    textAlign: "justify",
    color: "white",
  },

  textNumberings1: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 20,
    textAlign: "justify",
    color: "white",
  },

  titleSemi: {
    fontSize: 30,
    paddingLeft: 10,
    color: "white",
  },

  textHow: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "justify",
    color: "white",
  },
});
export default HowToPlay;
