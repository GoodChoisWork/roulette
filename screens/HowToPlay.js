import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
const HowToPlay = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.flexTitle}>
          <Text style={styles.title}>How To Play</Text>
        </View>

              <View>
                <Text style={styles.textIntro}>If you're playing roulette strictly for entertainment purposes and not for real money,
                  you can organize a friendly game using simulated or play-money chips. Here's a guide on how
                    to set up and play a roulette game for entertainment:</Text>
              </View> 

          <View style={styles.flexTitle}>
            <Text style={styles.title}>Materials Needed</Text>
          </View>

              <View>
                    <Text style={styles.textNumberings1}>1. A roulette wheel (you can use an electronic version, a tabletop wheel, or a homemade wheel). </Text>
                    <Text style={styles.textNumberings}>2. Play-money chips or tokens for betting. </Text>
                    <Text style={styles.textNumberings}>3. A betting layout or mat (you can create a simple one with the numbers and betting options). </Text>
              </View> 

          <View style={styles.flexTitle}>
            <Text style={styles.title}>Steps</Text>
          </View>

          <View>
            <Text style={styles.titleSemi}>Setup the Game:</Text>
          </View>

              <View>
                <Text style={styles.textHow}>Place the roulette wheel on a table, and arrange the play-money chips for players to use.</Text>
              </View> 
            
          <View>
            <Text style={styles.titleSemi}>Assign Starting Chips:</Text>
          </View>

              <View>
                <Text style={styles.textHow}>Each player starts with a certain number of play-money chips. Determine this amount based on how long you want the game to last and the number of players.</Text>
              </View> 

          <View>
            <Text style={styles.titleSemi}>Explain the Betting Options:</Text>
          </View>

              <View>
                <Text style={styles.textHow}>Before starting, explain the various betting options to the players. You can use simplified terms like red/black, odd/even, or specific numbers for straight bets.</Text>
              </View> 





        </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45271e",
  },

  flexTitle: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },

  title: {

    padding: 20,
    fontSize: 40,

  },

  textIntro: {

    fontSize: 25,
    padding: 20,
    textAlign: "justify",

  },

  textNumberings: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    textAlign: "justify",

  },

  textNumberings1: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 20,
    textAlign: "justify",

  },

  titleSemi:{
    fontSize: 30,
    paddingLeft: 10,

  },

  textHow:{
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "justify",

  }
})
export default HowToPlay