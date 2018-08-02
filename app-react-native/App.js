import React from "react";
import { View } from "react-native";
import KeepAwake from "react-native-keep-awake";
import Cricket from "./src/Cricket/Cricket";
import SplashScreen from "./src/Technique/SplashScreen";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs";
import { Styles } from "./src/styles";

const App = () => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      <InscriptionDesJoueurs>
        {inscrits => <Cricket joueurs={inscrits} />}
      </InscriptionDesJoueurs>
    </View>
    <KeepAwake />
  </SplashScreen>
);

export default App;
