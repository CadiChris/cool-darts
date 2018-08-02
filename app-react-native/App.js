import React from "react";
import { View } from "react-native";
import KeepAwake from "react-native-keep-awake";
import Cricket from "./src/Cricket/Cricket";
import SplashScreen from "./src/Technique/SplashScreen";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs";
import { Styles } from "./src/styles";
import Titre from "./src/Titre";

const App = () => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      <Titre />
      <InscriptionDesJoueurs>
        {(inscrits, retourAuxInscription) => (
          <Cricket
            joueurs={inscrits}
            retourAuxInscriptions={retourAuxInscription}
          />
        )}
      </InscriptionDesJoueurs>
    </View>
    <KeepAwake />
  </SplashScreen>
);

export default App;
