import React from "react";
import { View } from "react-native";
import { Route } from "react-router-native";
import KeepAwake from "react-native-keep-awake";
import Cricket from "./src/Cricket/Cricket";
import SplashScreen from "./src/Technique/SplashScreen";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import { Styles } from "./src/styles";

const App = () => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      <Route exact path="/" component={InscriptionDesJoueurs} />
      <Route exact path="/jeu/cricket" component={Cricket} />
    </View>
    <KeepAwake />
  </SplashScreen>
);

export default App;
