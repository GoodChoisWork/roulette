import { Image, View,StyleSheet, Text } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.image} resizeMode='contain'/>
      <Text style={styles.logoText}>Roulette</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    image:{
        height : 300,
        width: 300,
        marginTop: 100,
    },
    logoText:{
        fontSize: 72,
        color: 'white'
    }
});

export default Logo