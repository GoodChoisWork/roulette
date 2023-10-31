import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Game from './screens/Game';
import Home from './screens/Home';
import HowToPlay from './screens/HowToPlay';
import About from './screens/About';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HowToPlay"
          component={HowToPlay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto"></StatusBar>
    </NavigationContainer>
    );
}
