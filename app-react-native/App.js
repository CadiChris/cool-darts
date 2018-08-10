import React from "react";
import { View } from "react-native";
import { Route } from "react-router-native";
import KeepAwake from "react-native-keep-awake";
import Cricket from "./src/Cricket/Cricket";
import SplashScreen from "./src/Technique/SplashScreen";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import { Styles } from "./src/styles";
import Titre from "./src/Titre";

const App = () => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      <Route
        exact
        path="/"
        render={() => (
          <View style={{ flex: 1 }}>
            <Titre />
            <InscriptionDesJoueurs />
          </View>
        )}
      />

      <Route exact path="/jeu/cricket" component={Cricket} />

      <Route />
    </View>
    <KeepAwake />
  </SplashScreen>
);

export default App;
