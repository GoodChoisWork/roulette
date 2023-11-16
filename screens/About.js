import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
const About = () => {
  return (
    <SafeAreaView>
      <View style={styles.flexTitle}>
          <Text style={styles.title}>About</Text>
        </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45271e",
  },

flexTitle: {

  padding: 20,
  fontSize: 40,

},

})

export default About