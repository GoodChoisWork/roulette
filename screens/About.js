import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/HowToPlayBackgrnd.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
      <ScrollView>
      <View style={styles.flexTitle}>
          <Text style={styles.title}>About</Text>
        </View>

              <View>
                <Text style={styles.textIntro}>Welcome to Roulette Entertainment Games, where the thrill of the spin meets the joy of casual gaming!</Text>
              </View>

              <View>
                <Text style={styles.textIntro}>At Roulette Entertainment Games, we believe that everyone deserves a chance to 
                experience the excitement of roulette without the pressure of monetary stakes. Our mission is to provide a 
                fun and engaging platform where players can enjoy the classic game of roulette purely for entertainment.</Text>
              </View>

          

              <View>
                <Text style={styles.textIntro}>Founded on the principles of inclusivity and enjoyment, 
                Roulette Entertainment Games offers a virtual space where players can spin the wheel, 
                make strategic choices, and savor the anticipation of where the ball will land—all without the 
                stress of real-world finances. It's about relishing the game, sharing laughs with friends, and enjoying the 
                thrill of the spin in a lighthearted atmosphere.</Text>
              </View>

              <View>
                <Text style={styles.textIntro}>Our diverse range of game modes caters to players of all preferences, 
                whether you're a seasoned roulette enthusiast or a newcomer curious about the game's charm. 
                We've crafted an experience that values the social aspect of gaming, encouraging friendly competition 
                and camaraderie among players.</Text>
              </View>

              

              <View>
                <Text style={styles.textIntro}>Stay tuned for regular updates and new features that will enhance your gaming experience. 
                From themed roulette wheels to interactive challenges, 
                Roulette Entertainment Games is committed to delivering endless entertainment without the need for 
                financial investment.</Text>
              </View>


              <View>
                <Text style={styles.textIntro}>Thank you for being a part of our gaming community. 
                Let the virtual wheel spin, and may every game with Roulette Entertainment Games 
                be a source of joy and amusement!</Text>
              </View>


              </ScrollView>
              </ImageBackground>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45271e",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

flexTitle: {
  color: 'white',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

},

title: {

  padding: 20,
  fontSize: 40,
  color: 'white'
},

textIntro: {

  fontSize: 25,
  padding: 10,
  textAlign: "justify",
  color: 'white'
},

})

export default About