import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import KeepAwake from "react-native-keep-awake";
import Cricket from "./src/Cricket/Cricket";
import SplashScreen from "./src/Cricket/Technique/SplashScreen";
import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import { View } from "react-native";
import { Styles } from "./src/Cricket/styles";

const App = ({ inscriptionEnCours }) => (
  <SplashScreen dureeDuSplash={2750}>
    <View style={Styles.container}>
      {inscriptionEnCours ? <InscriptionDesJoueurs /> : <Cricket />}
    </View>
    <KeepAwake />
  </SplashScreen>
);

App.propTypes = {
  inscriptionEnCours: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  inscriptionEnCours: state.cricket.actuel.phase === "INSCRIPTION"
});

export default connect(mapStateToProps)(App);

// export default from "./storybook";
