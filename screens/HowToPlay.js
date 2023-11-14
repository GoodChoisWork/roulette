import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
const HowToPlay = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>How To Play</Text>
      </View>

        <View>
          <Text style={styles.textIntro}>If you're playing roulette strictly for entertainment purposes and not for real money,
             you can organize a friendly game using simulated or play-money chips. Here's a guide on how
              to set up and play a roulette game for entertainment:</Text>
        </View> 

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45271e",
  },

  title: {

    display: flex,
    justifyContent: center,
    alignItems: center,
    
  },

  textIntro: {

    fontSize: 50,

  },
})
export default HowToPlay