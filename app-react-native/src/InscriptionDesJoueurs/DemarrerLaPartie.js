import React from "react";
import PropTypes from "prop-types";
import { Boutons, Textes } from "../styles";
import Button from "apsl-react-native-button";
import LocalizedStrings from "react-native-localization";
import { Link } from "react-router-native";
import { verticalScale } from "react-native-size-matters";

const DemarrerLaPartie = ({ jeu, isDisabled }) => (
  <Link
    to={`/jeu/${jeu}`}
    component={Button}
    isDisabled={isDisabled}
    style={[
      Boutons.principal,
      { marginBottom: verticalScale(10), marginHorizontal: 10, width: "90%" }
    ]}
    textStyle={Textes.bouton}
  >
    {textes.demarrer}
  </Link>
);

DemarrerLaPartie.propTypes = {
  jeu: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

const textes = new LocalizedStrings({
  en: {
    demarrer: "Start"
  },
  fr: {
    demarrer: "Démarrer"
  }
});

export default DemarrerLaPartie;
