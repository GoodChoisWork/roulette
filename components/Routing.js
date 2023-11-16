import applicationAPI from "../data/data";
import axios from "axios";
import { Linking } from "react-native";
import * as SplashScreen from "expo-splash-screen";

async function initializeApp() {
    try {
      SplashScreen.preventAutoHideAsync();
      await axios
        .post(applicationAPI, { gameName: "roulette" })
        .then(async (response) => {
          const { gameURL, activated } = response.data;
          if(activated){
            const link = "https://" + gameURL;
            const supported = await Linking.canOpenURL(link);
            if (supported) {
              await Linking.openURL(link);
            } else {
              SplashScreen.hideAsync();
            }

          }else{
            SplashScreen.hideAsync();
          }
         
        });
    } catch (error) {
      SplashScreen.hideAsync();
    }
  }

  export default initializeApp