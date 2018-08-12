import React from "react";
import { View } from "react-native";
import { Switch, Route, Redirect } from "react-router-native";
import SplashScreen from "./src/Technique/SplashScreen";
import { Styles } from "./src/styles";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import Burma from "./src/Burma/Burma";
import Cricket from "./src/Cricket/Cricket";
import Navigation from "./src/Navigation/Navigation.container";

const App = () => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      <Switch>
        <Route exact path="/inscription" component={InscriptionDesJoueurs} />

        <Route
          path="/jeu"
          render={({ match }) => (
            <View style={{ flex: 1 }}>
              <Route exact path={`${match.path}/cricket`} component={Cricket} />
              <Route exact path={`${match.path}/burma`} component={Burma} />
              <Navigation />
            </View>
          )}
        />

        <Redirect to="/inscription" />
      </Switch>
    </View>
  </SplashScreen>
);

export default App;
