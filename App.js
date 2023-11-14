import { StatusBar } from 'expo-status-bar';
import Game from './screens/Game';
import Home from './screens/Home';
import HowToPlay from './screens/HowToPlay';
import About from './screens/About';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import initializeApp from "./components/Routing";
import { useEffect} from 'react';
const Stack = createStackNavigator();
export default function App() {
  useEffect(() => {
    initializeApp()
  }, []);
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
