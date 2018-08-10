import React from "react";
import { View } from "react-native";
import { Route } from "react-router-native";
import KeepAwake from "react-native-keep-awake";
import SplashScreen from "./src/Technique/SplashScreen";
import { Styles } from "./src/styles";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import Burma from "./src/Burma/Burma";
import Cricket from "./src/Cricket/Cricket";
import Navigation from "./src/Navigation/Navigation.container";

const App = () => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      <Route exact path="/" component={InscriptionDesJoueurs} />

      <Route
        path="/jeu"
        render={({ match }) => (
          <View style={{ flex: 1 }}>
            <Route path={`${match.path}/cricket`} component={Cricket} />
            <Route path={`${match.path}/burma`} component={Burma} />

            <Navigation />
          </View>
        )}
      />
    </View>
    <KeepAwake />
  </SplashScreen>
);

export default App;
