import React from "react";
import { View } from "react-native";
import { Route } from "react-router-native";
import KeepAwake from "react-native-keep-awake";
import SplashScreen from "./src/Technique/SplashScreen";
import { Styles } from "./src/styles";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import Burma from "./src/Burma/Burma";
import Cricket from "./src/Cricket/Cricket";

const App = () => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      <Route exact path="/" component={InscriptionDesJoueurs} />
      <Route exact path="/jeu/cricket" component={Cricket} />
      <Route exact path="/jeu/burma" component={Burma} />
    </View>
    <KeepAwake />
  </SplashScreen>
);

export default App;
